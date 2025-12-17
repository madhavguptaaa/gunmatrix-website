# 🚀 Contact Form - Quick Fix Summary

## ✅ Issues Fixed

### 1. **CORS Error** - FIXED ✓
- Added proper CORS headers to serverless function
- Updated Vite proxy configuration
- Changed API endpoint from `http://localhost:3001/api/contact` to `/api/contact`

### 2. **Vercel Deployment** - READY ✓
- Created Vercel serverless function at `api/contact.js`
- Added `vercel.json` configuration
- Moved nodemailer to main dependencies
- Ready to deploy!

## 🔄 What Changed

| File | Change | Reason |
|------|--------|--------|
| `api/contact.js` | ✨ NEW FILE | Vercel serverless function for email |
| `vercel.json` | ✨ NEW FILE | Vercel deployment configuration |
| `vite.config.js` | Added proxy | Routes `/api/*` to backend locally |
| `Corporate.jsx` | Changed endpoint | Uses `/api/contact` instead of full URL |
| `package.json` | Added nodemailer | Needed for Vercel deployment |

## 🧪 Testing Instructions

### Test Locally (RIGHT NOW)

Your servers are currently running!

1. **Open browser**: http://localhost:5173/corporate
2. **Fill the form** with test data
3. **Submit** and watch for success message
4. **Check email** at gunmatrixshootingacademy@gmail.com

### Expected Flow

```
Form Submit → /api/contact (Vite proxies to localhost:3001) → Email sent ✅
```

## 🐛 If Form Still Doesn't Work

### Quick Diagnostic Steps:

**1. Check Backend Server**
```powershell
# Open http://localhost:3001/api/health in browser
# Should show: {"status":"ok","message":"Server is running"}
```

**2. Check Frontend Proxy**
- Make sure you restarted frontend AFTER updating `vite.config.js`
- The proxy only works if Vite server is restarted

**3. Check Browser Console (F12)**
- Look for any error messages
- Should show POST request to `/api/contact`

**4. Check Server Terminal**
- Look for error messages when form is submitted
- Common issue: `EMAIL_PASS` not set correctly

### Manual Restart (If Needed)

**Stop both servers** (Ctrl + C in each terminal)

**Terminal 1 - Backend:**
```powershell
cd "c:\Users\Madhav Gupta\Desktop\gunmatrix-website\server"
npm start
```

**Terminal 2 - Frontend:**
```powershell
cd "c:\Users\Madhav Gupta\Desktop\gunmatrix-website"
npm run dev
```

## 📧 Common Email Issues

### "Failed to authenticate"
❌ **Problem**: Wrong Gmail App Password  
✅ **Solution**: Regenerate app password and update `server/.env`

### "Connection timeout"
❌ **Problem**: Gmail blocking connection  
✅ **Solution**: 
- Enable 2-Step Verification
- Use App Password (not regular password)
- Check if Gmail has sent security alert email

### Email not received
❌ **Problem**: Wrong receiver email  
✅ **Solution**: Check `RECEIVER_EMAIL` in `.env` file

## 🌍 Deploying to Vercel

Once local testing works:

1. **Read the guide**: `VERCEL_DEPLOYMENT.md`
2. **Push to GitHub**
3. **Import to Vercel**
4. **Set environment variables** (same as in `server/.env`)
5. **Deploy!**

## 📞 Support

If you still have issues:
1. Check browser console (F12)
2. Check server terminal output
3. Verify Gmail App Password is correct
4. Make sure both servers are running

---

**Current Status**: ✅ Configured for both local development and Vercel deployment!
