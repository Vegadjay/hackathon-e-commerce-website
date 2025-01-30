// app/admin/orders/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Package, Truck, CreditCard, Calendar, MapPin, AlertTriangle, ChevronDown, ChevronUp, Search, LucideLoader } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { format } from 'date-fns'
import { useRouter } from 'next/navigation'

interface Product {
	productId: string
	name: string
	quantity: number
	size: string
	price: string
}

interface ShippingAddress {
	street: string
	city: string
	state: string
	zipCode: string
	country: string
}

interface ShippingDetails {
	carrier: string
	trackingNumber: string
	estimatedDeliveryDate: string
}

interface Order {
	_id: string
	userId: string
	products: Product[]
	totalPrice: number
	shippingAddress: ShippingAddress
	status: string
	paymentMethod: string
	paymentStatus: string
	orderNotes: string
	cancellationReason: string
	shippingDetails: ShippingDetails
	urgent: boolean
	createdAt: string
	updatedAt: string
}

export default function AdminOrdersPage() {
	const [orders, setOrders] = useState<Order[]>([])
	const [filteredOrders, setFilteredOrders] = useState<Order[]>([])
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)
	const [searchTerm, setSearchTerm] = useState('')
	const [expandedOrder, setExpandedOrder] = useState<string | null>(null)
	const [spinner,setSpinner] = useState<boolean>(false);
	const router = useRouter();

	useEffect(() => {
		const fetchOrders = async () => {
			try {
				const response = await fetch('/api/admin/order/fetchall')
				if (!response.ok) {
					throw new Error('Failed to fetch orders')
				}
				const data = await response.json()
				setOrders(data.data)
				setFilteredOrders(data.data)
			} catch (err) {
				setError('An error occurred while fetching orders')
			} finally {
				setIsLoading(false)
			}
		}

		fetchOrders()
	}, [])

	useEffect(() => {
		const filtered = orders.filter(order =>
			order._id.toLowerCase().includes(searchTerm.toLowerCase()) ||
			order.status.toLowerCase().includes(searchTerm.toLowerCase())
		)
		setFilteredOrders(filtered)
	}, [searchTerm, orders])

	const toggleOrderExpansion = (orderId: string) => {
		setExpandedOrder(expandedOrder === orderId ? null : orderId)
	}

	const getStatusColor = (status: string) => {
		switch (status.toLowerCase()) {
			case 'pending': return 'bg-yellow-500'
			case 'shipped': return 'bg-blue-500'
			case 'delivered': return 'bg-green-500'
			case 'cancelled': return 'bg-red-500'
			default: return 'bg-gray-500'
		}
	}

	if (error) {
		return (
			<div className="flex items-center justify-center h-screen bg-white">
				<div className="text-center">
					<AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
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
		<div className="container mx-auto px-4 py-8 bg-white min-h-screen">
			<h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Order Management</h1>
			<div className="mb-6 relative">
				<Input
					type="text"
					placeholder="Search orders by ID or status..."
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
						{filteredOrders.map((order) => (
							<motion.div
								key={order._id}
								layout
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -20 }}
								transition={{ duration: 0.3 }}
								className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
							>
								<div
									className="p-4 cursor-pointer flex justify-between items-center"
									onClick={() => toggleOrderExpansion(order._id)}
								>
									<div className="flex items-center space-x-4">
										<div className="bg-gray-100 p-2 rounded-full">
											<Package className="h-6 w-6 text-gray-600" />
										</div>
										<div>
											<h2 className="text-lg font-semibold text-gray-800">Order #{order._id.slice(-6)}</h2>
											<p className="text-sm text-gray-500">{format(new Date(order.createdAt), 'PPP')}</p>
										</div>
									</div>
									<div className="flex items-center space-x-2">
										<Badge className={`${getStatusColor(order.status)} text-white`}>
											{order.status}
										</Badge>
										{order.urgent && (
											<Badge variant="destructive" className="animate-pulse">
												Urgent
											</Badge>
										)}
										{expandedOrder === order._id ? <ChevronUp className="h-5 w-5 text-gray-400" /> : <ChevronDown className="h-5 w-5 text-gray-400" />}
									</div>
								</div>
								<AnimatePresence>
									{expandedOrder === order._id && (
										<motion.div
											initial={{ opacity: 0, height: 0 }}
											animate={{ opacity: 1, height: 'auto' }}
											exit={{ opacity: 0, height: 0 }}
											transition={{ duration: 0.3 }}
											className="px-4 pb-4 space-y-3"
										>
											<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
												<div>
													<h3 className="text-lg font-semibold mb-2 flex items-center">
														<MapPin className="w-5 h-5 mr-2 text-gray-500" />
														Shipping Address
													</h3>
													<p className="text-sm text-gray-600">
														{order.shippingAddress.street}, {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}, {order.shippingAddress.country}
													</p>
												</div>
												<div>
													<h3 className="text-lg font-semibold mb-2 flex items-center">
														<Truck className="w-5 h-5 mr-2 text-gray-500" />
														Shipping Details
													</h3>
													<p className="text-sm text-gray-600">Carrier: {order.shippingDetails.carrier}</p>
													<p className="text-sm text-gray-600">Tracking: {order.shippingDetails.trackingNumber}</p>
													<p className="text-sm text-gray-600">
														Estimated Delivery: {format(new Date(order.shippingDetails.estimatedDeliveryDate), 'PPP')}
													</p>
												</div>
											</div>
											<div>
												<h3 className="text-lg font-semibold mb-2 flex items-center">
													<Package className="w-5 h-5 mr-2 text-gray-500" />
													Products
												</h3>
												<ul className="space-y-2">
													{order.products.map((product, index) => (
														<li key={index} className="text-sm text-gray-600">
															{product.quantity}x {product.name} ({product.size}) - ₹{parseFloat(product.price).toFixed(2)} each
														</li>
													))}
												</ul>
											</div>
											<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
												<div>
													<h3 className="text-lg font-semibold mb-2 flex items-center">
														<CreditCard className="w-5 h-5 mr-2 text-gray-500" />
														Payment
													</h3>
													<p className="text-sm text-gray-600">Method: {order.paymentMethod}</p>
													<p className="text-sm text-gray-600">Status: {order.paymentStatus}</p>
													<p className="text-sm font-semibold text-gray-800">Total: ₹{order.totalPrice.toFixed(2)}</p>
												</div>
												<div>
													<h3 className="text-lg font-semibold mb-2 flex items-center">
														<Calendar className="w-5 h-5 mr-2 text-gray-500" />
														Dates
													</h3>
													<p className="text-sm text-gray-600">Created: {format(new Date(order.createdAt), 'PPP')}</p>
													<p className="text-sm text-gray-600">Updated: {format(new Date(order.updatedAt), 'PPP')}</p>
												</div>
											</div>
											{order.orderNotes && (
												<div>
													<h3 className="text-lg font-semibold mb-2">Order Notes</h3>
													<p className="text-sm text-gray-600">{order.orderNotes}</p>
												</div>
											)}
											{order.cancellationReason && (
												<div>
													<h3 className="text-lg font-semibold mb-2 text-red-500">Cancellation Reason</h3>
													<p className="text-sm text-red-600">{order.cancellationReason}</p>
												</div>
											)}
											<Button className='text-white' onClick={() => {
												setSpinner(true);
												router.push(`/admin/dashboard/orders/${order._id}`)}}>
												{spinner ?
													<LucideLoader className="w-4 h-4 animate-spin" /> : "View More"
												}
											</Button>
										</motion.div>
									)}
								</AnimatePresence>
							</motion.div>
						))}
					</motion.div>
				)}
			</AnimatePresence>
			{filteredOrders.length === 0 && !isLoading && (
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2 }}
					className="text-center text-gray-500 mt-8"
				>
					No orders found matching your search.
				</motion.p>
			)}
		</div>
	)
}