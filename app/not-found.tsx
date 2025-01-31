'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Search, ArrowRight, Sparkles } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function NotFound() {
	const router = useRouter()
	const suggestedProducts = [
		{ id: 1, name: 'Elegant Evening Gown', image: '/detailphotos/1.1.webp' },
		{ id: 2, name: 'Classic Leather Jacket', image: '/detailphotos/11.3.webp' },
		{ id: 3, name: 'Trendy Sneakers', image: '/detailphotos/13.4.webp' },
	]

	return (
		<div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
			<motion.div
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="text-center"
			>
				<h1 className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-red-500">
					404
				</h1>
				<p className="text-2xl md:text-3xl font-light text-gray-600 mb-8">
					Oops! This page is as elusive as the perfect outfit.
				</p>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.2 }}
				className="w-full max-w-md mb-8"
			>
			</motion.div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.4 }}
				className="text-center mb-8"
			>
				<h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center justify-center">
					<Sparkles className="w-5 h-5 mr-2 text-yellow-500" />
					Trending Styles
				</h2>
				<div className="flex flex-wrap justify-center gap-4">
					{suggestedProducts.map((product) => (
						<Link href="/">
							<motion.div
								key={product.id}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="bg-white p-4 rounded-lg shadow-md"
							>
								<Image
									src={product.image || "/photoes.1.1.webp"}
									alt={product.name}
									width={200}
									height={200}
									className="rounded-md mb-2"
								/>
								<p className="text-sm font-medium text-gray-800">{product.name}</p>
							</motion.div>
						</Link>
					))}
				</div>
			</motion.div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.6 }}
			>
				<Button
					onClick={() => router.push('/')}
					className="group bg-gradient-to-r from-purple-500 to-red-500 hover:from-purple-600 hover:to-red-600 text-white"
				>
					Return to Homepage
					<ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
				</Button>
			</motion.div>
		</div>
	)
}