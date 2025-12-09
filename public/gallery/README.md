# Gallery Images

## How to Add Images to the Gallery

1. **Add your images to this folder** (`public/gallery/`)
   - Supported formats: JPG, JPEG, PNG, WebP, GIF
   - Recommended size: 1920x1080 or similar aspect ratio
   - Keep file sizes reasonable (under 2MB per image for web performance)

2. **Update the Gallery component** (`src/pages/Gallery.jsx`)
   - Open the file and find the `imageFiles` array (around line 12)
   - Add your image filenames to the array, for example:
   
   ```javascript
   const imageFiles = [
     'photo1.jpg',
     'photo2.jpg',
     'training-session.png',
     'competition-day.jpg',
     // Add more images here
   ]
   ```

3. **Image naming tips:**
   - Use descriptive names: `shooting-range-2024.jpg` instead of `IMG_001.jpg`
   - Use lowercase and hyphens: `team-photo.jpg` not `Team Photo.jpg`
   - Avoid spaces and special characters

## Example Structure

```
public/
  └── gallery/
      ├── README.md (this file)
      ├── training-session-1.jpg
      ├── competition-2024.jpg
      ├── team-photo.jpg
      └── awards-ceremony.png
```

## Current Status

This folder is currently empty. Add your images here and update the Gallery component to display them!
