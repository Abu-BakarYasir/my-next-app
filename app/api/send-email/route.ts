import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';


export async function POST(req: Request) {
    console.log("🔍 ENV:", {
  EMAIL_USER: process.env.EMAIL_USER,
  EMAIL_PASS: process.env.EMAIL_PASS ? '✔️ loaded' : '❌ missing',
  EMAIL_TO: process.env.EMAIL_TO,
});
  const { suggestion } = await req.json();

  if (!suggestion || suggestion.trim() === '') {
    return NextResponse.json({ error: 'Empty suggestion' }, { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Suggestion Bot" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: 'New Suggestion from Contact Modal',
      text: suggestion,
    });

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('❌ Email sending error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
