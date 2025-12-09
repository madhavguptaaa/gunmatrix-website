# Environment Setup for Nodemailer

## Server Setup

1. Navigate to the server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the `server` directory with the following:

```
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
RECEIVER_EMAIL=ananyasapraal2@gmail.com
PORT=3001
```

## Gmail App Password Setup

1. Go to your Google Account settings
2. Navigate to Security > 2-Step Verification
3. Scroll down to "App passwords"
4. Generate a new app password for "Mail"
5. Use this app password as `EMAIL_PASS` in your `.env` file

## Running the Server

Start the backend server:
```bash
cd server
npm start
```

The server will run on `http://localhost:3001`

## Running the Frontend

In a separate terminal, start the frontend:
```bash
npm run dev
```

The frontend will proxy API requests to the backend server automatically.

