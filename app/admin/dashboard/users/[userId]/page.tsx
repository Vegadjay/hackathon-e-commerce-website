// app/users/[userId]/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { User, Save, X, Check, AlertTriangle } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { toast, Toaster } from 'react-hot-toast'
import { Switch } from "@/components/ui/switch"

interface Address {
	street: string
	city: string
	state: string
	zipCode: string
	country: string
}

interface UserData {
	_id: string
	username: string
	email: string
	phone: string
	address: Address
	verified: {
		email: boolean
		phone: boolean
	}
	role: string
	createdAt: string
	orders: string[]
}

export default function UserEditPage() {
	const params = useParams()
	const router = useRouter()
	const [user, setUser] = useState<UserData | null>(null)
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)
	const [isEditing, setIsEditing] = useState(false)
	const [editedUser, setEditedUser] = useState<Partial<UserData>>({})

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const response = await fetch(`/api/admin/user/${params.userId}`)
				if (!response.ok) {
					throw new Error('Failed to fetch user')
				}
				const data = await response.json()
				setUser(data.data)
				setEditedUser(data.data)
			} catch (err) {
				setError('An error occurred while fetching user data')
			} finally {
				setIsLoading(false)
			}
		}

		fetchUser()
	}, [params.userId])

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setEditedUser(prev => ({
			...prev,
			[name]: value
		}))
	}

	const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setEditedUser((prev: any) => ({
			...prev,
			address: {
				...prev.address,
				[name]: value
			}
		}))
	}

	const handleVerificationToggle = (field: 'email' | 'phone') => {
		setEditedUser((prev: any) => ({
			...prev,
			verified: {
				...prev.verified,
				[field]: !prev.verified[field]
			}
		}))
	}

	const handleSave = async () => {
		try {
			const response = await fetch(`/api/admin/user/${params.userId}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(editedUser),
			})

			if (!response.ok) {
				throw new Error('Failed to update user')
			}

			const updatedUser = await response.json()
			setUser(updatedUser.data)
			setIsEditing(false)
			toast.success('User updated successfully')
		} catch (err) {
			toast.error('Failed to update user')
		}
	}

	if (isLoading) {
		return (
			<div className="container mx-auto px-4 py-8">
				<Skeleton className="h-12 w-3/4 mb-4" />
				<div className="space-y-4">
					{[...Array(5)].map((_, index) => (
						<Skeleton key={index} className="h-10 w-full" />
					))}
				</div>
			</div>
		)
	}

	if (error || !user) {
		return (
			<div className="flex items-center justify-center h-screen">
				<div className="text-center">
					<AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
					<h2 className="text-2xl font-bold text-gray-800 mb-2">Oops! Something went wrong</h2>
					<p className="text-gray-600 mb-4">{error || 'User not found'}</p>
					<Button onClick={() => router.push('/admin/dashboard/users')} variant="outline">
						Back to Users
					</Button>
				</div>
			</div>
		)
	}

	return (
		<div className="mx-auto px-4 py-8 bg-white min-h-screen">
			<Toaster position="top-right" />
			<div className="max-w-5xl mx-auto">
				<div className="flex justify-between items-center mb-8">
					<h1 className="text-3xl font-bold text-gray-800">Edit User</h1>
					<Button
						onClick={() => setIsEditing(!isEditing)}
						variant={isEditing ? "destructive" : "default"}
						className='text-white'
					>
						{isEditing ? (
							<>
								<X className="mr-2 h-4 w-4" /> Cancel
							</>
						) : (
							<>
								<User className="mr-2 h-4 w-4 text-white" /> Edit User
							</>
						)}
					</Button>
				</div>

				<motion.div
					layout
					className="bg-white rounded-lg shadow-lg overflow-hidden"
				>
					<div className="p-6 space-y-6">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
								<Input
									name="username"
									value={editedUser.username || ''}
									onChange={handleInputChange}
									disabled={!isEditing}
									className="w-full"
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
								<div className="flex items-center space-x-2">
									<Input
										name="email"
										value={editedUser.email || ''}
										onChange={handleInputChange}
										disabled={!isEditing}
										className="w-full"
									/>
									<Switch
										checked={editedUser.verified?.email || false}
										onCheckedChange={() => handleVerificationToggle('email')}
										disabled={!isEditing}
									/>
									<span className="text-sm text-gray-500">Verified</span>
								</div>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
								<div className="flex items-center space-x-2">
									<Input
										name="phone"
										value={editedUser.phone || ''}
										onChange={handleInputChange}
										disabled={!isEditing}
										className="w-full"
									/>
									<Switch
										checked={editedUser.verified?.phone || false}
										onCheckedChange={() => handleVerificationToggle('phone')}
										disabled={!isEditing}
									/>
									<span className="text-sm text-gray-500">Verified</span>
								</div>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
								<Input
									name="role"
									value={editedUser.role || ''}
									onChange={handleInputChange}
									disabled={!isEditing}
									className="w-full"
								/>
							</div>
						</div>

						<div>
							<h3 className="text-lg font-semibold text-gray-800 mb-2">Address</h3>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-1">Street</label>
									<Input
										name="street"
										value={editedUser.address?.street || ''}
										onChange={handleAddressChange}
										disabled={!isEditing}
										className="w-full"
									/>
								</div>
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-1">City</label>
									<Input
										name="city"
										value={editedUser.address?.city || ''}
										onChange={handleAddressChange}
										disabled={!isEditing}
										className="w-full"
									/>
								</div>
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-1">State</label>
									<Input
										name="state"
										value={editedUser.address?.state || ''}
										onChange={handleAddressChange}
										disabled={!isEditing}
										className="w-full"
									/>
								</div>
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-1">Zip Code</label>
									<Input
										name="zipCode"
										value={editedUser.address?.zipCode || ''}
										onChange={handleAddressChange}
										disabled={!isEditing}
										className="w-full"
									/>
								</div>
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
									<Input
										name="country"
										value={editedUser.address?.country || ''}
										onChange={handleAddressChange}
										disabled={!isEditing}
										className="w-full"
									/>
								</div>
							</div>
						</div>

						<div>
							<h3 className="text-lg font-semibold text-gray-800 mb-2">Additional Information</h3>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-1">Created At</label>
									<Input
										value={new Date(user.createdAt).toLocaleString()}
										disabled
										className="w-full"
									/>
								</div>
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-1">Orders</label>
									<Input
										value={user.orders.length.toString()}
										disabled
										className="w-full"
									/>
								</div>
							</div>
						</div>
					</div>

					<AnimatePresence>
						{isEditing && (
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: 20 }}
								transition={{ duration: 0.2 }}
								className="bg-gray-50 px-6 py-4"
							>
								<div className="flex justify-end space-x-4">
									<Button variant="outline" onClick={() => setIsEditing(false)}>
										Cancel
									</Button>
									<Button onClick={handleSave} className='text-white'>
										<Save className="mr-2 h-4 w-4" /> Save Changes
									</Button>
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</motion.div>
			</div>
		</div>
	)
}