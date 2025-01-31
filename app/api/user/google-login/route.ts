// Backend code: /api/user/google-login.ts

import { NextResponse } from 'next/server';
import { OAuth2Client } from 'google-auth-library';

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export async function POST(req: Request) {
	try {
		const body = await req.json();
		const { tokenId } = body;

		// Verify the tokenId with Google
		const ticket = await client.verifyIdToken({
			idToken: tokenId,
			audience: process.env.GOOGLE_CLIENT_ID,
		});

		const payload = ticket.getPayload();
		const email = payload?.email;

		if (email) {
			return NextResponse.json({ email });
		} else {
			return NextResponse.json({ error: 'Failed to retrieve email' }, { status: 400 });
		}
	} catch (error) {
		console.error(error);
		return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
	}
}
