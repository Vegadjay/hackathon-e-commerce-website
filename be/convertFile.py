import os
from PIL import Image

def convert_webp_to_jpg(directory):
    """
    Converts all .webp files in the given directory to .jpg format.
    Args:
        directory (str): The path to the directory containing .webp files.
    """
    # Ensure the output directory exists
    output_directory = os.path.join(directory, "converted")
    os.makedirs(output_directory, exist_ok=True)

    for file_name in os.listdir(directory):
        if file_name.lower().endswith('.webp'):
            webp_file = os.path.join(directory, file_name)
            jpg_file = os.path.join(output_directory, os.path.splitext(file_name)[0] + ".jpg")

            try:
                # Open the .webp file and convert it to .jpg
                with Image.open(webp_file) as img:
                    rgb_img = img.convert('RGB')  # Convert to RGB mode
                    rgb_img.save(jpg_file, "JPEG")  # Save as .jpg
                    print(f"Converted: {file_name} -> {os.path.basename(jpg_file)}")
            except Exception as e:
                print(f"Failed to convert {file_name}: {e}")

if __name__ == "__main__":
    input_directory = input("Enter the path to the directory containing .webp files: ")
    if os.path.exists(input_directory):
        convert_webp_to_jpg(input_directory)
    else:
        print("The specified directory does not exist.")
