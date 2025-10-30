import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const MOCK_EMAIL = process.env.MOCK_EMAIL === 'true';

let transporter;

if (MOCK_EMAIL) {
  // Use ethereal email for testing (fake SMTP)
  console.log('🧪 Using MOCK email mode for testing');
  transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
        user: 'ethereal.user@ethereal.email',
        pass: 'any-password'
    }
  });
} else {
  // Use real Gmail configuration
  transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Verify email configuration on startup (only for real email)
  transporter.verify(function(error) {
    if (error) {
      console.log('❌ Email configuration error:', error.message);
      console.log('Please check your EMAIL_USER and EMAIL_PASS in .env file');
      console.log('For Gmail, you need to use an App Password instead of your regular password');
      console.log('💡 You can set MOCK_EMAIL=true in .env to test without real email');
    } else {
      console.log('✅ Email server is ready to take messages');
    }
  });
}

// Middleware
app.use(cors());
app.use(express.json());

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, title, message } = req.body;

    // Validate input
    if (!name || !email || !title || !message) {
      return res.status(400).json({
        success: false,
        error: 'Name, email, title, and message are required'
      });
    }

    // Prepare admin notification email (email to you)
    const adminEmailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); overflow: hidden;">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #14b8a6 0%, #0d9488 100%); padding: 30px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 600;">📬 New Contact Message</h1>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0 0 25px 0;">
                You have received a new message from your portfolio contact form:
              </p>

              <!-- Contact Info Card -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f9fafb; border-radius: 8px; border-left: 4px solid #14b8a6; margin-bottom: 25px;">
                <tr>
                  <td style="padding: 20px;">
                    <p style="margin: 0 0 12px 0;">
                      <strong style="color: #1f2937; font-size: 14px;">👤 Name:</strong><br/>
                      <span style="color: #374151; font-size: 16px;">${name}</span>
                    </p>
                    <p style="margin: 0 0 12px 0;">
                      <strong style="color: #1f2937; font-size: 14px;">📧 Email:</strong><br/>
                      <a href="mailto:${email}" style="color: #14b8a6; font-size: 16px; text-decoration: none;">${email}</a>
                    </p>
                    <p style="margin: 0;">
                      <strong style="color: #1f2937; font-size: 14px;">📝 Title:</strong><br/>
                      <span style="color: #374151; font-size: 16px;">${title}</span>
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Message Card -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f9fafb; border-radius: 8px; padding: 20px;">
                <tr>
                  <td>
                    <p style="margin: 0 0 8px 0;">
                      <strong style="color: #1f2937; font-size: 14px;">💬 Message:</strong>
                    </p>
                    <p style="color: #374151; font-size: 15px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message}</p>
                  </td>
                </tr>
              </table>

              <!-- Reply Button -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 30px;">
                <tr>
                  <td align="center">
                    <a href="mailto:${email}?subject=Re: Your message from Portfolio"
                       style="display: inline-block; background-color: #14b8a6; color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 6px; font-weight: 600; font-size: 15px;">
                      Reply to ${name}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 20px 30px; border-top: 1px solid #e5e7eb; text-align: center;">
              <p style="color: #6b7280; font-size: 13px; margin: 0;">
                Sent from your Portfolio Contact Form<br/>
                ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Bangkok' })} (Thailand Time)
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `;

    // Prepare auto-reply email (email to sender)
    const autoReplyHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Your Message</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); overflow: hidden;">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #14b8a6 0%, #0d9488 100%); padding: 30px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 26px; font-weight: 600;">✅ Message Received!</h1>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <h2 style="color: #1f2937; font-size: 22px; margin: 0 0 20px 0;">สวัสดีครับคุณ ${name} 👋</h2>

              <p style="color: #374151; font-size: 16px; line-height: 1.7; margin: 0 0 20px 0;">
                ขอบคุณที่ติดต่อเรา! เราได้รับข้อความของคุณเรียบร้อยแล้ว และจะตอบกลับโดยเร็วที่สุด
              </p>

              <p style="color: #374151; font-size: 16px; line-height: 1.7; margin: 0 0 25px 0;">
                <em>Thank you for contacting me! I've received your message and will get back to you as soon as possible.</em>
              </p>

              <!-- Message Summary Card -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f0fdfa; border-radius: 8px; border-left: 4px solid #14b8a6; margin-bottom: 25px;">
                <tr>
                  <td style="padding: 20px;">
                    <p style="margin: 0 0 8px 0;">
                      <strong style="color: #1f2937; font-size: 14px;">📝 Your message:</strong>
                    </p>
                    <p style="color: #374151; font-size: 15px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message}</p>
                  </td>
                </tr>
              </table>

              <!-- Info Box -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #eff6ff; border-radius: 8px; margin-bottom: 25px;">
                <tr>
                  <td style="padding: 18px;">
                    <p style="color: #1e40af; font-size: 14px; line-height: 1.6; margin: 0;">
                      💡 <strong>Tip:</strong> Please keep this email for your reference. If you don't hear back within 48 hours, feel free to send another message.
                    </p>
                  </td>
                </tr>
              </table>

              <p style="color: #374151; font-size: 16px; line-height: 1.7; margin: 0 0 10px 0;">
                ขอบคุณครับ,<br/>
                <strong style="color: #14b8a6;">Aphisit Yinsamran</strong>
              </p>

              <p style="color: #6b7280; font-size: 14px; margin: 10px 0 0 0;">
                Portfolio Developer
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 20px 30px; border-top: 1px solid #e5e7eb; text-align: center;">
              <p style="color: #6b7280; font-size: 13px; margin: 0 0 10px 0;">
                This is an automated response. Please do not reply to this email.
              </p>
              <p style="color: #9ca3af; font-size: 12px; margin: 0;">
                Sent: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Bangkok' })} (Thailand Time)
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `;

    if (MOCK_EMAIL) {
      // Mock email sending - just log the email content
      console.log('📧 MOCK EMAIL SENT TO ADMIN:');
      console.log('From:', process.env.EMAIL_USER);
      console.log('To:', 'aphisityns170960@gmail.com');
      console.log('Subject:', `${title} - Message from ${name}`);
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Title:', title);
      console.log('Message:', message);
      console.log('-------------------');
      console.log('📧 MOCK AUTO-REPLY SENT TO USER:');
      console.log('From:', process.env.EMAIL_USER);
      console.log('To:', email);
      console.log('Subject:', 'เราได้รับข้อความของคุณแล้ว - Thank you for contacting us');
      console.log('-------------------');
    } else {
      // Send admin notification email
      await transporter.sendMail({
        from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
        to: 'aphisityns170960@gmail.com',
        replyTo: email,
        subject: `📬 ${title} - Message from ${name}`,
        html: adminEmailHtml,
        text: `New Contact Form Submission\n\nName: ${name}\nEmail: ${email}\nTitle: ${title}\nMessage: ${message}`,
      });

      // Send auto-reply to sender
      await transporter.sendMail({
        from: `"Aphisit - Portfolio" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: '✅ เราได้รับข้อความของคุณแล้ว - Thank you for contacting us',
        html: autoReplyHtml,
        text: `สวัสดีครับคุณ ${name},\n\nขอบคุณที่ติดต่อเรา! เราได้รับข้อความของคุณเรียบร้อยแล้ว และจะตอบกลับโดยเร็วที่สุด\n\nThank you for contacting me! I've received your message and will get back to you as soon as possible.\n\nYour message:\n${message}\n\nขอบคุณครับ,\nAphisit`,
      });
    }

    const emailSent = true;

    if (emailSent) {
      res.status(200).json({
        success: true,
        message: 'Email sent successfully'
      });
    } else {
      res.status(500).json({
        success: false,
        error: 'Failed to send email'
      });
    }
  } catch (error) {
    console.error('Error in contact endpoint:', error);

    let errorMessage = 'Internal server error';
    if (error.code === 'EAUTH') {
      errorMessage = 'Email authentication failed. Please check email configuration.';
    } else if (error.code === 'ECONNECTION') {
      errorMessage = 'Failed to connect to email server.';
    } else if (error.message) {
      errorMessage = error.message;
    }

    res.status(500).json({
      success: false,
      error: errorMessage
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
