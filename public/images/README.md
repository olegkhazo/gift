# Product Images Directory

Place your product images in this directory. The following images are expected:

## Required Images

### Product Images (for ProductGallery component)
- `product-1.jpg` - Clear plastic container with manure gift
- `product-2.jpg` - Stand-up plastic pouch with manure
- `product-3.jpg` - Kraft paper pouch package
- `product-4.jpg` - Black gift box with container
- `product-5.jpg` - Cardboard box with moose sticker
- `product-6.jpg` - Container with custom message label

### Showcase Images (for ImageShowcase component)
- `showcase-1.jpg` - Multiple product packages display
- `showcase-2.jpg` - Gift box with container
- `showcase-3.jpg` - Custom label messages
- `showcase-4.jpg` - Product close-up

### Video Thumbnail
- `video-thumbnail.jpg` - Thumbnail for video section (optional)

## Image Specifications

- **Format**: JPG or PNG
- **Recommended Size**: 
  - Product images: 800x800px (square) or 1200x800px (landscape)
  - Gallery images: 1200x800px
  - Showcase images: 1200x800px
- **File Size**: Optimize images to keep file sizes reasonable (< 500KB each)

## Image Optimization

The Next.js Image component will automatically optimize images. If you need to optimize manually:

1. Use tools like:
   - [TinyPNG](https://tinypng.com/)
   - [Squoosh](https://squoosh.app/)
   - [ImageOptim](https://imageoptim.com/)

2. Or use Next.js Image Optimization API

## Adding Your Images

1. Place your images in this directory (`public/images/`)
2. Name them according to the list above
3. The components will automatically use them
4. If an image is missing, a placeholder will be shown

## Notes

- All images should be web-optimized
- Use descriptive alt text (already included in components)
- Images will be lazy-loaded for better performance
