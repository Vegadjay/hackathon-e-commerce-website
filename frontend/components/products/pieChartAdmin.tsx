'use client'

import { useState, useMemo } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import Link from 'next/link';

interface Product {
	id: number
	name: string
	sale?: string
	price: number
	rating: number
	reviews: number
	inStock: number
	delivery: string
	deliveryDate: string
	seller: string
	color?: string[]
	category: string
	video?: string
	model: string
	size?: string[]
	images: string[]
	features: string[]
	description: string
	chartData: ChartData[]
	stock: number
	lastUpdated: string
	status: 'active' | 'inactive' | 'out_of_stock'
}

interface ChartData {
	month: string
	revenue: number
}

interface SizeCount {
	[key: string]: number
}

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FF0033"]

const ProductDetail = ({ products }: { products: Product[] }) => {
	const [selectedSize, setSelectedSize] = useState<string>("All")
	const [selectedRating, setSelectedRating] = useState<number>(0)
	const [selectedColor, setSelectedColor] = useState<string>("All")
	const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000])

	const allSizes = useMemo(() => Array.from(new Set(products.flatMap(product => product.size || []))), [products])
	const allColors = useMemo(() => Array.from(new Set(products.flatMap(product => product.color || []))), [products])
	const maxPrice = useMemo(() => Math.max(...products.map(product => product.price)), [products])

	const filteredProducts = useMemo(() => {
		return products.filter((product) => {
			const matchesSize = selectedSize === "All" || product.size?.includes(selectedSize)
			const matchesRating = product.rating >= selectedRating
			const matchesColor = selectedColor === "All" || product.color?.includes(selectedColor)
			const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]

			return matchesSize && matchesRating && matchesColor && matchesPrice
		})
	}, [products, selectedSize, selectedRating, selectedColor, priceRange])

	const sizeCount: SizeCount = useMemo(() => {
		const count: SizeCount = {}
		filteredProducts.forEach((product) => {
			product.size?.forEach((size) => {
				count[size] = (count[size] || 0) + product.inStock
			})
		})
		return count
	}, [filteredProducts])

	const chartData = useMemo(() => {
		return selectedRating > 0
			? filteredProducts.map((product) => ({
				name: product.name,
				rating: product.rating,
			}))
			: Object.entries(sizeCount).map(([size, count]) => ({ name: size, value: count }))
	}, [filteredProducts, selectedRating, sizeCount])

	return (
		<Card className="w-full max-w-4xl mx-auto">
			<CardHeader>
				<CardTitle className="text-2xl font-bold">Product Filters</CardTitle>
				<CardDescription>Filter products and see the distribution</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
					{/* Size Filter */}
					<div className="space-y-2">
						<label htmlFor="size-filter" className="text-sm font-medium">
							Filter by Size:
						</label>
						<Select value={selectedSize} onValueChange={setSelectedSize}>
							<SelectTrigger id="size-filter">
								<SelectValue placeholder="Select size" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="All">All</SelectItem>
								{allSizes.map((size) => (
									<SelectItem key={size} value={size} className="bg-white text-black hover:text-white">
										{size}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>

					{/* Rating Filter */}
					<div className="space-y-2">
						<label htmlFor="rating-filter" className="text-sm font-medium">
							Filter by Rating:
						</label>
						<Select value={selectedRating.toString()} onValueChange={(value) => setSelectedRating(Number(value))}>
							<SelectTrigger id="rating-filter">
								<SelectValue placeholder="Select rating" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="0">All</SelectItem>
								{[1, 2, 3, 4, 5].map((rating) => (
									<SelectItem key={rating} value={rating.toString()} className="bg-white text-black hover:text-white">
										{rating} star{rating > 1 ? 's' : ''} and above
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>

					{/* Color Filter */}
					<div className="space-y-2">
						<label htmlFor="color-filter" className="text-sm font-medium">
							Filter by Color:
						</label>
						<Select value={selectedColor} onValueChange={setSelectedColor}>
							<SelectTrigger id="color-filter">
								<SelectValue placeholder="Select color" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="All">All</SelectItem>
								{allColors.map((color) => (
									<SelectItem key={color} value={color} className="bg-white text-black hover:text-white">
										{color}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>

					{/* Price Range Filter */}
					<div className="space-y-2">
						<label htmlFor="price-range-filter" className="text-sm font-medium">
							Filter by Price:
						</label>
						<Slider
							id="price-range-filter"
							min={0}
							max={maxPrice}
							step={100}
							value={[priceRange[1]]}
							onValueChange={(value) => setPriceRange([priceRange[0], value[0]])}
							className="w-full"
						/>
						<div className="flex justify-between text-sm text-gray-500">
							<span>₹{priceRange[0]}</span>
							<span>₹{priceRange[1]}</span>
						</div>
					</div>
				</div>

				<div className="mb-4">
					<h3 className="text-lg font-semibold mb-2">Applied Filters:</h3>
					<div className="flex flex-wrap gap-2">
						{selectedSize !== "All" && (
							<Badge variant="secondary">Size: {selectedSize}</Badge>
						)}
						{selectedRating > 0 && (
							<Badge variant="secondary">Rating: {selectedRating}+ stars</Badge>
						)}
						{selectedColor !== "All" && (
							<Badge variant="secondary">Color: {selectedColor}</Badge>
						)}
						<Badge variant="secondary">
							Price: ₹{priceRange[0]} - ₹{priceRange[1]}
						</Badge>
					</div>
				</div>

				<div className="h-[400px] mb-8">
					<ResponsiveContainer width="100%" height="100%">
						{selectedRating > 0 ? (
							<BarChart data={chartData}>
								<CartesianGrid strokeDasharray="3 3" />
								<XAxis dataKey="name" />
								<YAxis />
								<Tooltip />
								<Legend />
								<Bar dataKey="rating" fill="#8884d8" />
							</BarChart>
						) : (
							<PieChart>
								<Pie
									data={chartData}
									cx="50%"
									cy="50%"
									labelLine={false}
									outerRadius={100}
									fill="#8884d8"
									dataKey="value"
									label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
								>
									{chartData.map((_, index) => (
										<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
									))}
								</Pie>
								<Tooltip />
								<Legend />
							</PieChart>
						)}
					</ResponsiveContainer>
				</div>

				<div>
					<h3 className="text-lg font-semibold mb-2">Filtered Products: {filteredProducts.length}</h3>
					<ul className="list-disc pl-5">
						{filteredProducts.slice(0, 5).map((product) => (
							<li key={product.id} className="text-sm text-gray-600">
								<Link href={`/admin/dashboard/category/${product.category}/${product.id}`}>{product.name} - ₹{product.price} - Rating: {product.rating}</Link>
							</li>
						))}
						{filteredProducts.length > 5 && (
							<li className="text-sm text-gray-600">And {filteredProducts.length - 5} more...</li>
						)}
					</ul>
				</div>
			</CardContent>
		</Card>
	)
}

export default ProductDetail