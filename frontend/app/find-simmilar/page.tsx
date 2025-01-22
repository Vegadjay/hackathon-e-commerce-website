'use client'

import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Upload, ImageIcon, Loader } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"

const suggestProducts = async (imageFile: File) => {
	// This is a placeholder function. In a real application, you would send the image to your backend.
	console.log('Suggesting products based on:', imageFile.name)
	try
	{
		const response = await fetch(`${process.env.PYTHON_API_URL}/suggest`).then((res)=>res.json());
		if (response.success){
			console.log(response.data);
		}
	}
	catch(err){
		console.log("Error while finding products!");
	}
	return ['Product 1', 'Product 2', 'Product 3']
}

export default function PhotoUploadSuggest() {
	const [selectedFile, setSelectedFile] = useState<File | null>(null)
	const [preview, setPreview] = useState<string | null>(null)
	const [suggestedProducts, setSuggestedProducts] = useState<string[]>([])
	const [isLoading, setIsLoading] = useState(false)
	const fileInputRef = useRef<HTMLInputElement>(null)

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0]
		if (file) {
			setSelectedFile(file)
			const reader = new FileReader()
			reader.onloadend = () => {
				setPreview(reader.result as string)
			}
			reader.readAsDataURL(file)
		}
	}

	const handleSuggestProducts = async () => {
		if (selectedFile) {
			setIsLoading(true)
			try {
				const products = await suggestProducts(selectedFile)
				setSuggestedProducts(products)
				console.log(products)
			} catch (error) {
				console.error('Error suggesting products:', error)
			} finally {
				setIsLoading(false)
			}
		}
	}

	return (
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="max-w-md mx-auto bg-white rounded-lg shadow-xl overflow-hidden"
			>
				<div className="p-6">
					<h1 className="text-2xl font-bold text-gray-900 mb-4">Upload Photo for Product Suggestions</h1>
					<div className="space-y-4">
						<div>
							<Label htmlFor="photo" className="block text-sm font-medium text-gray-700">
								Choose a photo
							</Label>
							<div className="mt-1 flex items-center">
								<Input
									id="photo"
									name="photo"
									type="file"
									accept="image/*"
									onChange={handleFileChange}
									ref={fileInputRef}
									className="hidden"
								/>
								<Button
									onClick={() => fileInputRef.current?.click()}
									variant="outline"
									className="w-full flex items-center justify-center"
								>
									<Upload className="w-5 h-5 mr-2" />
									Upload Photo
								</Button>
							</div>
						</div>

						<AnimatePresence>
							{preview && (
								<motion.div
									initial={{ opacity: 0, scale: 0.8 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0, scale: 0.8 }}
									transition={{ duration: 0.3 }}
									className="mt-4"
								>
									<Card>
										<CardContent className="p-4">
											<img src={preview || "/placeholder.svg"} alt="Uploaded preview" className="w-full h-48 object-cover rounded-md" />
										</CardContent>
									</Card>
								</motion.div>
							)}
						</AnimatePresence>

						<Button
							onClick={handleSuggestProducts}
							disabled={!selectedFile || isLoading}
							className="w-full"
						>
							{isLoading ? (
								<>
									<Loader className="w-5 h-5 mr-2 animate-spin" />
									Suggesting Products...
								</>
							) : (
								<>
									<ImageIcon className="w-5 h-5 mr-2" />
									Suggest Products
								</>
							)}
						</Button>

						<AnimatePresence>
							{suggestedProducts.length > 0 && (
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -20 }}
									transition={{ duration: 0.3 }}
								>
									<h2 className="text-lg font-semibold text-gray-900 mt-4 mb-2">Suggested Products:</h2>
									<ul className="space-y-2">
										{suggestedProducts.map((product, index) => (
											<motion.li
												key={index}
												initial={{ opacity: 0, x: -20 }}
												animate={{ opacity: 1, x: 0 }}
												transition={{ delay: index * 0.1 }}
												className="bg-gray-100 p-2 rounded-md"
											>
												{product}
											</motion.li>
										))}
									</ul>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				</div>
			</motion.div>
	)
}