'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export interface Product {
    _id: string;
    name: string;
    price: number;
    rating: number;
    reviews: number;
    inStock: number;
    delivery: string;
    deliveryDate: string;
    seller: string;
    color: string[];
    category: string;
    model: string;
    size: string[];
    images: string[];
    redirectLink: string; // Add the redirectLink field
}

const ProductGridComponent: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setIsLoading(true);
                const response = await fetch('/api/category');

                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }

                const result = await response.json();

                if (result?.data && Array.isArray(result.data)) {
                    setProducts(result.data);
                } else {
                    throw new Error('Invalid response format');
                }

                setError(null);
            } catch (err: any) {
                console.error('Fetch Error:', err);
                setError(err.message || 'Failed to fetch data.');
            } finally {
                setIsLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                        repeat: Infinity,
                        duration: 1,
                        ease: 'linear',
                    }}
                    className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"
                />
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center py-8 text-red-500">
                {error}
            </div>
        );
    }

    if (!Array.isArray(products) || products.length === 0) {
        return (
            <div className="text-center py-8 text-gray-500">
                No products available.
            </div>
        );
    }

    return (
        <motion.div
            className="container mx-auto px-4 py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => {
                    const redirectLink = product.redirectLink || '/404';

                    return (
                        <motion.div
                            key={product._id}
                            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col overflow-hidden"
                            whileHover={{ scale: 1.02 }}
                        >
                            {/* Updated Link to navigate using redirectLink */}
                            <Link href={redirectLink} className="relative w-full h-48 bg-gray-100">
                                <Image
                                    src={product.images[0] || '/placeholder.png'}
                                    alt={product.name}
                                    fill
                                    className="object-contain p-4"
                                />
                            </Link>
                            <div className="p-4 flex flex-col flex-1">
                                <Link href={redirectLink}>
                                    <h2 className="text-lg font-semibold mb-2 truncate">{product.name}</h2>
                                </Link>
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-xl font-bold">Rs. {product.price.toFixed(2)}</span>
                                    <div className="flex items-center">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                size={16}
                                                fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                                                className="text-yellow-500"
                                            />
                                        ))}
                                        <span className="text-sm text-gray-500 ml-1">({product.reviews})</span>
                                    </div>
                                </div>
                                <span className={`text-sm ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                                    {product.inStock > 0 ? 'In Stock' : 'Out of Stock'}
                                </span>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </motion.div>
    );
};

export default ProductGridComponent;
