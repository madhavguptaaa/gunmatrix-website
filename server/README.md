# GunMatrix Server

Backend server for handling contact form submissions via Nodemailer.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

3. Configure your email settings in `.env`:
   - For Gmail, you'll need to use an App Password (not your regular password)
   - Go to Google Account > Security > 2-Step Verification > App passwords
   - Generate an app password and use it as `EMAIL_PASS`

4. Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

## API Endpoints

- `POST /api/contact` - Submit contact form
- `GET /api/health` - Health check

## Environment Variables

- `EMAIL_SERVICE` - Email service provider (default: gmail)
- `EMAIL_USER` - Your email address
- `EMAIL_PASS` - Your email password or app password
- `RECEIVER_EMAIL` - Email address to receive inquiries (defaults to EMAIL_USER)
- `PORT` - Server port (default: 3001)

