'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { format } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Package, Truck, CreditCard, Calendar, MapPin, AlertTriangle, ExternalLink } from 'lucide-react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'

interface Product {
	id: {
		productId: string
		name: string
		quantity: number
		size: string
		price: string
		_id: string
		image: string
	}
	error?: string
}

interface Order {
	_id: string
	shippingDetails: {
		carrier: string
		trackingNumber: string
		estimatedDeliveryDate: string
	}
	products: Product[]
	totalPrice: number
	shippingAddress: {
		street: string
		city: string
		state: string
		zipCode: string
		country: string
	}
	status: string
	paymentMethod: string
	paymentStatus: string
	orderNotes: string
	urgent: boolean
	createdAt: string
}

export default function EnhancedOrdersPage() {
	const [orders, setOrders] = useState<Order[]>([])
	const router = useRouter()
	const [loading, setIsLoading] = useState(true)
	const [error, setError] = useState<string>("")

	const fetchAllOrders = async () => {
		const userId = Cookies.get("userId")
		if (!userId) {
			router.push("/login")
			return
		}

		try {
			setIsLoading(true)
			const response = await fetch(`/api/order/get/${userId}`)
			if (!response.ok) {
				throw new Error('Failed to fetch orders')
			}
			const data = await response.json()
			setOrders(data.data)
		} catch (err) {
			setError(err instanceof Error ? err.message : 'An error occurred while fetching orders')
		} finally {
			setIsLoading(false)
		}
	}

	useEffect(() => {
		fetchAllOrders()
	}, [])

	const getStatusColor = (status: string) => {
		switch (status.toLowerCase()) {
			case 'pending': return 'bg-yellow-500'
			case 'shipped': return 'bg-blue-500'
			case 'delivered': return 'bg-green-500'
			default: return 'bg-gray-500'
		}
	}

	if (loading) {
		return <div className="flex justify-center items-center h-screen">Loading...</div>
	}

	if (error) {
		return <div className="text-center text-red-500">{error}</div>
	}

	return (
		<div className="container mx-auto px-4 py-8 bg-gradient-to-br from-purple-50 to-red-50 min-h-screen">
			<motion.h1
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="text-4xl font-bold text-center text-gray-800 mb-8"
			>
				Your Fabulous Orders
			</motion.h1>
			<AnimatePresence>
				{orders.map((order, index) => (
					<motion.div
						key={order._id}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
					>
						<Card className="mb-6 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
							<CardHeader className="bg-gradient-to-r from-red-50 to-red-200 py-4">
								<CardTitle className="flex justify-between items-center">
									<span className="text-lg font-semibold">Order #{order._id.slice(-6)}</span>
									<div className="flex items-center space-x-2">
										<Badge className={`${getStatusColor(order.status)} text-white`}>
											{order.status}
										</Badge>
										{order.urgent && (
											<Badge variant="destructive" className="animate-pulse">
												Urgent
											</Badge>
										)}
									</div>
								</CardTitle>
							</CardHeader>
							<CardContent className="pt-6">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div>
										<h3 className="text-lg font-semibold mb-2 flex items-center">
											<Calendar className="w-5 h-5 mr-2 text-purple-600" />
											Order Details
										</h3>
										<p className="text-sm text-gray-600">Date: {format(new Date(order.createdAt), 'PPP')}</p>
										<p className="text-sm text-gray-600 font-semibold">Total: ₹{order.totalPrice.toFixed(2)}</p>
										<div className="flex items-center mt-2">
											<CreditCard className="w-5 h-5 mr-2 text-purple-600" />
											<span className="text-sm capitalize">{order.paymentMethod} - {order.paymentStatus}</span>
										</div>
										{order.orderNotes && (
											<p className="text-sm text-gray-600 mt-2 italic">"{order.orderNotes}"</p>
										)}
									</div>
									<div>
										<h3 className="text-lg font-semibold mb-2 flex items-center">
											<Truck className="w-5 h-5 mr-2 text-purple-600" />
											Shipping
										</h3>
										<p className="text-sm text-gray-600">{order.shippingDetails.carrier}</p>
										<p className="text-sm text-gray-600">
											Tracking:
											<a
												href={`https://www.fedex.com/fedextrack/?trknbr=${order.shippingDetails.trackingNumber}`}
												target="_blank"
												rel="noopener noreferrer"
												className="text-purple-600 hover:underline ml-1"
											>
												{order.shippingDetails.trackingNumber}
											</a>
										</p>
										<p className="text-sm text-gray-600">
											Estimated Delivery: {format(new Date(order.shippingDetails.estimatedDeliveryDate), 'PPP')}
										</p>
										<div className="mt-2 flex items-start">
											<MapPin className="w-5 h-5 mr-2 text-purple-600 flex-shrink-0 mt-1" />
											<p className="text-sm text-gray-600">
												{order.shippingAddress.street}, {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}, {order.shippingAddress.country}
											</p>
										</div>
									</div>
								</div>
								<Accordion type="single" collapsible className="mt-4">
									<AccordionItem value="products">
										<AccordionTrigger>
											<h3 className="text-lg font-semibold flex items-center">
												<Package className="w-5 h-5 mr-2 text-purple-600" />
												Products ({order.products.length})
											</h3>
										</AccordionTrigger>
										<AccordionContent>
											<div className="space-y-4">
												{order.products.map((product, idx) => (
													<div key={idx} className="flex items-center justify-between py-2 border-b last:border-b-0">
														<div className="flex items-center space-x-4">
															<div>
																<Link href={`/product/${product.id.productId}`} className="text-sm font-medium hover:text-purple-600 transition-colors">
																	{product.id.name}
																	<ExternalLink className="inline-block w-4 h-4 ml-1" />
																</Link>
																<p className="text-xs text-gray-500">Size: {product.id.size}</p>
																<p className="text-xs text-gray-500">Quantity: {product.id.quantity}</p>
															</div>
														</div>
														<div className="text-sm text-gray-600 font-semibold">
															₹{(parseFloat(product.id.price) * product.id.quantity).toFixed(2)}
														</div>
													</div>
												))}
											</div>
										</AccordionContent>
									</AccordionItem>
								</Accordion>
							</CardContent>
						</Card>
					</motion.div>
				))}
			</AnimatePresence>
			{orders.length === 0 && (
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className="text-center text-gray-600 mt-8 text-lg"
				>
					You haven't placed any orders yet. Time to go shopping!
				</motion.p>
			)}
		</div>
	)
}