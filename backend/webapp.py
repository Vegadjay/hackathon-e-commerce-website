from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import uuid
from PIL import Image
import pickle
import numpy as np
import cv2
import tensorflow as tf
from tensorflow.keras.applications import ResNet152
from tensorflow.keras.layers import GlobalMaxPooling2D
from numpy.linalg import norm
import faiss

app = Flask(__name__)
CORS(app)

# Directory to save uploaded files
UPLOAD_FOLDER = 'uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# Load pre-trained ResNet model for feature extraction
def load_model():
    base_model = ResNet152(weights='imagenet', include_top=False, input_shape=(224, 224, 3))
    base_model.trainable = False
    model = tf.keras.Sequential([base_model, GlobalMaxPooling2D()])
    return model

model = load_model()

# Load precomputed features and filenames
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
    img = img.resize((224, 224))
    img_array = np.array(img)
    img_array = np.expand_dims(img_array, axis=0)
    preprocessed_img = tf.keras.applications.resnet50.preprocess_input(img_array)
    result = model.predict(preprocessed_img).flatten()
    normalized_result = result / norm(result)
    return normalized_result

# Find the top N similar images using FAISS for fast retrieval
def recommend(features, features_list, n_recommendations=10):
    index = faiss.IndexFlatL2(features_list.shape[1])
    index.add(features_list.astype('float32'))
    distances, indices = index.search(np.array([features], dtype='float32'), n_recommendations)
    return distances, indices

# Save uploaded file with a random name
def save_file_with_random_name(uploaded_file):
    random_name = str(uuid.uuid4().hex[:8]) + os.path.splitext(uploaded_file.filename)[1]
    file_path = os.path.join(UPLOAD_FOLDER, random_name)
    uploaded_file.save(file_path)
    return file_path

@app.route('/recommend', methods=['POST'])
def recommend_images():
    if 'file' not in request.files:
        return jsonify({"error": "No file part in the request"}), 400

    uploaded_file = request.files['file']

    if uploaded_file.filename == '':
        return jsonify({"error": "No selected file"}), 400

    try:
        # Save the uploaded file
        file_path = save_file_with_random_name(uploaded_file)

        # Process the uploaded image
        uploaded_image = Image.open(file_path)
        masked_image = mask_faces(uploaded_image)

        # Extract features and find recommendations
        features = feature_extraction(masked_image, model)
        distances, indices = recommend(features, features_list, n_recommendations=10)

        # Collect recommended filenames
        recommended_filenames = [filenames[i] for i in indices[0]]

        # Return the recommended filenames as a response
        return jsonify({"message": "Success", "recommendations": recommended_filenames}), 200

    except Exception as e:
        return jsonify({"error": "An error occurred", "details": str(e)}), 500

    finally:
        # Clean up the uploaded file
        if os.path.exists(file_path):
            os.remove(file_path)

if __name__ == '__main__':
    app.run(port=5000,debug=True)
