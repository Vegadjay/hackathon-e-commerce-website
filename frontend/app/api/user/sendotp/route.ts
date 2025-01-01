import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';

export async function POST(req: Request) {
	try {
		const { email } = await req.json();

		if (!email) {
			return NextResponse.json({ error: 'Email is required' }, { status: 400 });
		}

		await dbConnect();

		const user = await User.findOne({ email });
		if (!user) {
			return NextResponse.json(
				{ error: 'Email not found in the database!' },
				{ status: 404 }
			);
		}

		const otp = Math.floor(100000 + Math.random() * 900000).toString();

		if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
			console.error('Missing EMAIL_USER or EMAIL_PASS environment variables');
			return NextResponse.json(
				{ error: 'Email server configuration error' },
				{ status: 500 }
			);
		}

		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASS,
			},
		});

		const mailOptions = {
			from: process.env.EMAIL_USER,
			to: email,
			subject: '[E-Commerce] Your One-Time Password (OTP) Code',
			html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; padding: 20px; background-color: #f9f9f9; border: 1px solid #ddd; border-radius: 10px; max-width: 600px; margin: auto;">
          <h2 style="color: #0056b3; text-align: center;">Your One-Time Password (OTP)</h2>
          <p>Dear ${user.firstname},</p>
          <p>Please use the following One-Time Password (OTP) to complete your action. For your security, do not share this code with anyone.</p>
          <div style="text-align: center; margin: 20px 0;">
            <span style="font-size: 24px; font-weight: bold; color: #000; background: #e7f3ff; padding: 10px 20px; border-radius: 5px; border: 1px solid #0056b3;">${otp}</span>
          </div>
          <p>If you did not request this, please ignore this email or contact support if you suspect any issues.</p>
          <p style="margin-top: 30px;">Best Regards,</p>
          <p style="color: #0056b3;">E-Commerce Team</p>
        </div>
      `,
		};

		await transporter.sendMail(mailOptions);

		user.otp = otp;
		user.otpExpiry = new Date(Date.now() + 5 * 60 * 1000); //5 min expiry
		await user.save();

		return NextResponse.json(
			{ success: true, message: 'OTP sent successfully' },
			{ status: 200 }
		);
	} catch (error) {
		console.error('Error handling OTP request:', error);
		return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
	}
}
