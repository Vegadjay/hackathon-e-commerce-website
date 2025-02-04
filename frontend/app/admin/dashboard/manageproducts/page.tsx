"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import {
    PlusCircle,
    Edit,
    Trash2,
    Box,
    MoveRight
} from 'lucide-react';

const ProductDashboard: React.FC = () => {
    const router = useRouter();

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const cards = [
        {
            title: 'Add New Product',
            description: 'Create a new product listing with details, images, and specifications',
            icon: PlusCircle,
            color: 'bg-green-500',
            hoverColor: 'hover:bg-green-600',
            path: '/admin/dashboard/manageproducts/addproducts',
            delay: 0
        },
        {
            title: 'Update Product',
            description: 'Modify existing product information, prices, and inventory',
            icon: Edit,
            color: 'bg-blue-500',
            hoverColor: 'hover:bg-blue-600',
            path: '/admin/dashboard/manageproducts/searchproduct',
            delay: 0.1
        },
        {
            title: 'Delete Product',
            description: 'Remove products that are no longer available',
            icon: Trash2,
            color: 'bg-red-500',
            hoverColor: 'hover:bg-red-600',
            path: '/admin/dashboard/manageproducts/deleteproduct',
            delay: 0.2
        }
    ];

    return (
        <div className="min-h-screen bg-gray-100">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white shadow-md"
            >
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center space-x-3">
                        <Box className="w-8 h-8 text-indigo-600" />
                        <h1 className="text-3xl font-bold text-gray-900">
                            Manage Products
                        </h1>
                    </div>
                </div>
            </motion.div>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cards.map((card, index) => {
                        const Icon = card.icon;

                        return (
                            <motion.div
                                key={card.title}
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: card.delay, duration: 0.5 }}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => router.push(card.path)}
                                className="cursor-pointer"
                            >
                                <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full transition-transform">
                                    <div className={`${card.color} p-6`}>
                                        <Icon className="w-12 h-12 text-white" />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                            {card.title}
                                        </h3>
                                        <p className="text-gray-600 mb-4">
                                            {card.description}
                                        </p>
                                        <div className={`flex items-center text-sm font-medium ${card.color.replace('bg-', 'text-')} group`}>
                                            Get Started
                                            <MoveRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </main>
        </div>
    );
};

export default ProductDashboard;