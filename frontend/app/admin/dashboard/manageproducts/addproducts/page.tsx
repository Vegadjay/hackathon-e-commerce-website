"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast, Toaster } from 'react-hot-toast';
import {
    Plus,
    Save,
    ChevronDown,
    Truck,
    Box,
    Logs,
    Shirt
} from 'lucide-react';
import FileUploadInProductAdd from '@/components/FileUploadInProductAdd';

const SIZE_OPTIONS = [
    'XS', 'S', 'M', 'L', 'XL',
    '2XL', '3XL',
    '28', '30', '32', '34', '36', '38', '40',
    'Free Size'
];

const COLOR_OPTIONS = [
    'Red', 'Blue', 'Green', 'Black', 'White',
    'Navy Blue', 'Gray', 'Maroon', 'Purple',
    'Yellow', 'Pink', 'Orange'
];

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
    features: string[];
    description: string;
    chartData: { month: string; revenue: number }[];
}

const ProductCreationForm: React.FC = () => {
    const [productData, setProductData] = useState<ProductData>({
        name: '',
        price: 0,
        rating: 0,
        reviews: 0,
        inStock: 0,
        delivery: '',
        deliveryDate: '5 To 6 Working days',
        seller: 'Rajwadi Poshak Co.',
        color: [],
        category: '',
        model: '',
        size: [],
        images: [],
        features: [],
        description: '',
        chartData: []
    });

    const [isSizeDropdownOpen, setIsSizeDropdownOpen] = useState(false);
    const [isColorDropdownOpen, setIsColorDropdownOpen] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setProductData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const toggleSize = (size: string) => {
        setProductData(prev => {
            const currentSizes = prev.size;
            const newSizes = currentSizes.includes(size)
                ? currentSizes.filter(s => s !== size)
                : [...currentSizes, size];
            return { ...prev, size: newSizes };
        });
    };

    const toggleColor = (color: string) => {
        setProductData(prev => {
            const currentColors = prev.color;
            const newColors = currentColors.includes(color)
                ? currentColors.filter(c => c !== color)
                : [...currentColors, color];
            return { ...prev, color: newColors };
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        productData.inStock = parseInt(productData.inStock.toString(), 10);
        try {
            const response = await fetch('/api/product', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(productData)
            });

            if (response.ok) {
                const result = await response.json();
                toast.success('Product created successfully!');
            } else {
                const error = await response.json();
                toast.error(`Error: ${error.message}`);
            }
        } catch (error) {
            toast.error('Failed to create product');
        }
    };

    return (
        <div className="min-h-screen p-4 md:p-10">
            <Toaster position='top-right' />
            <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="max-w-5xl mx-auto bg-white shadow-2xl rounded-2xl p-8 space-y-6"
            >
                <h1 className="text-3xl font-bold text-red-800 mb-6 text-center">
                    Create New Product
                </h1>

                <div className="grid md:grid-cols-2 gap-4">
                    <div className="relative">
                        <input
                            type="text"
                            name="name"
                            value={productData.name}
                            onChange={handleInputChange}
                            placeholder="Product Name"
                            className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
                            required
                        />
                        <Plus className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-500" />
                    </div>
                    <div className="relative">
                        <input
                            type="number"
                            name="price"
                            value={productData.price}
                            onChange={handleInputChange}
                            placeholder="Price"
                            className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
                            required
                        />
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-500">₹</span>
                    </div>
                </div>

                <div className="relative">
                    <button
                        type="button"
                        onClick={() => setIsSizeDropdownOpen(!isSizeDropdownOpen)}
                        className="w-full p-3 border rounded-lg flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-red-300"
                    >
                        <span>
                            {productData.size.length > 0
                                ? productData.size.join(', ')
                                : 'Select Sizes'}
                        </span>
                        <ChevronDown className="text-red-500" />
                    </button>

                    {isSizeDropdownOpen && (
                        <div className="absolute z-10 w-full bg-white border rounded-lg shadow-lg mt-1 max-h-60 overflow-y-auto">
                            {SIZE_OPTIONS.map((size) => (
                                <div
                                    key={size}
                                    onClick={() => toggleSize(size)}
                                    className={`p-2 cursor-pointer hover:bg-red-50 
                    ${productData.size.includes(size) ? 'bg-red-100' : ''}`}
                                >
                                    {size}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="relative">
                    <button
                        type="button"
                        onClick={() => setIsColorDropdownOpen(!isColorDropdownOpen)}
                        className="w-full p-3 border rounded-lg flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-red-300"
                    >
                        <span>
                            {productData.color.length > 0
                                ? productData.color.join(', ')
                                : 'Select Colors'}
                        </span>
                        <ChevronDown className="text-red-500" />
                    </button>

                    {isColorDropdownOpen && (
                        <div className="absolute z-10 w-full bg-white border rounded-lg shadow-lg mt-1 max-h-60 overflow-y-auto">
                            {COLOR_OPTIONS.map((color) => (
                                <div
                                    key={color}
                                    onClick={() => toggleColor(color)}
                                    className={`p-2 cursor-pointer hover:bg-red-50 
                    ${productData.color.includes(color) ? 'bg-red-100' : ''}`}
                                >
                                    {color}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    <div className="relative">
                        <input
                            type="text"
                            name="delivery"
                            value={productData.delivery}
                            onChange={handleInputChange}
                            placeholder="Delivery Type"
                            className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
                        />
                        <Truck className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-500" />
                    </div>
                    <div className="relative">
                        <input
                            type="text"
                            name="category"
                            value={productData.category}
                            onChange={handleInputChange}
                            placeholder="Category"
                            className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
                        />
                        <Logs className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-500" />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="relative">
                        <input
                            type="number"
                            name="inStock"
                            value={productData.inStock}
                            onChange={handleInputChange}
                            placeholder="Stock"
                            className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
                        />
                        <Box className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-500" />
                    </div>
                    <div className="relative">
                        <input
                            type="text"
                            name="model"
                            value={productData.model}
                            onChange={handleInputChange}
                            placeholder="Product Model"
                            className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
                        />
                        <Shirt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-500" />
                    </div>
                </div>

                <FileUploadInProductAdd products={productData} setProductData={setProductData} />

                <div className="relative">
                    <textarea
                        name="description"
                        value={productData.description}
                        onChange={handleInputChange}
                        placeholder="Product Description"
                        className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300 min-h-[150px]"
                    />
                    <Plus className="absolute left-3 top-4 text-red-500" />
                </div>

                <div className="flex justify-center">
                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-2 bg-red-500 text-white rounded-lg flex items-center"
                    >
                        <Save className="mr-2" />
                        Save Product
                    </motion.button>
                </div>
            </motion.form>
        </div>
    );
};

export default ProductCreationForm;