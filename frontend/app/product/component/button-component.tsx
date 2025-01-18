"use client";

import React, { useState } from "react";
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalTrigger,
} from "@/components/ui/animated-modal";
import { AnimatePresence, motion } from "framer-motion";
import { ShoppingBag, ShoppingCart, Check, CreditCard } from "lucide-react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

interface Product {
    id: string;
    name: string;
    price: number;
}

interface AddToCartModalProps {
    product: Product;
    quantity: number;
    selectedSize: string;
}

export function AddToCartModal({ product, quantity, selectedSize }: AddToCartModalProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const router = useRouter();

    const handleAddToCart = async () => {
        if (!product) {
            alert('Product not found');
            return;
        }


        const userId = Cookies.get('userId');
        if (!userId) {
            router.push('/login');
            return;
        }

        try {
            setIsLoading(true);
            const response = await fetch('/api/cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId,
                    products: [{
                        productId: product.id,
                        quantity,
                        price: product.price.toString(),
                        size: selectedSize,
                    }],
                    totalPrice: product.price * quantity
                }),
            });

            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.error || 'Failed to add to cart');
            }

            setIsSuccess(true);
            setTimeout(() => setIsSuccess(false), 2000);
        } catch (error) {
            console.error('Add to cart error:', error);
            alert('Failed to add to cart. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const buttonVariants = {
        hover: { scale: 1.02 },
        tap: { scale: 0.98 },
        initial: { scale: 1 }
    };

    const overlayVariants = {
        hover: { opacity: 0.2 },
        initial: { opacity: 0 }
    };

    return (
        <Modal>
            <ModalTrigger
                className="w-full relative overflow-hidden bg-black dark:bg-white 
                   dark:text-black text-white rounded-lg group/modal-btn 
                   h-12 transition-all duration-300"
                //@ts-ignore
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="relative w-full h-full overflow-hidden">
                    <motion.button
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        className="w-full relative overflow-hidden bg-transperent 
                            text-white items-center -p-10 rounded-lg h-12 transition-all duration-300"
                    >
                        <div className="relative w-full h-full items-center -mt-5 overflow-hidden">
                            <motion.div
                                className="absolute inset-0 flex items-center justify-center"
                                initial={{ x: 10 }}
                                animate={{ x: isHovered ? -500 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                Add to Cart
                            </motion.div>
                            <motion.div
                                className="absolute inset-0 flex items-center justify-center"
                                initial={{ x: 200 }}
                                animate={{ x: isHovered ? 0 : 300 }}
                                transition={{ duration: 0.3 }}
                            >
                                <img src="/animation_gifs/shopping-bags.png" alt="" height={30} width={30} />
                            </motion.div>
                        </div>
                    </motion.button>
                </div>
            </ModalTrigger>

            <ModalBody>
                <ModalContent>
                    <AnimatePresence mode="wait">
                        {isSuccess ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="flex flex-col items-center justify-center p-6"
                            >
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                    <Check className="w-8 h-8 text-green-500" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                    Added to Cart!
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400 text-center">
                                    {product.name} has been added to your cart successfully.
                                </p>
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="p-6"
                            >
                                <h4 className="text-lg md:text-2xl text-gray-900 dark:text-white font-bold text-center mb-6">
                                    Add to Cart
                                </h4>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600 dark:text-gray-300">Product:</span>
                                        <span className="font-medium">{product.name}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600 dark:text-gray-300">Quantity:</span>
                                        <span className="font-medium">{quantity}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600 dark:text-gray-300">Size:</span>
                                        <span className="font-medium">{selectedSize}</span>
                                    </div>
                                    <div className="flex justify-between items-center border-t pt-4">
                                        <span className="text-gray-600 dark:text-gray-300">Total:</span>
                                        <span className="font-bold text-lg">
                                            ₹{(product.price * quantity).toFixed(2)}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </ModalContent>
                <ModalFooter className="gap-4">
                    <motion.button
                        className="px-4 py-2 bg-gradient-to-r from-black to-gray-800 
                       dark:from-white dark:to-gray-200 text-white dark:text-black 
                       rounded-md text-sm w-full transition-all duration-300
                       disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg"
                        onClick={handleAddToCart}
                        disabled={isLoading}
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                    >
                        {isLoading ? (
                            <motion.div
                                className="flex items-center justify-center gap-2"
                                animate={{ opacity: [1, 0.5, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                <span>Adding...</span>
                            </motion.div>
                        ) : (
                            "Confirm"
                        )}
                    </motion.button>
                </ModalFooter>
            </ModalBody>
        </Modal>
    );
}

export function BuyNowButton({ product, quantity, selectedSize }: AddToCartModalProps) {
    const [isHovered, setIsHovered] = useState(false);
    const router = useRouter();

    const handleBuyNow = () => {
        if (!product) {
            alert("Product not found");
            return;
        }
        router.push(`/checkout?productId=${product.id}&quantity=${quantity}&size=${selectedSize}&price=${product.price}`);
    };

    return (
        <motion.button
            onClick={handleBuyNow}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="w-full relative overflow-hidden bg-green-500 hover:bg-green-600 
                 text-white rounded-lg h-12 transition-all duration-300"
        >
            <div className="relative w-full h-full overflow-hidden">
                <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ x: 10 }}
                    animate={{ x: isHovered ? -500 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    Buy Now
                </motion.div>
                <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ x: 200 }}
                    animate={{ x: isHovered ? 0 : 300 }}
                    transition={{ duration: 0.3 }}
                >
                    <img src="/animation_gifs/shop-now.png" alt="" height={30} width={30} />
                </motion.div>
            </div>
        </motion.button>
    );
}