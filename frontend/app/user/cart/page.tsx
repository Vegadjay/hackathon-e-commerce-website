"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Trash2, ShoppingCart } from "lucide-react";
import Cookies from "js-cookie";
import { toast } from "sonner";
interface Product {
    id: string;
    name: string;
    price: number;
    originalPrice: number;
    description: string;
    images: string[];
    category: string;
    inStock: boolean;
}
export default function WishlistPage() {
    const [wishlistItems, setWishlistItems] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetchWishlistItems();
    }, []);
    const fetchWishlistItems = async () => {
        try {
            const userId = Cookies.get("userId");
            if (!userId) {
                toast.error("User not authenticated. Please log in.");
                setIsLoading(false);
                return;
            }
            const response = await fetch(`/api/whishlist/${userId}`);
            if (response.ok) {
                const res = await response.json();
                const productIds = res.data.products;
                const productDetails = await Promise.all(
                    productIds.map((productId: string) =>
                        fetch(`/api/products/${productId}`).then((res) => res.json())
                    )
                );
                const products = productDetails.map((product) => product.data);
                setWishlistItems(products);
            } else {
                const errorData = await response.json();
                toast.error(errorData.error || "Failed to fetch wishlist items");
            }
        } catch (error) {
            console.error("Error fetching wishlist:", error);
            toast.error("Something went wrong. Please try again.");
        } finally {
            setIsLoading(false);
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
                            href="/products"
                            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
                        >
                            Explore Products
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {wishlistItems.map((product) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                className="bg-white rounded-lg shadow-md overflow-hidden group"
                            >
                                <Link href={`/product/${product.id}`} className="block relative">
                                    <div className="aspect-w-3 aspect-h-4">
                                        <img
                                            src={product.images[0] || "/placeholder.jpg"}
                                            alt={product.name}
                                            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-200"
                                        />
                                    </div>
                                    {!product.inStock && (
                                        <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                                            Out of Stock
                                        </div>
                                    )}
                                </Link>
                                <div className="p-4">
                                    <Link href={`/product/${product.id}`}>
                                        <h3 className="text-lg font-medium text-gray-900 mb-2 hover:text-red-600 transition-colors">
                                            {product.name}
                                        </h3>
                                    </Link>
                                    <div className="flex items-baseline mb-2">
                                        <span className="text-xl font-bold text-red-600">₹{product.price}</span>
                                        {product.originalPrice > product.price && (
                                            <>
                                                <span className="ml-2 text-sm text-gray-500 line-through">
                                                    ₹{product.originalPrice}
                                                </span>
                                                <span className="ml-2 text-sm text-green-500">
                                                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% off
                                                </span>
                                            </>
                                        )}
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