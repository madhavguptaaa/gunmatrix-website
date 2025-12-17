import nodemailer from 'nodemailer';

// Vercel Serverless Function for handling contact form submissions
export default async function handler(req, res) {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    // Handle preflight OPTIONS request
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({
            error: 'Method not allowed',
            message: 'Only POST requests are accepted'
        });
    }

    try {
        const { name, email, phone, company, inquiryType, message } = req.body;

        // Validate required fields
        if (!name || !email || !phone || !message) {
            return res.status(400).json({
                error: 'Missing required fields',
                message: 'Please fill in all required fields (name, email, phone, message)'
            });
        }

        // Validate environment variables
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            console.error('Missing email configuration');
            return res.status(500).json({
                error: 'Server configuration error',
                message: 'Email service is not properly configured. Please contact the administrator.'
            });
        }

        // Create transporter for nodemailer
        const transporter = nodemailer.createTransport({
            service: process.env.EMAIL_SERVICE || 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Format inquiry type for display
        const inquiryTypeLabels = {
            'training': 'Corporate Training Program',
            'team-building': 'Team Building Event',
            'wellness': 'Wellness Program',
            'competition': 'Corporate Competition',
            'workshop': 'Educational Workshop',
            'other': 'Other'
        };

        // Email content
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.RECEIVER_EMAIL || process.env.EMAIL_USER,
            subject: `Corporate Inquiry: ${inquiryTypeLabels[inquiryType] || 'General'} - ${name}${company ? ` (${company})` : ''}`,
            html: `
        <h2>New Corporate Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
        <p><strong>Inquiry Type:</strong> ${inquiryTypeLabels[inquiryType] || inquiryType}</p>
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
            message: error.message || 'There was an error submitting your inquiry. Please try again later or contact us directly.',
            details: process.env.NODE_ENV === 'development' ? error.toString() : undefined
        });
    }
}
