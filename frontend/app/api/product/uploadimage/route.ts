import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';

export async function POST(req: Request) {
	try {
		const formData = await req.formData();
		const files = formData.getAll('files') as File[];
		console.log("files", files);

		if (!files || files.length === 0) {
			return NextResponse.json({ success: false, message: "No files uploaded" }, { status: 400 });
		}

		const uploadDir = path.join(process.cwd(), 'public', 'detailphotos');

		await fs.mkdir(uploadDir, { recursive: true });

		const uploadedFiles = await Promise.all(
			files.map(async (file) => {
				const fileExtension = file.name.split('.').pop();
				const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 15)}.${fileExtension}`;
				const filePath = path.join(uploadDir, fileName);
				const buffer = Buffer.from(await file.arrayBuffer());

				await fs.writeFile(filePath, buffer);
				return `/detailphotos/${fileName}`;
			})
		);

		return NextResponse.json({
			success: true,
			message: "Files uploaded successfully",
			filePaths: uploadedFiles,
		});
	} catch (error) {
		console.error("Error uploading files:", error);
		return NextResponse.json({ success: false, message: "File upload failed" }, { status: 500 });
	}
}
