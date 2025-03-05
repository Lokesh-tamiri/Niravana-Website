import { NextResponse } from 'next/server';
import handlebars from 'handlebars';
import nodemailer from 'nodemailer';
import SomeEmailTemplate from "../../../../email/email-template.html";

export async function POST(req) {
  const { fullName, email, phone, projectDetails, emailTemplate } = await req.json();
  try {
    const template = handlebars.compile(emailTemplate || SomeEmailTemplate);
    const replacements = { fullName, email, phone, projectDetails };
    const htmlToSend = template(replacements);

    const transporter = nodemailer.createTransport({
      host: process.env.HOST || 'smtp.gmail.com',
      port: 587,
      secure: false,
      requireTLS: true, 
      auth: {
        user: "lokeshsai.tamiri@gmail.com", 
        pass: "viaw kyxe ovwl yjqe", 
      },
      logger: true,
      debug: true,
    });

    const mailOptions = {
      from: process.env.MAIL_USER || process.env.USER,
      to: process.env.TO_EMAIL,
      subject: process.env.SUBJECT,
      html: htmlToSend,
      replyTo: email,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    return NextResponse.json({ status: 200, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error processing the request:', error);
    return NextResponse.json({ status: 500, message: 'Error sending email' });
  }
}