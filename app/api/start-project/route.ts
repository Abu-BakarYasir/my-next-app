import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { name, email, company, project_type, budget, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailContent = `
New Project Inquiry:

👤 Name: ${name}
📧 Email: ${email}
🏢 Company: ${company || 'Not provided'}
💡 Project Type: ${project_type || 'Not specified'}
💰 Budget: ${budget || 'Not specified'}

📝 Message:
${message}
`;

    await transporter.sendMail({
      from: `"Start Project Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: 'New Project Inquiry from Website',
      text: mailContent,
    });

    return NextResponse.json({ message: 'Project inquiry sent successfully' });
  } catch (error) {
    console.error('❌ Email error:', error);
    return NextResponse.json({ error: 'Failed to send project inquiry' }, { status: 500 });
  }
}
