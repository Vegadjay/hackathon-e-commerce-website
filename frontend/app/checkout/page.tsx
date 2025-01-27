'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { ShoppingBag, CreditCard, Truck, Clock } from 'lucide-react';

interface CheckoutParams {
    productId: string;
    quantity: number;
    size: string;
    price: number;
}

const CheckoutPage = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [params, setParams] = useState<CheckoutParams | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Extract parameters from `searchParams`
        const productId = searchParams.get('productId');
        const quantity = searchParams.get('quantity');
        const size = searchParams.get('size');
        const price = searchParams.get('price');

        if (productId && quantity && size && price) {
            setParams({
                productId,
                quantity: parseInt(quantity, 10),
                size,
                price: parseFloat(price),
            });
            setLoading(false);
        } else {
            console.error('Missing required query parameters.');
            router.push('/error');  
        }
    }, [searchParams, router]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <motion.div
                    className="text-2xl text-gray-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    Loading checkout...
                </motion.div>
            </div>
        );
    }

    const subtotal = params ? params.price * params.quantity : 0;
    const shippingCost = 100;
    const tax = subtotal * 0.18;
    const total = subtotal + shippingCost + tax;

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <motion.div
                className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="p-8">
                    <motion.h1
                        className="text-3xl font-bold mb-8 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Checkout Details
                    </motion.h1>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Order Summary */}
                        <motion.div
                            className="space-y-6"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h2 className="text-xl font-semibold mb-4 flex items-center">
                                    <ShoppingBag className="mr-2" />
                                    Order Summary
                                </h2>
                                <div className="space-y-3 text-gray-600">
                                    <div className="flex justify-between">
                                        <span>Product ID:</span>
                                        <span className="font-medium">{params?.productId}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Size:</span>
                                        <span className="font-medium">{params?.size}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Quantity:</span>
                                        <span className="font-medium">{params?.quantity}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Price per item:</span>
                                        <span className="font-medium">₹{params?.price.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h2 className="text-xl font-semibold mb-4 flex items-center">
                                    <Truck className="mr-2" />
                                    Delivery Details
                                </h2>
                                <div className="space-y-2 text-gray-600">
                                    <div className="flex items-center">
                                        <Clock className="w-4 h-4 mr-2" />
                                        <span>Expected delivery: 3-5 business days</span>
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        Standard shipping will be applied
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Payment Summary */}
                        <motion.div
                            className="space-y-6"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h2 className="text-xl font-semibold mb-4 flex items-center">
                                    <CreditCard className="mr-2" />
                                    Payment Details
                                </h2>
                                <div className="space-y-3">
                                    <div className="flex justify-between text-gray-600">
                                        <span>Subtotal:</span>
                                        <span className="font-medium">₹{subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600">
                                        <span>Shipping:</span>
                                        <span className="font-medium">₹{shippingCost.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600">
                                        <span>Tax (18%):</span>
                                        <span className="font-medium">₹{tax.toFixed(2)}</span>
                                    </div>
                                    <div className="h-px bg-gray-200 my-4"></div>
                                    <div className="flex justify-between text-lg font-bold">
                                        <span>Total:</span>
                                        <span>₹{total.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>

                            <motion.button
                                className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Proceed to Payment
                            </motion.button>

                            <p className="text-sm text-gray-500 text-center mt-4">
                                By proceeding, you agree to our terms and conditions
                            </p>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default CheckoutPage;
