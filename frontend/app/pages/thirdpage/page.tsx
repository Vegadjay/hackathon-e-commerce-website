"use client";

import React, { useState } from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { products } from 'lib/data';
import { ParallaxScroll } from '@/components/ui/parallax-scroll';

interface Product {
    id: string | number;
    name: string;
    category: string;
    price: number;
    image: string;  // Add image property
}

interface CategoryFilterProps {
    products: Product[];
    onFilterChange: (filteredProducts: Product[]) => void;
}

export function CategoryFilter({ products, onFilterChange }: CategoryFilterProps) {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [filteredProducts, setFilteredProducts] = useState(products);

    // Extract all images from products for ParallaxScroll
    const productImages = products.map(product => product.image);

    const uniqueCategories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);

        // Filter products based on selected category
        const filtered = category === "All"
            ? products
            : products.filter((product) => product.category === category);

        setFilteredProducts(filtered);
        onFilterChange(filtered);
    };

    return (
        <div className="space-y-8">
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium">Filter by Category</h3>
                    {selectedCategory !== "All" && (
                        <button
                            onClick={() => handleCategoryChange("All")}
                            className="text-sm text-neutral-500 hover:text-neutral-700"
                        >
                            Reset
                        </button>
                    )}
                </div>

                <Select value={selectedCategory} onValueChange={handleCategoryChange}>
                    <SelectTrigger className="w-full bg-white hover:bg-gray-50">
                        <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                        {uniqueCategories.map((category) => (
                            <SelectItem
                                key={category}
                                value={category}
                                className="hover:bg-red-50 focus:bg-red-50 cursor-pointer"
                            >
                                {category}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>

                <div className="text-sm text-neutral-600">
                    {selectedCategory !== "All" && (
                        <p>Showing {selectedCategory} products</p>
                    )}
                </div>
            </div>

            {/* Display ParallaxScroll with filtered product images */}
            <div className="w-full">
                <ParallaxScroll
                    images={filteredProducts.map(product => product.image)}
                />
            </div>
        </div>
    );
}

// Example usage with proper images
const ExampleUsage = () => {
    // Sample products data with images
    const sampleProducts: Product[] = [
        {
            id: 1,
            name: "Product 1",
            category: "Category A",
            price: 100,
            image: "/path/to/image1.jpg"
        },
        {
            id: 2,
            name: "Product 2",
            category: "Category B",
            price: 200,
            image: "/path/to/image2.jpg"
        },
        // Add more products as needed
    ];

    const [filteredProducts, setFilteredProducts] = useState(sampleProducts);

    return (
        <div className="container mx-auto py-8">
            <CategoryFilter
                products={sampleProducts}
                onFilterChange={setFilteredProducts}
            />
        </div>
    );
};

export default CategoryFilter;