# Images and Video Setup Guide

## Adding Your Images

### Step 1: Prepare Your Images

Based on the images you provided, here's where to place them:

1. **Product Gallery Images** - Place in `public/images/`:
   - `product-1.jpg` - Clear plastic container (like the one with "Don't want to give someone a gift?" label)
   - `product-2.jpg` - Stand-up plastic pouch
   - `product-3.jpg` - Kraft paper pouch (brown paper package)
   - `product-4.jpg` - Black gift box with container inside
   - `product-5.jpg` - Cardboard box with moose sticker
   - `product-6.jpg` - Container with custom message label

2. **Showcase Images** - Place in `public/images/`:
   - `showcase-1.jpg` - Multiple packages display (the 3 packages side by side)
   - `showcase-2.jpg` - Gift box presentation
   - `showcase-3.jpg` - Custom labels/messages
   - `showcase-4.jpg` - Product close-up

3. **Video Thumbnail** (optional):
   - `video-thumbnail.jpg` - Thumbnail image for the video section

### Step 2: Add Images to Project

Simply copy your image files to the `public/images/` directory:

```
public/
  images/
    product-1.jpg
    product-2.jpg
    product-3.jpg
    product-4.jpg
    product-5.jpg
    product-6.jpg
    showcase-1.jpg
    showcase-2.jpg
    showcase-3.jpg
    showcase-4.jpg
    video-thumbnail.jpg (optional)
```

### Step 3: Image Specifications

- **Format**: JPG, PNG, or WebP
- **Recommended Dimensions**:
  - Product images: 800x800px (square) or 1200x800px (landscape)
  - Gallery images: 1200x800px
- **File Size**: Keep under 500KB each for fast loading
- **Optimization**: Images are automatically optimized by Next.js

## Video Configuration

### Option 1: YouTube Video

1. Upload your video to YouTube
2. Get the video ID from the URL (e.g., `dQw4w9WgXcQ` from `https://www.youtube.com/watch?v=dQw4w9WgXcQ`)
3. Update the video URL in `components/VideoSection.tsx`:
   ```tsx
   src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1"
   ```

### Option 2: Environment Variable

1. Create `.env.local` file in the root directory:
   ```
   NEXT_PUBLIC_VIDEO_URL=https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1
   ```

2. The component will automatically use this URL

### Option 3: Self-Hosted Video

1. Place your video file in `public/videos/`
2. Update `VideoSection.tsx` to use:
   ```tsx
   <video src="/videos/your-video.mp4" controls autoPlay />
   ```

## Current Image Placeholders

If images are not found, the site will automatically show placeholder images with text. Once you add your actual images, they will replace the placeholders automatically.

## Testing

1. Start the dev server: `npm run dev`
2. Navigate to http://localhost:3000
3. Check the new sections:
   - **Image Showcase** - After Features section
   - **Product Gallery** - After Products section
   - **Video Section** - After Product Gallery

## Tips

- Use descriptive filenames that match the component expectations
- Optimize images before uploading (use tools like TinyPNG)
- Test on mobile devices to ensure images look good
- The Image component automatically handles lazy loading and optimization

## Need Help?

If you need to change image paths or add more images:
1. Update the image arrays in:
   - `components/ProductGallery.tsx`
   - `components/ImageShowcase.tsx`
2. Add new image files to `public/images/`
3. Update the `src` paths in the component files
