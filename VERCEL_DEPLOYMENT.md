# Vercel Deployment Guide - GunMatrix Website

Your website is now configured to deploy to **Vercel** with working email functionality!

## 🎯 What's Been Changed

✅ **Converted Express backend to Vercel Serverless Function** (`/api/contact.js`)  
✅ **Added Vite proxy** for local development  
✅ **Updated API endpoint** to work both locally and on Vercel  
✅ **Created `vercel.json`** configuration  
✅ **Added nodemailer** to main dependencies  

## 📁 New Project Structure

```
gunmatrix-website/
├── api/
│   └── contact.js          # ✨ NEW: Vercel serverless function
├── server/                 # Keep for local testing (optional)
│   ├── index.js            # Original Express server
│   ├── .env                # Local env file (NOT deployed)
│   └── package.json
├── src/
│   └── pages/
│       └── Corporate.jsx   # Updated to use /api/contact
├── vercel.json             # ✨ NEW: Vercel configuration
├── vite.config.js          # Updated with proxy
└── package.json            # Updated with nodemailer
```

## 🚀 Deploying to Vercel

### Step 1: Push to GitHub

```powershell
# In project root
git add .
git commit -m "Add Vercel serverless function for contact form"
git push origin main
```

### Step 2: Import Project to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New Project"**
3. Import your GitHub repository: `gunmatrix-website`
4. Vercel will auto-detect it's a **Vite project** ✅

### Step 3: Configure Environment Variables

Before deploying, add these environment variables in Vercel:

1. In Vercel project settings, go to **"Settings" → "Environment Variables"**
2. Add the following variables:

| Variable Name | Value | Description |
|--------------|-------|-------------|
| `EMAIL_SERVICE` | `gmail` | Email service provider |
| `EMAIL_USER` | `gunmatrixshootingacademy@gmail.com` | Sender email |
| `EMAIL_PASS` | `your-app-password` | Gmail App Password |
| `RECEIVER_EMAIL` | `gunmatrixshootingacademy@gmail.com` | Receiver email |

⚠️ **IMPORTANT**: Use the same Gmail App Password you created earlier!

### Step 4: Deploy

1. Click **"Deploy"**
2. Wait for the build to complete (~2-3 minutes)
3. Your site will be live at: `https://gunmatrix-website.vercel.app`

## 🌐 How It Works

### Local Development (localhost)
```
Frontend (localhost:5173) → Vite Proxy → Backend (localhost:3001) → Email
```
- Vite proxies `/api/*` requests to `http://localhost:3001`
- Uses Express server in `server/` folder

### Production (Vercel)
```
Frontend (Vercel) → /api/contact → Serverless Function → Email
```
- Vercel automatically routes `/api/*` to serverless functions in `api/` folder
- No separate backend server needed!

## ✅ Testing Locally

### Start Both Servers

**Terminal 1 - Backend (Express):**
```powershell
cd "c:\Users\Madhav Gupta\Desktop\gunmatrix-website\server"
npm start
```

**Terminal 2 - Frontend (Vite):**
```powershell
cd "c:\Users\Madhav Gupta\Desktop\gunmatrix-website"
npm run dev
```

### Test the Form
1. Open http://localhost:5173/corporate
2. Fill out and submit the form
3. The request will go to `/api/contact` → proxied to `http://localhost:3001/api/contact`
4. Email should be sent!

## 🔍 Troubleshooting

### Local Development Issues

**"Failed to load resource: net::ERR_CONNECTION_REFUSED"**
- Make sure backend server is running on port 3001
- Restart frontend server to activate proxy

**"500 Internal Server Error"**
- Check server terminal for error messages
- Verify `.env` file has correct Gmail App Password
- Make sure 2-Step Verification is enabled on Gmail

### Vercel Deployment Issues

**Form not submitting on Vercel**
- Verify environment variables are set in Vercel dashboard
- Check Vercel function logs: Dashboard → Functions → Logs
- Make sure `EMAIL_PASS` is the App Password, not regular password

**CORS errors on Vercel**
- Already handled in `api/contact.js` with proper headers
- If persists, check browser console for specific error

## 🔐 Security Notes

### Environment Variables

**Local (.env files):**
- ✅ Already in `.gitignore`
- ❌ NEVER commit to Git

**Vercel (Dashboard):**
- ✅ Stored securely on Vercel servers
- ✅ Not visible in public code
- ✅ Can be different for preview/production

## 📊 Vercel Features You Get

✅ **Automatic Deployments** - Push to Git → Auto deploy  
✅ **Preview URLs** - Every PR gets its own URL  
✅ **SSL Certificate** - HTTPS automatically enabled  
✅ **CDN** - Fast global delivery  
✅ **Analytics** - Built-in performance monitoring  
✅ **Serverless Functions** - No server management needed  

## 🎨 Custom Domain (Optional)

After deployment, you can add a custom domain:

1. Go to **Settings → Domains**
2. Add your domain (e.g., `gunmatrix.com`)
3. Update DNS records as instructed
4. Vercel handles SSL automatically!

## 📧 Email Sending Limits

**Gmail Free Account:**
- **500 emails/day** (24-hour rolling period)
- **100 emails per batch**

If you need more, consider:
- **Google Workspace** (2,000 emails/day)
- **SendGrid** (100 emails/day free)
- **Mailgun** (1,000 emails/month free)

## 🚀 Next Steps

1. ✅ Test locally - make sure form works
2. ✅ Push to GitHub
3. ✅ Import to Vercel
4. ✅ Add environment variables
5. ✅ Deploy!
6. ✅ Test on live Vercel URL

## 💡 Pro Tips

- **Use different emails for dev/production**: Set different `RECEIVER_EMAIL` for preview deployments
- **Monitor function logs**: Vercel Dashboard → Functions → Logs
- **Test before pushing**: Always test locally first
- **Environment per branch**: Set different variables for main/preview branches

---

## 🆘 Need Help?

- **Vercel Docs**: https://vercel.com/docs
- **Vercel Functions**: https://vercel.com/docs/functions/serverless-functions
- **Contact Support**: https://vercel.com/support

Your website is ready to deploy! 🎉
