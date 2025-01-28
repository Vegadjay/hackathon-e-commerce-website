// app/orders/[orderId]/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Package, Truck, CreditCard, Calendar, MapPin, AlertTriangle, Save, Edit } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast, Toaster } from 'react-hot-toast'
import { format } from 'date-fns'

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

export default function OrderDetailsPage() {
	const params = useParams()
	const router = useRouter()
	const [order, setOrder] = useState<Order | null>(null)
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)
	const [isEditing, setIsEditing] = useState(false)
	const [editedOrder, setEditedOrder] = useState<Partial<Order>>({})

	useEffect(() => {
		const fetchOrder = async () => {
			try {
				const response = await fetch(`/api/admin/order/${params.orderId}`)
				if (!response.ok) {
					throw new Error('Failed to fetch order')
				}
				const data = await response.json()
				setOrder(data.data)
				setEditedOrder(data.data)
			} catch (err) {
				setError('An error occurred while fetching order data')
			} finally {
				setIsLoading(false)
			}
		}

		fetchOrder()
	}, [params.orderId])

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;

		// Handle nested fields
		if (name.includes('.')) {
			const [parent, child] = name.split('.');
			setEditedOrder(prev => ({
				...prev,
				[parent]: {
					...prev[parent as keyof Partial<Order>],
					[child]: value
				}
			}));
		} else {
			setEditedOrder(prev => ({
				...prev,
				[name]: value
			}));
		}
	};


	const handleSelectChange = (name: string, value: string | boolean) => {
		setEditedOrder(prev => ({
			...prev,
			[name]: value
		}))
	}

	const handleSave = async () => {
		try {
			const response = await fetch(`/api/admin/order/${params.orderId}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(editedOrder),
			})

			if (!response.ok) {
				throw new Error('Failed to update order')
			}

			const updatedOrder = await response.json()
			setOrder(updatedOrder.data)
			setIsEditing(false)
			toast.success('Order updated successfully')
			router.refresh();
		} catch (err) {
			toast.error('Failed to update order')
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

	if (error || !order) {
		return (
			<div className="flex items-center justify-center h-screen bg-white">
				<div className="text-center">
					<AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
					<h2 className="text-2xl font-bold text-gray-800 mb-2">Oops! Something went wrong</h2>
					<p className="text-gray-600 mb-4">{error || 'Order not found'}</p>
					<Button onClick={() => router.push('/orders')} variant="outline">
						Back to Orders
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
					<h1 className="text-3xl font-bold text-gray-800">Order Details</h1>
					<Button
						onClick={() => setIsEditing(!isEditing)}
						variant={isEditing ? "destructive" : "default"}
						className='text-white'
					>
						{isEditing ? (
							<>
								<Edit className="mr-2 h-4 w-4" /> Cancel
							</>
						) : (
							<>
								<Edit className="text-white mr-2 h-4 w-4" /> Edit Order
							</>
						)}
					</Button>
				</div>

				<motion.div
					layout
					className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200"
				>
					<div className="p-6 space-y-6">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div>
								<h2 className="text-xl font-semibold mb-2 flex items-center">
									<Package className="w-5 h-5 mr-2 text-gray-500" />
									Order Information
								</h2>
								<p className="text-gray-600">Order ID: {order._id}</p>
								<p className="text-gray-600">User ID: {order.userId}</p>
								<div className="mt-2">
									<label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
									{isEditing ? (
										<Select
											onValueChange={(value) => handleSelectChange('status', value)}
											defaultValue={editedOrder.status}
										>
											<SelectTrigger className="w-full">
												<SelectValue placeholder="Select status" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="pending" className='bg-white'>Pending</SelectItem>
												<SelectItem value="shipped" className='bg-white'>Shipped</SelectItem>
												<SelectItem value="delivered" className='bg-white'>Delivered</SelectItem>
												<SelectItem value="cancelled" className='bg-white'>Cancelled</SelectItem>
											</SelectContent>
										</Select>
									) : (
										<Badge className={`${order.status === 'pending' ? 'bg-yellow-500' : order.status === 'shipped' ? 'bg-blue-500' : order.status === 'delivered' ? 'bg-green-500' : 'bg-red-500'} text-white`}>
											{order.status}
										</Badge>
									)}
								</div>
								<div className="mt-2">
									<label className="block text-sm font-medium text-gray-700 mb-1">Urgent</label>
									{isEditing ? (
										<Select
											onValueChange={(value) => handleSelectChange('urgent', value === 'true')}
											defaultValue={editedOrder.urgent ? 'true' : 'false'}
										>
											<SelectTrigger className="w-full">
												<SelectValue placeholder="Select urgency" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem className='bg-white' value="true">Yes</SelectItem>
												<SelectItem className='bg-white' value="false">No</SelectItem>
											</SelectContent>
										</Select>
									) : (
										<Badge className='bg-blue-500 text-white' variant={order.urgent ? "destructive" : "secondary"}>
											{order.urgent ? "Urgent" : "Not Urgent"}
										</Badge>
									)}
								</div>
							</div>
							<div>
								<h2 className="text-xl font-semibold mb-2 flex items-center">
									<CreditCard className="w-5 h-5 mr-2 text-gray-500" />
									Payment Details
								</h2>
								<p className="text-gray-600">Total Price: ₹{order.totalPrice.toFixed(2)}</p>
								<p className="text-gray-600">Payment Method: {order.paymentMethod}</p>
								<p className="text-gray-600">Payment Status: {order.paymentStatus}</p>
							</div>
						</div>

						<div>
							<h2 className="text-xl font-semibold mb-2 flex items-center">
								<MapPin className="w-5 h-5 mr-2 text-gray-500" />
								Shipping Address
							</h2>
							{isEditing ? (
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<Input
										name="shippingAddress.street"
										value={editedOrder.shippingAddress?.street || ''}
										onChange={handleInputChange}
										placeholder="Street"
									/>
									<Input
										name="shippingAddress.city"
										value={editedOrder.shippingAddress?.city || ''}
										onChange={handleInputChange}
										placeholder="City"
									/>
									<Input
										name="shippingAddress.state"
										value={editedOrder.shippingAddress?.state || ''}
										onChange={handleInputChange}
										placeholder="State"
									/>
									<Input
										name="shippingAddress.zipCode"
										value={editedOrder.shippingAddress?.zipCode || ''}
										onChange={handleInputChange}
										placeholder="Zip Code"
									/>
									<Input
										name="shippingAddress.country"
										value={editedOrder.shippingAddress?.country || ''}
										onChange={handleInputChange}
										placeholder="Country"
									/>
								</div>
							) : (
								<p className="text-gray-600">
									{order.shippingAddress.street}, {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}, {order.shippingAddress.country}
								</p>
							)}
						</div>

						<div>
							<h2 className="text-xl font-semibold mb-2 flex items-center">
								<Truck className="w-5 h-5 mr-2 text-gray-500" />
								Shipping Details
							</h2>
							{isEditing ? (
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<Input
										name="shippingDetails.carrier"
										value={editedOrder.shippingDetails?.carrier || ''}
										onChange={handleInputChange}
										placeholder="Carrier"
									/>
									<Input
										name="shippingDetails.trackingNumber"
										value={editedOrder.shippingDetails?.trackingNumber || ''}
										onChange={handleInputChange}
										placeholder="Tracking Number"
									/>
									<Input
										name="shippingDetails.estimatedDeliveryDate"
										type="date"
										value={editedOrder.shippingDetails?.estimatedDeliveryDate?.split('T')[0] || ''}
										onChange={handleInputChange}
										placeholder="Estimated Delivery Date"
									/>
								</div>
							) : (
								<>
									<p className="text-gray-600">Carrier: {order.shippingDetails.carrier}</p>
									<p className="text-gray-600">Tracking Number: {order.shippingDetails.trackingNumber}</p>
									<p className="text-gray-600">Estimated Delivery: {format(new Date(order.shippingDetails.estimatedDeliveryDate), 'PPP')}</p>
								</>
							)}
						</div>

						<div>
							<h2 className="text-xl font-semibold mb-2 flex items-center">
								<Package className="w-5 h-5 mr-2 text-gray-500" />
								Products
							</h2>
							<ul className="space-y-2">
								{order.products.map((product, index) => (
									<li key={index} className="text-gray-600">
										{product.quantity}x {product.name} ({product.size}) - ₹{parseFloat(product.price).toFixed(2)} each
									</li>
								))}
							</ul>
						</div>

						<div>
							<h2 className="text-xl font-semibold mb-2">Order Notes</h2>
							{isEditing ? (
								<Textarea
									name="orderNotes"
									value={editedOrder.orderNotes || ''}
									onChange={handleInputChange}
									placeholder="Order notes"
									rows={3}
								/>
							) : (
								<p className="text-gray-600">{order.orderNotes || 'No notes'}</p>
							)}
						</div>

						{order.cancellationReason && (
							<div>
								<h2 className="text-xl font-semibold mb-2 text-red-500">Cancellation Reason</h2>
								<p className="text-red-600">{order.cancellationReason}</p>
							</div>
						)}

						<div>
							<h2 className="text-xl font-semibold mb-2 flex items-center">
								<Calendar className="w-5 h-5 mr-2 text-gray-500" />
								Dates
							</h2>
							<p className="text-gray-600">Created: {format(new Date(order.createdAt), 'PPP')}</p>
							<p className="text-gray-600">Updated: {format(new Date(order.updatedAt), 'PPP')}</p>
						</div>
					</div>

					{isEditing && (
						<div className="bg-gray-50 px-6 py-4">
							<div className="flex justify-end space-x-4">
								<Button variant="outline" onClick={() => setIsEditing(false)}>
									Cancel
								</Button>
								<Button onClick={handleSave} className='text-white'>
									<Save className="text-white mr-2 h-4 w-4" /> Save Changes
								</Button>
							</div>
						</div>
					)}
				</motion.div>
			</div>
		</div>
	)
}