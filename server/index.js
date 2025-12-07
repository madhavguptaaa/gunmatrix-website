import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Create transporter for nodemailer
const createTransporter = () => {
  return nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE || 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, company, message } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ 
        error: 'Missing required fields',
        message: 'Please fill in all required fields (name, email, phone, message)'
      });
    }

    // Create transporter
    const transporter = createTransporter();

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL || process.env.EMAIL_USER,
      subject: `Corporate Inquiry from ${name}${company ? ` - ${company}` : ''}`,
      html: `
        <h2>New Corporate Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>This email was sent from the GunMatrix website contact form.</small></p>
      `,
      replyTo: email,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ 
      success: true,
      message: 'Your inquiry has been submitted successfully. We will get back to you soon.' 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      error: 'Failed to send email',
      message: 'There was an error submitting your inquiry. Please try again later or contact us directly.'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

