'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, X, File, CheckCircle, AlertCircle } from 'lucide-react';

const FileUploadInProductAdd = ({products, setProductData }: {products:any, setProductData: any }) => {
	const [files, setFiles] = useState<File[]>([]);
	const [uploading, setUploading] = useState(false);
	const [message, setMessage] = useState('');
	const [messageType, setMessageType] = useState<'success' | 'error' | ''>('');
	const fileInputRef = useRef<HTMLInputElement>(null);

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files) {
			const fileArray = Array.from(event.target.files);
			setFiles(prevFiles => [...prevFiles, ...fileArray]);
			setMessage('');
			setMessageType('');
		}
	};

	const removeFile = (fileToRemove: File) => {
		setFiles(files.filter(file => file !== fileToRemove));
	};

	const handleUpload = async () => {
		if (files.length === 0) {
			setMessage('Please select files to upload.');
			setMessageType('error');
			return;
		}

		const formData = new FormData();
		files.forEach((file) => formData.append('files', file));

		setUploading(true);
		setMessage('');
		setMessageType('');

		try {
			const response = await fetch('/api/product/uploadimage', {
				method: 'POST',
				body: formData,
			});

			const result = await response.json();

			setProductData((prevData: any) => ({ ...prevData, images: result.filePaths }));
			setMessage(result.message);
			setMessageType('success');
			setFiles([]); // Clear files after successful upload
		} catch (error) {
			setMessage('An error occurred while uploading.');
			setMessageType('error');
		} finally {
			setUploading(false);
		}
	};

	return (
		<div className="flex flex-col items-center p-5 w-full max-w-md mx-auto">
			<motion.div
				className="w-full h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-blue-500 transition-colors"
				whileHover={{ scale: 1.02 }}
				whileTap={{ scale: 0.98 }}
				onClick={() => fileInputRef.current?.click()}
			>
				<input
					ref={fileInputRef}
					type="file"
					multiple
					onChange={handleFileChange}
					className="hidden"
				/>
				<Upload className="text-gray-400 mr-2" />
				<span className="text-gray-500">Click or drag files to upload</span>
			</motion.div>

			<AnimatePresence>
				{files.map((file, index) => (
					<motion.div
						key={`${file.name}-${index}`}
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						className="flex items-center justify-between w-full bg-gray-100 p-2 rounded mt-2"
					>
						<div className="flex items-center">
							<File className="text-blue-500 mr-2" />
							<span className="text-sm truncate max-w-[200px]">{file.name}</span>
						</div>
						<button
							onClick={() => removeFile(file)}
							className="text-red-500 hover:text-red-700"
						>
							<X size={18} />
						</button>
					</motion.div>
				))}
			</AnimatePresence>

			<motion.button
				onClick={handleUpload}
				disabled={uploading || files.length === 0}
				className={`mt-4 px-6 py-2 rounded-full text-white font-semibold ${uploading || files.length === 0 ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'
					}`}
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
			>
				{uploading ? 'Uploading...' : 'Upload Files'}
			</motion.button>

			<AnimatePresence>
				{message && (
					<motion.div
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						className={`mt-4 p-3 rounded-lg flex items-center ${messageType === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
							}`}
					>
						{messageType === 'success' ? (
							<CheckCircle className="mr-2" size={18} />
						) : (
							<AlertCircle className="mr-2" size={18} />
						)}
						<span>{message}</span>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default FileUploadInProductAdd;