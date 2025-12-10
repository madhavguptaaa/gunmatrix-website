# GunMatrix Website - Setup Guide

## Quick Overview of Changes

### 1. Gallery Page Updates
- ✅ Changed from collage-style layout to organized grid layout
- ✅ Removed references to deleted images
- ✅ Updated to use only existing photos from `public/gallery` folder

### 2. Home Page Enhancements
- ✅ Added "Academy Highlights" section with 4 featured photos
- ✅ Professional hover effects and animations
- ✅ Fully responsive design

### 3. About Page Updates
- ✅ Updated founder photos: now using `founder-photo.jpeg` and `founder-photo-3.png`

### 4. Corporate Inquiries Form with Nodemailer
- ✅ Integrated with backend API
- ✅ Added loading states, success messages, and error handling
- ✅ Email notifications with inquiry type categorization

---

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation

#### 1. Install Frontend Dependencies
```bash
npm install
```

#### 2. Install Backend Dependencies
```bash
cd server
npm install
```

### Configuration

#### Setting Up Email (Nodemailer)

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Create a `.env` file from the example:
   ```bash
   # Windows PowerShell
   Copy-Item .env.example .env
   
   # Or manually create .env file
   ```

3. Edit `.env` file with your email credentials:
   ```env
   EMAIL_SERVICE=gmail
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   RECEIVER_EMAIL=your-email@gmail.com
   PORT=3001
   ```

#### Gmail App Password Setup (Recommended)

For Gmail users, you need to create an App Password:

1. Go to your Google Account: https://myaccount.google.com/
2. Navigate to **Security** > **2-Step Verification** (enable if not already)
3. Scroll to **App passwords**
4. Select app: **Mail**
5. Select device: **Other (Custom name)** - enter "GunMatrix Website"
6. Click **Generate**
7. Copy the 16-character password
8. Use this password as `EMAIL_PASS` in your `.env` file

---

## Running the Application

### Development Mode

You need to run both the frontend and backend servers:

#### Terminal 1 - Frontend (Vite)
```bash
npm run dev
```
The frontend will run on: http://localhost:5173

#### Terminal 2 - Backend (Express + Nodemailer)
```bash
cd server
npm run dev
```
The backend will run on: http://localhost:3001

### Testing the Contact Form

1. Make sure both servers are running
2. Navigate to the Corporate Inquiries page
3. Fill out the form
4. Submit and check your email!

---

## Project Structure

```
gunmatrix-website/
├── public/
│   ├── gallery/           # Gallery images (only existing files)
│   ├── founder-photo.jpeg
│   ├── founder-photo-3.png
│   └── ...
├── server/
│   ├── .env              # Email configuration (create this)
│   ├── .env.example      # Template for .env
│   ├── index.js          # Express server with nodemailer
│   └── package.json
├── src/
│   ├── pages/
│   │   ├── Home.jsx      # Updated with highlights section
│   │   ├── Gallery.jsx   # Updated with grid layout
│   │   ├── About.jsx     # Updated founder photos
│   │   └── Corporate.jsx # Updated with API integration
│   └── ...
└── package.json
```

---

## Troubleshooting

### Email Not Sending

1. **Check server is running**: Make sure the backend server (port 3001) is running
2. **Verify .env configuration**: Double-check your email credentials
3. **Gmail users**: Use App Password, not regular password
4. **2-Step Verification**: Required for Gmail App Passwords
5. **Check console**: Look for error messages in both browser and server terminals

### Images Not Loading

1. Ensure images exist in `public/gallery` folder
2. Check browser console for 404 errors
3. Verify image file names match exactly (case-sensitive)

### CORS Issues

If you see CORS errors:
- Backend includes CORS middleware
- Make sure backend URL in `Corporate.jsx` matches your server (default: http://localhost:3001)

---

## Production Deployment

### Environment Variables

When deploying, make sure to set these environment variables on your hosting platform:

```
EMAIL_SERVICE=gmail
EMAIL_USER=your-production-email@gmail.com
EMAIL_PASS=your-app-password
RECEIVER_EMAIL=contact@yourcompany.com
PORT=3001
```

### Frontend API URL

Update the API URL in `src/pages/Corporate.jsx` from `http://localhost:3001` to your production backend URL.

---

## Features

### Gallery Page
- ✨ Organized grid layout (responsive)
- 🎥 Support for both images and videos
- 🔍 Lightbox view with navigation
- 📱 Mobile-friendly

### Home Page
- 🎬 Video background hero section
- 🖼️ Academy highlights with hover effects
- 📊 Feature cards
- 💫 Smooth animations

### Corporate Inquiries
- 📧 Email notifications via Nodemailer
- ⚡ Real-time form validation
- ✅ Success/error messaging
- 🔄 Loading states
- 📝 Multiple inquiry types

---

## Support

For issues or questions, contact the development team or refer to:
- React Documentation: https://react.dev/
- Vite Documentation: https://vitejs.dev/
- Nodemailer Documentation: https://nodemailer.com/

---

**Last Updated**: December 2025
