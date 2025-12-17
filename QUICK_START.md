# Quick Start - Running the GunMatrix Website with Email Functionality

## ⚡ Quick Setup (First Time Only)

### 1. Configure Email Settings

Edit `server/.env` and add your Gmail App Password:

```env
EMAIL_PASS=your-16-character-app-password
```

**How to get Gmail App Password:**
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable 2-Step Verification (if not already enabled)
3. Go to [App Passwords](https://myaccount.google.com/apppasswords)
4. Create a new app password for "Mail" → "Other (GunMatrix Website)"
5. Copy the 16-character password and paste it in `.env`

For detailed instructions, see [NODEMAILER_SETUP.md](NODEMAILER_SETUP.md)

## 🚀 Running the Application

You need to run **TWO** terminals simultaneously:

### Terminal 1: Backend Server (Port 3001)

```powershell
cd "c:\Users\Madhav Gupta\Desktop\gunmatrix-website\server"
npm start
```

### Terminal 2: Frontend (Port 5173)

```powershell
cd "c:\Users\Madhav Gupta\Desktop\gunmatrix-website"
npm run dev
```

## ✅ Verify Everything Works

1. **Check Backend**: Open http://localhost:3001/api/health
   - Should show: `{"status":"ok","message":"Server is running"}`

2. **Check Frontend**: Open http://localhost:5173/corporate
   - Fill out the inquiry form
   - Submit and confirm email is received

## 📧 What Happens When Form is Submitted?

1. User fills out the Corporate Inquiries form
2. Form sends data to backend API (`http://localhost:3001/api/contact`)
3. Backend uses Nodemailer to send email to `gunmatrixshootingacademy@gmail.com`
4. User sees success message
5. You receive the inquiry in your inbox!

## 🛑 Stopping the Servers

Press `Ctrl + C` in each terminal to stop the respective server.

## 🔧 Troubleshooting

**"Unable to connect to server"**
→ Make sure backend server is running on port 3001

**"Failed to send email"**
→ Check the `.env` file has correct app password

**Form not submitting**
→ Open browser console (F12) to see error messages

## 📚 More Information

- Full setup guide: [NODEMAILER_SETUP.md](NODEMAILER_SETUP.md)
- Server documentation: [server/README.md](server/README.md)
