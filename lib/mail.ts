import nodemailer from 'nodemailer';

export async function sendEmail({ name, email, subject, message, phone }: {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone?: string;
}) {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail', // you can also use 'smtp-mail.outlook.com' or custom SMTP
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `📩 New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2>New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
          <hr />
          <small>Sent from your portfolio contact form</small>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully!');
  } catch (error) {
    console.error('❌ Error sending email:', error);
    throw new Error('Email failed to send');
  }
}
