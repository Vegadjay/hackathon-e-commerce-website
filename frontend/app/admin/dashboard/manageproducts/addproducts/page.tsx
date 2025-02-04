"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Plus,
    ImagePlus,
    Trash2,
    Save,
    X,
    ChevronDown,
    Truck
} from 'lucide-react';
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"


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
        deliveryDate: '',
        seller: '',
        color: [],
        category: '',
        model: '',
        size: [],
        images: [],
        features: [],
        description: '',
        chartData: []
    });

    const [newColor, setNewColor] = useState('');
    const [newFeature, setNewFeature] = useState('');
    const [date, setDate] = React.useState<Date>()
    const [newChartData, setNewChartData] = useState({ month: '', revenue: 0 });
    const [imageFiles, setImageFiles] = useState<File[]>([]);
    const [imageError, setImageError] = useState('');

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

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);

        const totalImages = productData.images.length + files.length;

        if (totalImages > 4) {
            setImageError('You can upload a maximum of 4 images');
            return;
        }

        setImageError('');

        setImageFiles(prev => [...prev, ...files]);

        const imageUrls = files.map(file => URL.createObjectURL(file));
        setProductData(prev => ({
            ...prev,
            images: [...prev.images, ...imageUrls]
        }));
    };

    const removeImage = (imageToRemove: string) => {
        setProductData(prev => ({
            ...prev,
            images: prev.images.filter(image => image !== imageToRemove)
        }));
        setImageFiles(prev =>
            prev.filter(file => URL.createObjectURL(file) !== imageToRemove)
        );
        setImageError('');
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData();

        Object.keys(productData).forEach(key => {
            const value = productData[key as keyof ProductData];

            if (key === 'chartData' || key === 'color' || key === 'size' || key === 'features') {
                formData.append(key, JSON.stringify(value));
            } else if (value !== null && value !== undefined) {
                formData.append(key, String(value));
            }
        });

        imageFiles.forEach((file) => {
            formData.append(`images`, file);
        });

        try {
            const response = await fetch('/api/products', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                const result = await response.json();
                alert('Product created successfully!');
            } else {
                const error = await response.json();
                alert(`Error: ${error.message}`);
            }
        } catch (error) {
            console.error('Product creation failed:', error);
            alert('Failed to create product');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 p-4 md:p-10">
            <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl p-8 space-y-6"
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
                        className="w-full p-3 border rounded-lg flex items-center justify-between 
              focus:outline-none focus:ring-2 focus:ring-red-300"
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
                        className="w-full p-3 border rounded-lg flex items-center justify-between 
              focus:outline-none focus:ring-2 focus:ring-red-300"
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
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant={"outline"}
                                    className={cn(
                                        "w-[280px] gap-5 justify-start text-left font-normal",
                                        !date && "text-muted-foreground hover:bg-red-500 h-12 w-full"
                                    )}
                                >
                                    <CalendarIcon />
                                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>

                <div>
                    <label className="block mb-2 text-red-800 font-semibold">
                        Product Images (Max 4)
                    </label>

                    {imageError && (
                        <div className="text-red-600 mb-2 flex items-center">
                            <X className="mr-2 text-red-600" />
                            {imageError}
                        </div>
                    )}

                    <div className="flex items-center space-x-2 mb-2">
                        <input
                            type="file"
                            multiple
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="hidden"
                            id="image-upload"
                            disabled={productData.images.length >= 4}
                        />
                        <label
                            htmlFor="image-upload"
                            className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors ${productData.images.length >= 4
                                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                : 'bg-red-500 text-white hover:bg-red-600'
                                }`}
                        >
                            <ImagePlus className="mr-2" />
                            {productData.images.length >= 4 ? 'Max Images Reached' : 'Upload Images'}
                        </label>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {productData.images.map((image) => (
                            <div
                                key={image}
                                className="relative w-24 h-24 rounded-lg overflow-hidden shadow-md"
                            >
                                <img
                                    src={image}
                                    alt="Product"
                                    className="w-full h-full object-cover"
                                />
                                <button
                                    type="button"
                                    onClick={() => removeImage(image)}
                                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
                                >
                                    <Trash2 size={16} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

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
                        className="flex items-center bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
                    >
                        <Save className="mr-2" /> Create Product
                    </motion.button>
                </div>
            </motion.form>
        </div>
    );
};

export default ProductCreationForm;