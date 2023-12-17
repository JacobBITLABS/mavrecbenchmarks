from PIL import Image

def rescale_image(image_path, new_width=1080):
    try:
        # Open the image using Pillow
        with Image.open(image_path) as img:
            # Convert image to RGB mode if it has an alpha channel
            if img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info):
                img = img.convert('RGB')

            # Calculate the new height while maintaining aspect ratio
            width_percent = new_width / float(img.size[0])
            new_height = int(float(img.size[1]) * float(width_percent))

            # Resize the image
            resized_img = img.resize((new_width, new_height), Image.LANCZOS)

            # Save the resized image as JPEG
            resized_img.save("rescaled_gif_placeholder.jpg", quality=95)  # Change the file extension as needed
            print("Image resized and saved as rescaled_image.jpg")
    except Exception as e:
        print(f"An error occurred: {e}")

# Replace 'path_to_your_image.jpg' with the path to your image file
rescale_image('gif_placeholder.jpg')
