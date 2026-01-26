# Render Deployment Guide

## Quick Start

### Option 1: Automatic Setup (Recommended)

1. **Push to GitHub/GitLab/Bitbucket**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy on Render**
   - Go to [render.com](https://render.com) and sign up/login
   - Click "New +" → "Web Service"
   - Connect your Git repository
   - Render will auto-detect Next.js

3. **Configure (if needed)**
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`
   - Environment: `Node`
   - Node Version: `20` (or `18`)

4. **Deploy**
   - Click "Create Web Service"
   - Wait for build to complete (~5-10 minutes)
   - Your site will be live!

### Option 2: Using render.yaml

1. The `render.yaml` file is already configured
2. In Render Dashboard, select "New +" → "Blueprint"
3. Connect your repository
4. Render will automatically use the configuration

## Build Settings

- **Build Command**: `npm install && npm run build`
- **Start Command**: `npm start`
- **Node Version**: `20` (specified in `.nvmrc`)

## Environment Variables

Set these in Render Dashboard → Environment:

- `NODE_ENV=production` (automatically set)
- `NEXT_PUBLIC_VIDEO_URL` (optional - your YouTube video URL)

## Post-Deployment Checklist

- [ ] Test the live site
- [ ] Verify all pages load correctly
- [ ] Test language switching
- [ ] Test shopping cart functionality
- [ ] Check mobile responsiveness
- [ ] Add custom domain (optional)
- [ ] Set up monitoring (optional)

## Troubleshooting

### Build Fails
- Check build logs in Render dashboard
- Ensure all dependencies are in `package.json`
- Verify Node version compatibility

### App Crashes
- Check runtime logs
- Verify environment variables are set
- Ensure `npm start` works locally

### Images Not Loading
- Verify images are in `public/images/` directory
- Check image paths in components
- Ensure placeholder images work as fallback

### Language Not Persisting
- Check browser localStorage (should work automatically)
- Verify i18n context is properly set up

## Performance Tips

1. **Enable Caching**: Render automatically handles static assets
2. **Optimize Images**: Use optimized image formats (WebP)
3. **Monitor Performance**: Use Render's built-in monitoring

## Support

- Render Docs: https://render.com/docs
- Render Support: https://render.com/support
- Next.js Docs: https://nextjs.org/docs
