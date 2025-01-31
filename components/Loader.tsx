import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
	// Animation variants for the shopping bag
	const bagVariants = {
		initial: { y: 0 },
		animate: {
			y: [-10, 0],
			transition: {
				duration: 1.2,
				repeat: Infinity,
				repeatType: "reverse",
				ease: "easeInOut"
			}
		}
	};

	// Enhanced sparkle variants with rotation
	const sparkleVariants = {
		initial: { scale: 0, opacity: 0, rotate: 0 },
		animate: {
			scale: [0, 1, 0],
			opacity: [0, 1, 0],
			rotate: [0, 180],
			transition: {
				duration: 1.5,
				repeat: Infinity,
				repeatType: "loop",
				ease: "easeOut"
			}
		}
	};

	// New ribbon animation variants
	const ribbonVariants = {
		initial: { scaleX: 0 },
		animate: {
			scaleX: 1,
			transition: {
				duration: 0.8,
				ease: "easeOut"
			}
		}
	};

	return (
		<div className="flex items-center justify-center h-screen w-screen bg-gradient-to-b from-white to-red-100">
			<div className="relative">
				{/* Decorative circles in background */}
				<div className="absolute inset-0 -m-8">
					<motion.div
						className="absolute top-0 left-0 w-16 h-16 border-2 border-red-200 rounded-full"
						animate={{
							scale: [1, 1.2, 1],
							opacity: [0.3, 0.6, 0.3],
						}}
						transition={{
							duration: 2,
							repeat: Infinity,
							ease: "easeInOut"
						}}
					/>
					<motion.div
						className="absolute bottom-0 right-0 w-20 h-20 border-2 border-red-200 rounded-full"
						animate={{
							scale: [1.2, 1, 1.2],
							opacity: [0.4, 0.7, 0.4],
						}}
						transition={{
							duration: 2.5,
							repeat: Infinity,
							ease: "easeInOut"
						}}
					/>
				</div>

				{/* Shopping Bag */}
				<motion.div
					initial="initial"
					animate="animate"
					variants={bagVariants}
					className="relative"
				>
					{/* Bag Handles with shine effect */}
					<div className="flex justify-center space-x-8">
						<div className="relative w-8 h-8 border-t-4 border-l-4 border-r-4 rounded-t-full border-red-400 overflow-hidden">
							<motion.div
								className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50"
								animate={{
									x: [-40, 40]
								}}
								transition={{
									duration: 1.5,
									repeat: Infinity,
									ease: "easeInOut"
								}}
							/>
						</div>
						<div className="relative w-8 h-8 border-t-4 border-l-4 border-r-4 rounded-t-full border-red-400 overflow-hidden">
							<motion.div
								className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50"
								animate={{
									x: [-40, 40]
								}}
								transition={{
									duration: 1.5,
									repeat: Infinity,
									ease: "easeInOut",
									delay: 0.2
								}}
							/>
						</div>
					</div>

					{/* Bag Body with enhanced design */}
					<div className="w-40 h-32 bg-red-400 rounded-lg relative overflow-hidden">
						{/* Decorative lines */}
						<div className="absolute inset-0 flex flex-col justify-around py-4 opacity-20">
							{[...Array(3)].map((_, i) => (
								<motion.div
									key={i}
									initial="initial"
									animate="animate"
									variants={ribbonVariants}
									className="h-px bg-white"
									style={{ animationDelay: `${i * 0.2}s` }}
								/>
							))}
						</div>

						{/* Brand Text with glow */}
						<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
							<motion.div
								animate={{
									textShadow: ["0 0 8px rgba(255,255,255,0.4)", "0 0 16px rgba(255,255,255,0.6)", "0 0 8px rgba(255,255,255,0.4)"]
								}}
								transition={{
									duration: 2,
									repeat: Infinity,
									ease: "easeInOut"
								}}
								className="text-white font-serif text-xl tracking-wider"
							>
								POSHAK
							</motion.div>
						</div>
					</div>
				</motion.div>

				{/* Enhanced Sparkles */}
				<div className="absolute top-0 left-0 w-full h-full pointer-events-none">
					{[...Array(7)].map((_, i) => (
						<motion.div
							key={i}
							variants={sparkleVariants}
							initial="initial"
							animate="animate"
							className="absolute"
							style={{
								top: `${Math.random() * 100}%`,
								left: `${Math.random() * 100}%`,
								width: `${Math.random() * 4 + 4}px`,
								height: `${Math.random() * 4 + 4}px`,
								backgroundColor: '#ab4e45',
								borderRadius: '50%',
								animationDelay: `${i * 0.2}s`
							}}
						/>
					))}
				</div>

				{/* Loading Text with enhanced animation */}
				<motion.div
					className="mt-8 text-center space-y-1"
					animate={{
						opacity: [0.5, 1, 0.5],
					}}
					transition={{
						duration: 1.5,
						repeat: Infinity,
						ease: "easeInOut"
					}}
				>
					<p className="text-lg text-red-600 font-medium tracking-wide">
						Loading Collections
					</p>
					<div className="flex justify-center items-center space-x-2">
						{[...Array(3)].map((_, i) => (
							<motion.div
								key={i}
								animate={{
									y: [0, -5, 0],
									scale: [1, 1.2, 1]
								}}
								transition={{
									duration: 0.6,
									repeat: Infinity,
									delay: i * 0.15
								}}
								className="w-2 h-2 bg-red-400 rounded-full"
							/>
						))}
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default Loader;