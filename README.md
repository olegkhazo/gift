# ShitGift - Prank Gift Landing Page

A modern, responsive landing page for a prank gift service (manure delivery) built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Beautiful, modern UI design
- 🛒 Shopping cart functionality
- 📱 Fully responsive design
- 🎯 Product showcase with variants
- 💬 Reviews section
- 📝 Checkout process
- 🔒 Anonymous ordering system

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with header
│   ├── page.tsx            # Home page
│   ├── products/[id]/      # Product detail pages
│   ├── checkout/           # Checkout page
│   └── order-success/      # Order confirmation page
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── CartProvider.tsx   # Shopping cart context
│   ├── Hero.tsx           # Hero section
│   ├── Features.tsx       # Features section
│   ├── HowItWorks.tsx     # How it works section
│   ├── Products.tsx       # Products showcase
│   └── Reviews.tsx        # Reviews section
└── data/
    └── products.ts        # Product data
```

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Icons** - Icon library

## Customization

- Edit product data in `data/products.ts`
- Modify styling in `tailwind.config.js`
- Update components in the `components/` directory

## Build for Production

```bash
npm run build
npm start
```

## Deployment on Render

### Prerequisites
- A Render account (sign up at [render.com](https://render.com))
- Your code pushed to a Git repository (GitHub, GitLab, or Bitbucket)

### Deployment Steps

1. **Push your code to GitHub/GitLab/Bitbucket**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

2. **Create a new Web Service on Render**
   - Go to [Render Dashboard](https://dashboard.render.com)
   - Click "New +" → "Web Service"
   - Connect your repository
   - Render will auto-detect Next.js settings

3. **Configure Build Settings**
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Environment**: `Node`
   - **Node Version**: `18` or `20`

4. **Environment Variables (Optional)**
   - Add `NEXT_PUBLIC_VIDEO_URL` if you have a video URL
   - Add any other environment variables you need

5. **Deploy**
   - Click "Create Web Service"
   - Render will automatically build and deploy your app
   - Your site will be live at `https://your-app-name.onrender.com`

### Using render.yaml (Alternative Method)

If you prefer using the `render.yaml` file:
1. Push your code with `render.yaml` included
2. In Render Dashboard, select "New +" → "Blueprint"
3. Connect your repository
4. Render will use the `render.yaml` configuration automatically

### Custom Domain

1. In your Render service settings, go to "Custom Domains"
2. Add your domain
3. Follow Render's DNS configuration instructions
4. SSL certificate will be automatically provisioned

### Troubleshooting

- **Build fails**: Check build logs in Render dashboard
- **App crashes**: Check runtime logs for errors
- **Environment variables**: Make sure they're set in Render dashboard
- **Static files**: Ensure `public/` folder is included in your repository

## License

This project is for demonstration purposes.
