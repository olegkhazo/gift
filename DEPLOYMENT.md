# Deployment Guide

## Quick Start (Local Development)

1. **Install dependencies** (already done):
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## Production Deployment Options

### Option 1: Vercel (Recommended - Easiest)

Vercel is made by the creators of Next.js and offers the best integration.

**Steps:**
1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com) and sign up/login
3. Click "New Project"
4. Import your repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"
7. Your site will be live in ~2 minutes!

**Custom Domain:**
- Add your domain in Vercel dashboard → Settings → Domains
- Follow DNS configuration instructions

**Environment Variables** (if needed later):
- Add in Vercel dashboard → Settings → Environment Variables

---

### Option 2: Netlify

**Steps:**
1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [netlify.com](https://netlify.com) and sign up/login
3. Click "New site from Git"
4. Connect your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy site"

**Note:** For Next.js on Netlify, you may need `@netlify/plugin-nextjs` plugin.

---

### Option 3: Self-Hosted (VPS/Server)

**Prerequisites:**
- Node.js 18+ installed
- PM2 (process manager) recommended

**Steps:**

1. **Build the application:**
   ```bash
   npm run build
   ```

2. **Start production server:**
   ```bash
   npm start
   ```

3. **Using PM2 (recommended for production):**
   ```bash
   # Install PM2 globally
   npm install -g pm2
   
   # Start with PM2
   pm2 start npm --name "shitgift" -- start
   
   # Save PM2 configuration
   pm2 save
   
   # Setup PM2 to start on server reboot
   pm2 startup
   ```

4. **Setup Nginx reverse proxy** (example):
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

5. **Setup SSL with Let's Encrypt:**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d yourdomain.com
   ```

---

### Option 4: Docker Deployment

Create a `Dockerfile`:

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

Update `next.config.js`:
```js
module.exports = {
  output: 'standalone',
  // ... rest of config
}
```

Build and run:
```bash
docker build -t shitgift .
docker run -p 3000:3000 shitgift
```

---

## Pre-Deployment Checklist

- [ ] Test all pages locally
- [ ] Verify shopping cart works
- [ ] Check mobile responsiveness
- [ ] Update contact email in Footer component
- [ ] Add real payment integration (Stripe, PayPal, etc.)
- [ ] Setup environment variables for API keys
- [ ] Configure domain and SSL
- [ ] Setup analytics (Google Analytics, etc.)
- [ ] Test checkout flow end-to-end

---

## Environment Variables

If you need to add environment variables later (for payment processing, etc.):

1. Create `.env.local` file:
   ```
   NEXT_PUBLIC_STRIPE_KEY=your_key_here
   ```

2. Access in code:
   ```typescript
   const apiKey = process.env.NEXT_PUBLIC_STRIPE_KEY
   ```

3. For Vercel: Add in dashboard → Settings → Environment Variables
4. For other platforms: Follow their specific instructions

---

## Performance Optimization

After deployment:
- Enable Next.js Image Optimization
- Setup CDN (Vercel/Netlify handle this automatically)
- Monitor with tools like Vercel Analytics or Google Analytics

---

## Support

For issues:
- Check Next.js docs: https://nextjs.org/docs
- Vercel docs: https://vercel.com/docs
- Project README.md
