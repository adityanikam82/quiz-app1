# Vite AWS Deployment Project

A modern web application built with Vite and ready for AWS deployment.

## Features

- ⚡ Lightning fast development with Vite
- 📱 Responsive design
- 🎨 Modern CSS with custom properties
- 🚀 Production-ready build configuration
- ☁️ AWS deployment ready

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## AWS Deployment

This project is configured for easy deployment to AWS using various services:

### Option 1: AWS S3 + CloudFront (Recommended)
- Static website hosting
- Global CDN distribution
- Cost-effective for static sites

### Option 2: AWS Amplify
- Automated CI/CD
- Easy domain management
- Built-in hosting

### Option 3: AWS EC2
- Full server control
- Custom configurations
- More complex setup

See deployment instructions below for detailed steps.

## Project Structure

```
├── index.html          # Entry point
├── main.js            # Application logic
├── style.css          # Styling
├── vite.config.js     # Vite configuration
├── package.json       # Dependencies and scripts
└── README.md          # This file
```

## Build Output

The build process creates a `dist/` folder with optimized static files ready for deployment.
</vite>