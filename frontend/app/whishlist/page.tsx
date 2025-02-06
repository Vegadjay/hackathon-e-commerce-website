"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Trash2 } from "lucide-react";
import Cookies from "js-cookie";
import { toast } from "sonner";
import Image from "next/image";

interface Product {
	_id: string;
	name: string;
	price: number;
	originalPrice: number;
	description?: string;
	image: string;
	category?: string;
	inStock?: boolean;
}

export default function WishlistPage() {
	const [wishlistItems, setWishlistItems] = useState<Product[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetchWishlistItems();
	}, []);

	const fetchWishlistItems = () => {
		try {
			const userId = Cookies.get("userId");
			if (!userId) {
				toast.error("User not authenticated. Please log in.");
				setIsLoading(false);
				return;
			}
			const wishlist = localStorage.getItem("wishlist");
			if (!wishlist) {
				toast.error("No items in the wishlist.");
				setIsLoading(false);
				return;
			}
			const products = JSON.parse(wishlist);
			setWishlistItems(products);
		} catch (error) {
			console.error("Error fetching wishlist:", error);
			toast.error("Something went wrong. Please try again.");
		} finally {
			setIsLoading(false);
		}
	};

	const removeFromWishlist = (productId: string) => {
		try {
			const updatedWishlist = wishlistItems.filter((item) => item._id !== productId);
			setWishlistItems(updatedWishlist);
			localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
			toast.success("Item removed from wishlist.");
		} catch (error) {
			console.error("Error removing item from wishlist:", error);
			toast.error("Failed to remove the item. Please try again.");
		}
	};

	if (isLoading) {
		return (
			<div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
				<div className="animate-pulse space-y-4 max-w-7xl mx-auto">
					{[1, 2, 3, 4].map((i) => (
						<div key={i} className="h-64 bg-gray-200 rounded-lg"></div>
					))}
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				<div className="flex items-center justify-between mb-8">
					<h1 className="text-3xl font-bold text-gray-900">My Wishlist</h1>
					<div className="flex items-center gap-2">
						<Heart className="h-6 w-6 text-red-500" />
						<span className="text-lg font-medium">{wishlistItems.length} items</span>
					</div>
				</div>
				{wishlistItems.length === 0 ? (
					<div className="text-center py-12">
						<Heart className="h-16 w-16 text-red-500 mx-auto mb-4" />
						<h2 className="text-2xl font-medium text-gray-900 mb-2">Your wishlist is empty</h2>
						<p className="text-gray-500 mb-6">Start adding items to your wishlist!</p>
						<Link
							href="/"
							className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
						>
							Explore Products
						</Link>
					</div>
				) : (
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
						{wishlistItems.map((product) => (
							<motion.div
								key={product._id}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: 20 }}
								className="bg-white rounded-lg shadow-md overflow-hidden group"
							>
								<Link href={`/product/${product._id}`} className="block relative">
									<div className="aspect-w-3 aspect-h-4">
										<Image
											src={product?.image || "/detailphotos/1.1.webp"}
											alt={product.name}
											width={400}
											height={400}
											className="object-cover object-top aspect-[3/4] w-full h-full group-hover:scale-105 transition-transform duration-200"
										/>
									</div>
								</Link>
								<div className="p-4">
									<Link href={`/product/${product._id}`}>
										<h3 className="text-lg font-medium text-gray-900 mb-2 hover:text-red-600 transition-colors">
											{product.name}
										</h3>
									</Link>
									<div className="flex items-baseline justify-between mb-2">
										<span className="text-xl font-bold text-red-600">₹{product.price}</span>
										<button
											onClick={() => removeFromWishlist(product._id)}
											className="mt-2 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-red-600 bg-gray-100 hover:bg-gray-200"
										>
											<Trash2 className="h-5 w-5 mr-2" />
											Remove
										</button>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				)}
			</div>
		</div>
	);
}
