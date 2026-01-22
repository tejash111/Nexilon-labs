# Adding Videos to Your Agency Page

To complete the cinematic experience, add your product demo videos to the `public/videos/` directory.

## Required Video Files

Place the following video files in the `public/videos/` folder:

1. **product-demo-1.mp4** - First video section (standard 16:9 aspect ratio)
2. **product-demo-2.mp4** - Second video section (16:9 aspect ratio)
3. **product-demo-3.mp4** - Third video section (21:9 ultra-wide aspect ratio)

## Video Recommendations

For the best results, your videos should:

- **Format**: MP4 with H.264 codec
- **Resolution**: 1920x1080 or higher (4K for best quality)
- **Frame Rate**: 24fps or 30fps for cinematic feel
- **Duration**: 10-30 seconds (will loop automatically)
- **File Size**: Keep under 10MB for optimal loading performance
- **Content**: 
  - product-demo-1: Your product in a hero environment
  - product-demo-2: Product features or details
  - product-demo-3: Wide cinematic shot of product ecosystem

## Free Video Resources

If you need placeholder videos, you can find high-quality free stock videos at:
- [Pexels Videos](https://www.pexels.com/videos/)
- [Pixabay Videos](https://pixabay.com/videos/)
- [Coverr](https://coverr.co/)

Search for terms like:
- "software development"
- "coding"
- "technology"
- "digital abstract"
- "futuristic interface"

## Optimization Tips

To optimize your videos for web:
```bash
# Using ffmpeg to compress and optimize
ffmpeg -i input.mp4 -c:v libx264 -crf 23 -preset slow -c:a aac -b:a 128k output.mp4
```

Once your videos are in place at `public/videos/`, they will automatically play and loop on the page!
