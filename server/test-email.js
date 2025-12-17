import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

console.log('🔍 Testing Email Configuration...\n');

// Show what's loaded (hide password)
console.log('📧 Configuration loaded:');
console.log(`   EMAIL_SERVICE: ${process.env.EMAIL_SERVICE || 'NOT SET'}`);
console.log(`   EMAIL_USER: ${process.env.EMAIL_USER || 'NOT SET'}`);
console.log(`   EMAIL_PASS: ${process.env.EMAIL_PASS ? '****' + process.env.EMAIL_PASS.slice(-4) : 'NOT SET'}`);
console.log(`   RECEIVER_EMAIL: ${process.env.RECEIVER_EMAIL || 'NOT SET'}`);
console.log(`   Password length: ${process.env.EMAIL_PASS?.length || 0} characters\n`);

async function testEmailConnection() {
    try {
        console.log('🔌 Creating transporter...');

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        console.log('✅ Transporter created');
        console.log('🔐 Verifying credentials...\n');

        // Verify connection
        await transporter.verify();

        console.log('✅ ✅ ✅ SUCCESS! Email credentials are valid!\n');
        console.log('📧 Sending test email...');

        // Send test email
        const info = await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.RECEIVER_EMAIL || process.env.EMAIL_USER,
            subject: '✅ Test Email from GunMatrix Website',
            html: `
        <h2>🎉 Email Configuration Successful!</h2>
        <p>This is a test email from your GunMatrix website.</p>
        <p>If you received this email, your nodemailer configuration is working correctly!</p>
        <hr>
        <p><small>Sent at: ${new Date().toLocaleString()}</small></p>
      `,
        });

        console.log('✅ ✅ ✅ Test email sent successfully!');
        console.log(`📬 Message ID: ${info.messageId}`);
        console.log(`📨 Check your inbox at: ${process.env.RECEIVER_EMAIL || process.env.EMAIL_USER}\n`);

    } catch (error) {
        console.error('❌ ❌ ❌ ERROR!\n');

        if (error.code === 'EAUTH') {
            console.error('🔐 AUTHENTICATION FAILED\n');
            console.error('This means your Gmail credentials are incorrect.\n');
            console.error('Common issues:');
            console.error('  1. ❌ Using regular Gmail password (won\'t work!)');
            console.error('  2. ❌ 2-Step Verification not enabled');
            console.error('  3. ❌ App Password not generated');
            console.error('  4. ❌ Wrong App Password copied');
            console.error('  5. ❌ Spaces in password (should be removed)');
            console.error('  6. ❌ Using wrong Gmail account\n');

            console.error('📋 SOLUTION:');
            console.error('  1. Go to: https://myaccount.google.com/security');
            console.error('  2. Enable "2-Step Verification" if not enabled');
            console.error('  3. Go to: https://myaccount.google.com/apppasswords');
            console.error('  4. Create new App Password for "Mail"');
            console.error('  5. Copy the 16-character password (remove spaces)');
            console.error('  6. Update EMAIL_PASS in server/.env file');
            console.error('  7. Make sure EMAIL_USER matches the Google account\n');

        } else if (error.code === 'ESOCKET') {
            console.error('🌐 CONNECTION ERROR\n');
            console.error('Cannot connect to Gmail servers. Check your internet connection.\n');
        } else {
            console.error('Error details:', error.message);
        }

        console.error('\nFull error:', error);
        process.exit(1);
    }
}

testEmailConnection();
