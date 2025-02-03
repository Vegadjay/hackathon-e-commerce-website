'use client'

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { toast, Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';
import { User, Lock, Mail, ArrowRight } from 'lucide-react';

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.15,
			delayChildren: 0.2,
		},
	},
};

const itemVariants = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			type: 'spring',
			stiffness: 100,
		},
	},
};

const floatingBubbleVariants = {
	animate: {
		y: [0, -15, 0],
		transition: {
			duration: 3,
			repeat: Infinity,
			ease: "easeInOut"
		}
	}
};

const CustomInput = ({ icon: Icon, error, ...props }: { icon: React.ComponentType<{ size: number }>, error?: string }) => {
	return (
		<motion.div
			variants={itemVariants}
			className="relative group"
		>
			<div className="relative">
				<div className="absolute left-3 top-1/2 -translate-y-1/2 text-red-400 group-focus-within:text-red-600 transition-colors">
					<Icon size={20} />
				</div>
				<input
					{...props}
					className={`w-full pl-12 pr-4 py-3 bg-white/50 border-2 rounded-xl
          ${error ? 'border-red-400' : 'border-red-200 group-focus-within:border-red-400'}
          transition-all duration-300 outline-none`}
				/>
			</div>
			{error && <p className="text-red-500 text-sm mt-1">{error}</p>}
		</motion.div>
	);
};

export default function Login() {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);

		try {
			const response = await fetch('/api/user/login', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					identifier: formData.email,
					password: formData.password
				}),
			});

			const result = await response.json();

			if (response.ok && result.success) {
				setFormData({ email: '', password: '' });

				if (result.token) {
					Cookies.set('token', result.token, {
						expires: 7,
						secure: false,
						httpOnly: false
					});
				}
				if (result.user.role == "admin") {
					toast.success('Login successfully!');
					Cookies.set("role", "webadmin");
					router.push('/admin/dashboard');
				}
				else {
					toast.error(result.message || 'Login failed, you are not admin.');
				}
			}
			else {
				toast.error(result.message || 'Login failed, please try again.');
			}
		} catch (error) {
			console.error('Login error:', error);
			toast.error('An error occurred. Please try again.');
		} finally {
			setIsLoading(false);
		}
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	useEffect(() => {
		const role = Cookies.get("role");
		if (role == "webadmin") {
			router.push("/admin/dashboard");
		}
	}, []);

	return (
		<div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-red-50 via-red-100 to-red-200">
			<Toaster position="bottom-right" />
			<div className="absolute inset-0 -z-10">
				<motion.div
					animate={{
						rotate: 360,
						transition: { duration: 20, repeat: Infinity, ease: "linear" }
					}}
					className="absolute top-1/4 -left-12 w-96 h-96 bg-red-200/30 rounded-full"
				/>
				<motion.div
					animate={{
						rotate: -360,
						transition: { duration: 25, repeat: Infinity, ease: "linear" }
					}}
					className="absolute bottom-1/4 -right-12 w-96 h-96 bg-red-200/30 rounded-full"
				/>
			</div>
			<div className="container mx-auto px-4 py-16 relative">
				<motion.div
					initial="hidden"
					animate="visible"
					variants={containerVariants}
					className="max-w-md mx-auto"
				>
					<motion.div
						variants={floatingBubbleVariants}
						animate="animate"
						className="absolute -top-4 -left-4 w-16 h-16 bg-red-400/10 rounded-full"
					/>
					<motion.div
						variants={floatingBubbleVariants}
						animate="animate"
						className="absolute top-1/2 -right-8 w-20 h-20 bg-red-400/10 rounded-full"
					/>

					<div className="bg-white/40 rounded-3xl shadow-xl overflow-hidden border border-white/50">
						<div className="p-8">
							<motion.div className="text-center mb-10" variants={itemVariants}>
								<motion.div
									className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center"
									whileHover={{ rotate: 5, scale: 1.05 }}
								>
									<User size={40} className="text-white" />
								</motion.div>
								<h2 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
									Welcome Admin
								</h2>
								<p className="mt-3 text-gray-600">
									Sign in to manage your website
								</p>
							</motion.div>

							<motion.form
								onSubmit={handleSubmit}
								className="space-y-6"
							>
								<CustomInput
									// @ts-ignore
									icon={Mail}
									name="email"
									type="text"
									placeholder="Enter your email"
									value={formData.email}
									onChange={handleInputChange}
									error={undefined}
								/>
								<CustomInput
									// @ts-ignore
									icon={Lock}
									name="password"
									type="password"
									placeholder="Enter your password"
									value={formData.password}
									onChange={handleInputChange}
									error={undefined}
								/>

								<motion.button
									variants={itemVariants}
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
									type="submit"
									disabled={isLoading}
									className="w-full py-3 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-xl
                    font-medium flex items-center justify-center gap-2 group hover:shadow-lg transition-shadow"
								>
									{isLoading ? 'Signing in...' : (
										<>
											Sign In
											<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
										</>
									)}
								</motion.button>
							</motion.form>
						</div>
					</div>
				</motion.div>
			</div>
		</div>
	);
}
