// app/admin/users/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { User, Mail, Phone, MapPin, Calendar, Shield, Search, ChevronDown, ChevronUp, LucideLoader } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { useRouter } from 'next/navigation'

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

export default function AdminUsersPage() {
	const [users, setUsers] = useState<UserData[]>([])
	const [filteredUsers, setFilteredUsers] = useState<UserData[]>([])
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)
	const [searchTerm, setSearchTerm] = useState('')
	const [expandedUser, setExpandedUser] = useState<string | null>(null)
	const [spinner,setSpinner] = useState<boolean>(false);
	const router = useRouter();

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const response = await fetch('/api/admin/user')
				if (!response.ok) {
					throw new Error('Failed to fetch users')
				}
				const data = await response.json()
				setUsers(data.data)
				setFilteredUsers(data.data)
			} catch (err) {
				setError('An error occurred while fetching users')
			} finally {
				setIsLoading(false)
			}
		}

		fetchUsers()
	}, [])

	useEffect(() => {
		const filtered = users.filter(user =>
			user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
			user.email.toLowerCase().includes(searchTerm.toLowerCase())
		)
		setFilteredUsers(filtered)
	}, [searchTerm, users])

	const toggleUserExpansion = (userId: string) => {
		setExpandedUser(expandedUser === userId ? null : userId)
	}

	if (error) {
		return (
			<div className="flex items-center justify-center h-screen">
				<div className="text-center">
					<h2 className="text-2xl font-bold text-gray-800 mb-2">Oops! Something went wrong</h2>
					<p className="text-gray-600 mb-4">{error}</p>
					<Button onClick={() => window.location.reload()} variant="outline">
						Try Again
					</Button>
				</div>
			</div>
		)
	}

	return (
		<div className="mx-auto px-4 py-8 bg-white min-h-screen">
			<h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">User Management</h1>
			<div className="mb-6 relative">
				<Input
					type="text"
					placeholder="Search users..."
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					className="pl-10 pr-4 py-2 w-full"
				/>
				<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
			</div>
			<AnimatePresence>
				{isLoading ? (
					<div className="space-y-4">
						{[...Array(5)].map((_, index) => (
							<Skeleton key={index} className="h-24 w-full rounded-lg" />
						))}
					</div>
				) : (
					<motion.div layout className="space-y-4">
						{filteredUsers.map((user) => (
							<motion.div
								key={user._id}
								layout
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -20 }}
								transition={{ duration: 0.3 }}
								className="bg-white rounded-lg shadow-md overflow-hidden"
							>
								<div
									className="p-4 cursor-pointer flex justify-between items-center"
									onClick={() => toggleUserExpansion(user._id)}
								>
									<div className="flex items-center space-x-4">
										<div className="bg-gray-100 p-2 rounded-full">
											<User className="h-6 w-6 text-gray-600" />
										</div>
										<div>
											<h2 className="text-lg font-semibold text-gray-800">{user.username}</h2>
											<p className="text-sm text-gray-500">{user.email}</p>
										</div>
									</div>
									{expandedUser === user._id ? <ChevronUp className="h-5 w-5 text-gray-400" /> : <ChevronDown className="h-5 w-5 text-gray-400" />}
								</div>
								<AnimatePresence>
									{expandedUser === user._id && (
										<motion.div
											initial={{ opacity: 0, height: 0 }}
											animate={{ opacity: 1, height: 'auto' }}
											exit={{ opacity: 0, height: 0 }}
											transition={{ duration: 0.3 }}
											className="px-4 pb-4 space-y-3"
										>
											<div className="flex items-center space-x-2">
												<Phone className="h-4 w-4 text-gray-400" />
												<span className="text-sm text-gray-600">{user.phone}</span>
												<Badge variant={user.verified.phone ? "success" : "destructive"} className="ml-2">
													{user.verified.phone ? "Verified" : "Unverified"}
												</Badge>
											</div>
											<div className="flex items-start space-x-2">
												<MapPin className="h-4 w-4 text-gray-400 mt-1" />
												<span className="text-sm text-gray-600">
													{user.address.street}, {user.address.city}, {user.address.state}, {user.address.zipCode}, {user.address.country}
												</span>
											</div>
											<div className="flex items-center space-x-2">
												<Shield className="h-4 w-4 text-gray-400" />
												<span className="text-sm text-gray-600 capitalize">{user.role}</span>
											</div>
											<div className="flex items-center space-x-2">
												<Calendar className="h-4 w-4 text-gray-400" />
												<span className="text-sm text-gray-600">Joined: {new Date(user.createdAt).toLocaleDateString()}</span>
											</div>
											<div className="flex items-center space-x-2">
												<span className="text-sm font-semibold text-gray-700">Orders: {user.orders.length}</span>
											</div>
											<div className="flex items-center space-x-2">
												<Button className="text-sm font-semibold text-white" onClick={()=>{
													setSpinner(true);
													router.push(`/admin/dashboard/users/${user._id}`)}}>
													{spinner ?
														<LucideLoader className="w-4 h-4 animate-spin" /> : "View More"
													}
												</Button>
											</div>
										</motion.div>
									)}
								</AnimatePresence>
							</motion.div>
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}