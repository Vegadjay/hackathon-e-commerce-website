"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    Trash2,
    AlertTriangle,
    X,
    Loader2,
    ArrowLeft
} from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';

interface ProductData {
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
    description: string;
}

const ProductDeletePage: React.FC = () => {
    const params = useParams();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const [isDeleting, setIsDeleting] = useState(false);
    const [productData, setProductData] = useState<ProductData | null>(null);

    useEffect(() => {
        const fetchProductData = async () => {
            try {
                const response = await fetch(`/api/products/${params.productId}`);
                if (response.ok) {
                    const data = await response.json();
                    setProductData(data);
                } else {
                    throw new Error('Failed to fetch product data');
                }
            } catch (error) {
                console.error('Error fetching product:', error);
                alert('Failed to load product data');
                router.push('/products');
            } finally {
                setIsLoading(false);
            }
        };

        if (params.productId) {
            fetchProductData();
        }
    }, [params.productId, router]);

    const handleDelete = async () => {
        if (!confirm('Are you absolutely sure you want to delete this product? This action cannot be undone.')) {
            return;
        }

        setIsDeleting(true);
        try {
            const response = await fetch(`/api/products/${params.productId}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                alert('Product deleted successfully!');
                router.push('/products');
            } else {
                const error = await response.json();
                throw new Error(error.message);
            }
        } catch (error) {
            console.error('Delete failed:', error);
            alert('Failed to delete product');
        } finally {
            setIsDeleting(false);
        }
    };

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-red-50">
                <div className="flex items-center space-x-2">
                    <Loader2 className="animate-spin text-red-600" />
                    <span className="text-red-600 font-medium">Loading product data...</span>
                </div>
            </div>
        );
    }

    if (!productData) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-red-50">
                <div className="text-red-600">Product not found</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-red-50 p-4 md:p-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto"
            >
                <button
                    onClick={() => router.push('/products')}
                    className="mb-6 flex items-center text-red-600 hover:text-red-700 transition-colors"
                >
                    <ArrowLeft className="mr-2" /> Back to Products
                </button>

                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                    <div className="bg-red-600 p-6">
                        <div className="flex items-center justify-center text-white">
                            <AlertTriangle className="w-12 h-12 mr-4" />
                            <h1 className="text-3xl font-bold">Delete Product</h1>
                        </div>
                    </div>

                    <div className="p-8">
                        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                            <p className="text-red-800 text-center">
                                Are you sure you want to delete this product? This action cannot be undone.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex flex-wrap gap-4">
                                {productData.images.map((image, index) => (
                                    <div key={index} className="w-24 h-24 rounded-lg overflow-hidden">
                                        <img
                                            src={image}
                                            alt={`Product ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-semibold text-gray-700">Product Details</h3>
                                    <div className="mt-2 space-y-2">
                                        <p><span className="text-gray-600">Name:</span> {productData.name}</p>
                                        <p><span className="text-gray-600">Price:</span> ₹{productData.price}</p>
                                        <p><span className="text-gray-600">Category:</span> {productData.category}</p>
                                        <p><span className="text-gray-600">Model:</span> {productData.model}</p>
                                        <p><span className="text-gray-600">Seller:</span> {productData.seller}</p>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-gray-700">Additional Information</h3>
                                    <div className="mt-2 space-y-2">
                                        <p><span className="text-gray-600">Stock:</span> {productData.inStock} units</p>
                                        <p><span className="text-gray-600">Colors:</span> {productData.color.join(', ')}</p>
                                        <p><span className="text-gray-600">Sizes:</span> {productData.size.join(', ')}</p>
                                        <p><span className="text-gray-600">Delivery:</span> {productData.delivery}</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="font-semibold text-gray-700">Description</h3>
                                <p className="mt-2 text-gray-600">{productData.description}</p>
                            </div>

                            <div className="flex justify-center space-x-4 pt-6">
                                <motion.button
                                    onClick={handleDelete}
                                    disabled={isDeleting}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`flex items-center px-6 py-3 rounded-lg ${isDeleting
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'bg-red-600 hover:bg-red-700'
                                        } text-white transition-colors`}
                                >
                                    {isDeleting ? (
                                        <>
                                            <Loader2 className="animate-spin mr-2" />
                                            Deleting...
                                        </>
                                    ) : (
                                        <>
                                            <Trash2 className="mr-2" />
                                            Delete Product
                                        </>
                                    )}
                                </motion.button>

                                <motion.button
                                    onClick={() => router.push('/products')}
                                    disabled={isDeleting}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center px-6 py-3 rounded-lg bg-gray-500 hover:bg-gray-600 text-white transition-colors"
                                >
                                    <X className="mr-2" />
                                    Cancel
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ProductDeletePage;