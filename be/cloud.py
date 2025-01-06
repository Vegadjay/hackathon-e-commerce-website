import streamlit as st
import os
import uuid
from PIL import Image
import pickle
import numpy as np
import cv2
import tensorflow as tf
from tensorflow.keras.applications import ResNet152  # Using ResNet152
from tensorflow.keras.layers import GlobalMaxPooling2D
from sklearn.neighbors import NearestNeighbors
from numpy.linalg import norm
import faiss

# Load pre-trained ResNet model for feature extraction
@st.cache_resource
def load_model():
    # Use ResNet152 for deeper feature extraction
    base_model = ResNet152(weights='imagenet', include_top=False, input_shape=(224, 224, 3))  # Switch to ResNet152
    base_model.trainable = False
    model = tf.keras.Sequential([base_model, GlobalMaxPooling2D()])  # Only use GlobalMaxPooling2D
    return model

model = load_model()

# Load precomputed features and filenames
@st.cache_resource
def load_embeddings():
    features_list = np.array(pickle.load(open('embeddings.pkl', 'rb')))
    filenames = pickle.load(open('filenames.pkl', 'rb'))
    return features_list, filenames

features_list, filenames = load_embeddings()

# Function to detect and mask faces in an image
def mask_faces(img):
    face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')
    gray = cv2.cvtColor(np.array(img), cv2.COLOR_RGB2GRAY)
    faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))
    for (x, y, w, h) in faces:
        img.paste((128, 128, 128), (x, y, x + w, y + h))
    return img

# Extract features for the uploaded image
def feature_extraction(img, model):
    img = img.resize((224, 224))  # Resize for ResNet input
    img_array = np.array(img)
    img_array = np.expand_dims(img_array, axis=0)
    preprocessed_img = tf.keras.applications.resnet50.preprocess_input(img_array)
    result = model.predict(preprocessed_img).flatten()
    normalized_result = result / norm(result)
    return normalized_result

# Find the top N similar images using FAISS for fast retrieval
def recommend(features, features_list, n_recommendations=10):
    # Use FAISS for fast similarity search
    index = faiss.IndexFlatL2(features_list.shape[1])  # Build the index based on L2 distance
    index.add(features_list.astype('float32'))  # Add features to the index
    distances, indices = index.search(np.array([features], dtype='float32'), n_recommendations)  # Search for similar images
    return distances, indices

# Save uploaded file with random name
def save_file_with_random_name(uploaded_file):
    random_name = str(uuid.uuid4().hex[:8]) + os.path.splitext(uploaded_file.name)[1]
    file_path = os.path.join("uploads", random_name)
    with open(file_path, "wb") as f:
        f.write(uploaded_file.getbuffer())
    return file_path

# Streamlit App UI
st.title('Fashion Recommendation System')

# Ensure the "uploads" directory exists
if not os.path.exists("uploads"):
    os.makedirs("uploads")

# File uploader
uploaded_file = st.file_uploader("Choose an image...", type=["jpg", "jpeg", "png"])

if uploaded_file is not None:
    # Save uploaded file with a random name
    file_path = save_file_with_random_name(uploaded_file)

    try:
        # Display the uploaded image
        display_image = Image.open(file_path)
        st.image(display_image, caption="Uploaded Image", use_column_width=True)

        # Mask faces in the uploaded image
        with st.spinner("Processing the image..."):
            masked_image = mask_faces(display_image)

        # Extract features and get recommendations
        with st.spinner("Finding recommendations..."):
            features = feature_extraction(masked_image, model)
            distances, indices = recommend(features, features_list, n_recommendations=10)

        # Display recommended images
        st.subheader("Recommended Images")
        cols = st.columns(2)  # Adjust the number of columns for image layout
        for i, index in enumerate(indices[0]):
            with cols[i % 2]:  # Display in columns
                st.image(filenames[index], caption=f"Score: {1 - distances[0][i]:.2f}", use_column_width=True)

    finally:
        # Delete the uploaded file after use
        if os.path.exists(file_path):
            os.remove(file_path)
