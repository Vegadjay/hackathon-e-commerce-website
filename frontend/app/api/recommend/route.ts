import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
	try {
		const formData = await request.formData();

		const python_url = process.env.NEXT_PUBLIC_PYTHON_URL;
		const backendResponse = await fetch(`${python_url}/recommend`, {
			method: 'POST',
			body: formData,
		});

		if (!backendResponse.ok) {
			const errorText = await backendResponse.text();
			return NextResponse.json(
				{ error: errorText },
				{ status: backendResponse.status }
			);
		}

		const data = await backendResponse.json();

		return NextResponse.json(data, { status: backendResponse.status });
	} catch (error) {
		return NextResponse.json(
			{ error: 'Internal Server Error' },
			{ status: 500 }
		);
	}
}
