# Nodemailer Setup Guide for GunMatrix Website

Your inquiry form is now configured with **Nodemailer** to send emails! Follow these steps to complete the setup.

## 📋 What's Already Done

✅ Backend server created with Express and Nodemailer  
✅ Corporate inquiry form connected to the backend  
✅ Server dependencies installed  
✅ `.env` file created with placeholders  

## 🔧 Setup Steps

### Step 1: Configure Gmail App Password

Since you're using Gmail, you need to create an **App Password** (not your regular Gmail password):

1. **Enable 2-Step Verification** (if not already enabled):
   - Go to [Google Account Security](https://myaccount.google.com/security)
   - Click on "2-Step Verification" and follow the setup

2. **Generate App Password**:
   - Go to [App Passwords](https://myaccount.google.com/apppasswords)
   - Select app: **Mail**
   - Select device: **Other (Custom name)** → Type "GunMatrix Website"
   - Click **Generate**
   - Copy the 16-character password (without spaces)

### Step 2: Update the .env File

1. Open `server/.env` file
2. Replace `YOUR_APP_PASSWORD_HERE` with the app password you just generated
3. Verify the email addresses are correct:
   ```
   EMAIL_USER=gunmatrixshootingacademy@gmail.com
   RECEIVER_EMAIL=gunmatrixshootingacademy@gmail.com
   EMAIL_PASS=your-16-char-app-password
   ```

### Step 3: Start the Backend Server

Open a **new terminal** and run:

```powershell
cd "c:\Users\Madhav Gupta\Desktop\gunmatrix-website\server"
npm start
```

Or for development with auto-reload:
```powershell
npm run dev
```

You should see: `Server is running on port 3001`

### Step 4: Start the Frontend

In **another terminal**, run:

```powershell
cd "c:\Users\Madhav Gupta\Desktop\gunmatrix-website"
npm run dev
```

### Step 5: Test the Form

1. Navigate to the Corporate Inquiries page: `http://localhost:5173/corporate`
2. Fill out the form with test data
3. Click "Send Inquiry"
4. Check the email inbox at `gunmatrixshootingacademy@gmail.com`

## 📧 Email Format

When someone submits the form, you'll receive an email with:
- Contact person name
- Company name
- Email address
- Phone number
- Inquiry type (Training, Team Building, etc.)
- Message

## 🔍 Troubleshooting

### "Unable to connect to server" error
- Make sure the backend server is running on port 3001
- Check that both frontend and backend servers are running simultaneously

### "Failed to send email" error
- Verify the app password is correct in `.env`
- Make sure 2-Step Verification is enabled on the Gmail account
- Check that the app password doesn't have any spaces

### Gmail not receiving emails
- Check spam/junk folder
- Verify `RECEIVER_EMAIL` in `.env` is correct
- Test the server health endpoint: `http://localhost:3001/api/health`

## 📝 Server API Endpoints

- **POST** `/api/contact` - Submit inquiry form
- **GET** `/api/health` - Check if server is running

## 🔐 Security Notes

⚠️ **IMPORTANT**: The `.env` file contains sensitive information. Make sure:
- It's already in `.gitignore` (don't commit it to GitHub)
- Use App Passwords, not your actual Gmail password
- Keep your app password secure

## 🚀 Production Deployment

When deploying to production:
1. Set environment variables on your hosting platform (Vercel, Netlify, etc.)
2. Update the API URL in `Corporate.jsx` from `http://localhost:3001` to your production server URL
3. Consider using environment variables for the API URL as well

## 📞 Need Help?

If you encounter any issues:
1. Check the browser console for errors (F12)
2. Check the server terminal for error messages
3. Verify all steps above are completed correctly
