import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { siteConfig } from '@/src/configs/config';

export async function POST(req: Request) {
  try {
    const { name, email, phone, message, userInfo } = await req.json();

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD
      }
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: siteConfig.social.email,
      subject: `Portfolio Contact Form: Message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        ${
          userInfo
            ? `
        <h3>Debug Information:</h3>
        <pre>${JSON.stringify(userInfo, null, 2)}</pre>
        `
            : ''
        }
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
