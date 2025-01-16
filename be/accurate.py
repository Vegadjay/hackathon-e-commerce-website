import tensorflow as tf
from tensorflow.keras.preprocessing import image
from tensorflow.keras.layers import GlobalMaxPooling2D
from tensorflow.keras.applications.resnet50 import ResNet50, preprocess_input
import numpy as np
import cv2  # For face detection
import os
import pickle
from tqdm import tqdm
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.neighbors import NearestNeighbors

# Load pre-trained ResNet50 model for feature extraction
base_model = ResNet50(weights='imagenet', include_top=False, input_shape=(224, 224, 3))
base_model.trainable = False
model = tf.keras.Sequential([
    base_model,
    GlobalMaxPooling2D()
])
model.summary()

# Function to detect and mask faces in an image
def mask_faces(img):
    face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))

    for (x, y, w, h) in faces:
        # Mask the face region with a solid color
        img[y:y + h, x:x + w] = [128, 128, 128]  # Neutral gray color
    return img

# Function to preprocess and extract features from an image
def extract_features(img_path, model):
    img = cv2.imread(img_path)
    img = mask_faces(img)  # Mask faces in the image
    img = cv2.resize(img, (224, 224))  # Resize to model input size
    img_array = np.expand_dims(img, axis=0)
    preprocessed_img = preprocess_input(img_array)
    result = model.predict(preprocessed_img).flatten()
    normalized_result = result / np.linalg.norm(result)
    return normalized_result

# Prepare the dataset
image_directory = "converted"  # Directory containing clothing images
filenames = [os.path.join(image_directory, file) for file in os.listdir(image_directory) if file.endswith(('.png', '.jpg', '.jpeg'))]

# Extract features for all images
features_list = []
for file in tqdm(filenames, desc="Processing Images"):
    features_list.append(extract_features(file, model))

# Save extracted features and filenames
pickle.dump(features_list, open("embeddings.pkl", "wb"))
pickle.dump(filenames, open("filenames.pkl", "wb"))

print(f"\nFeature extraction complete. {len(features_list)} images processed.")

# Convert features to numpy array
features_array = np.array(features_list)

# Fit a NearestNeighbors model for similarity search
neighbors_model = NearestNeighbors(n_neighbors=5, metric='cosine').fit(features_array)

# Display some sample retrieval results
def display_sample_results(query_img_path, model, neighbors_model, filenames):
    query_features = extract_features(query_img_path, model)
    distances, indices = neighbors_model.kneighbors([query_features])

    print(f"\nQuery Image: {query_img_path}")
    print(f"Top 5 Similar Images:")
    for i, idx in enumerate(indices[0]):
        print(f"Rank {i+1}: {filenames[idx]} (Cosine Distance: {distances[0][i]:.4f})")

# Test the model with a sample query
sample_query = filenames[0]  # Use the first image as a query
display_sample_results(sample_query, model, neighbors_model, filenames)

# Evaluate Retrieval Accuracy
def evaluate_retrieval(features_array, filenames, neighbors_model, top_k=5):
    correct_matches = 0
    total_queries = len(filenames)

    for i, query_features in enumerate(features_array):
        distances, indices = neighbors_model.kneighbors([query_features])
        if i in indices[0]:
            correct_matches += 1

    accuracy = (correct_matches / total_queries) * 100
    print(f"\nRetrieval Accuracy: {accuracy:.2f}%")
    print(f"Total Queries: {total_queries}")
    print(f"Correct Matches: {correct_matches}")
    return accuracy

# Calculate and display retrieval accuracy
evaluate_retrieval(features_array, filenames, neighbors_model)
