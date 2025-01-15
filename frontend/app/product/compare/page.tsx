'use client'
import React, { useState, useEffect } from "react";
import { Search, X, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Compare } from "@/components/ui/compare";
import { products } from "@/lib/data";

// Define TypeScript interfaces
interface Product {
    id: number;
    name: string;
    price: number;
    images: string[];
    size: string[];
}

export function ProductSearchCompare() {
    const [searchQueries, setSearchQueries] = useState<[string, string]>(["", ""]);
    const [filteredProducts, setFilteredProducts] = useState<[Product[], Product[]]>([[], []]);
    const [selectedProducts, setSelectedProducts] = useState<[Product | null, Product | null]>([null, null]);
    const [currentPlaceholder, setCurrentPlaceholder] = useState(0);
    const [isAnimating, setIsAnimating] = useState(true);

    const placeholders = [
        ["Search first product...", "Search second product..."],
        ["Compare this...", "With this..."],
        ["Find first item...", "Find second item..."],
        ["Product one...", "Product two..."]
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(false);
            setTimeout(() => {
                setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length);
                setIsAnimating(true);
            }, 200);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const handleSearch = (term: string, index: number) => {
        const newSearchQueries: [string, string] = [...searchQueries] as [string, string];
        newSearchQueries[index] = term;
        setSearchQueries(newSearchQueries);

        if (term.length > 0) {
            const filtered = products.filter((product) =>
                product.name.toLowerCase().includes(term.toLowerCase())
            );
            const newFilteredProducts: [Product[], Product[]] = [...filteredProducts] as [Product[], Product[]];
            // @ts-ignore
            newFilteredProducts[index] = filtered;
            setFilteredProducts(newFilteredProducts);
        } else {
            const newFilteredProducts: [Product[], Product[]] = [...filteredProducts] as [Product[], Product[]];
            newFilteredProducts[index] = [];
            setFilteredProducts(newFilteredProducts);
        }
    };

    // Handle product selection
    const handleProductSelect = (product: Product | null, index: number) => {
        const newSelectedProducts: [Product | null, Product | null] = [...selectedProducts] as [Product | null, Product | null];
        newSelectedProducts[index] = product;
        setSelectedProducts(newSelectedProducts);

        const newSearchQueries: [string, string] = [...searchQueries] as [string, string];
        newSearchQueries[index] = "";
        setSearchQueries(newSearchQueries);

        const newFilteredProducts: [Product[], Product[]] = [...filteredProducts] as [Product[], Product[]];
        newFilteredProducts[index] = [];
        setFilteredProducts(newFilteredProducts);
    };

    // Handle product removal
    const removeProduct = (index: number) => {
        const newSelectedProducts: [Product | null, Product | null] = [...selectedProducts] as [Product | null, Product | null];
        newSelectedProducts[index] = null;
        setSelectedProducts(newSelectedProducts);
    };

    return (
        <div className="w-full max-w-4xl mx-auto p-4 space-y-6">
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {[0, 1].map((index) => (
                    <div key={index} className="relative">
                        <motion.div
                            initial={{ scale: 0.95 }}
                            animate={{ scale: 1 }}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                            className="relative"
                        >
                            <Search className="absolute left-2 top-2.5 h-4 w-4 text-neutral-500" />
                            <input
                                type="text"
                                value={searchQueries[index]}
                                onChange={(e) => handleSearch(e.target.value, index)}
                                className="w-full rounded-md border pl-8 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                disabled={selectedProducts[index] !== null}
                            />
                            <AnimatePresence mode="wait">
                                {!searchQueries[index] && (
                                    <motion.span
                                        key={currentPlaceholder}
                                        initial={{ y: 10, opacity: 0 }}
                                        animate={isAnimating ? { y: 0, opacity: 0.5 } : { y: -10, opacity: 0 }}
                                        exit={{ y: -10, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="pointer-events-none absolute left-8 top-2 text-sm text-neutral-400"
                                    >
                                        {placeholders[currentPlaceholder][index]}
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </motion.div>

                        <AnimatePresence>
                            {searchQueries[index] && filteredProducts[index]?.length > 0 && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="absolute z-10 w-full bg-white shadow-lg rounded-md mt-1 border"
                                >
                                    <div className="p-2 space-y-1">
                                        {filteredProducts[index].map((product) => (
                                            <motion.div
                                                key={product.id}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                whileHover={{ backgroundColor: "rgb(243 244 246)", scale: 1.02 }}
                                                onClick={() => handleProductSelect(product, index)}
                                                className="p-2 rounded cursor-pointer flex items-center space-x-2"
                                            >
                                                <img
                                                    src={product.images[0]}
                                                    alt={product.name}
                                                    className="w-10 h-10 object-cover rounded"
                                                />
                                                <div className="flex flex-col">
                                                    <span className="font-medium">{product.name}</span>
                                                    <span className="text-sm text-gray-500">${product.price}</span>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </motion.div>

            <motion.div
                className="flex gap-6 sm:gap-12 md:gap-28 justify-center items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                {selectedProducts.map((product, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="relative"
                    >
                        {product ? (
                            <>
                                <div className="w-32 h-32 relative group">
                                    <img
                                        src={product.images[0]}
                                        alt={product.name}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                    <motion.div
                                        className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 rounded-lg flex items-center justify-center"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <button
                                            onClick={() => removeProduct(index)}
                                            className="bg-red-500 text-white rounded-full p-1.5 hover:bg-red-600 transition-colors"
                                        >
                                            <X className="w-4 h-4" />
                                        </button>
                                    </motion.div>
                                </div>
                                <motion.div
                                    className="mt-2 text-center"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    <p className="text-sm font-medium truncate">{product.name}</p>
                                    <p className="text-sm text-gray-500">Rs. {product.price}</p>
                                </motion.div>
                            </>
                        ) : (
                            <div className="w-32 h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                                <Search className="w-6 h-6 text-gray-400" />
                            </div>
                        )}
                        {index === 0 && (
                            <motion.div
                                className="absolute -right-8 top-1/2 transform -translate-y-1/2"
                                animate={{ x: [-5, 5, -5] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                            >
                                <ArrowRight className="w-6 h-6 text-gray-400" />
                            </motion.div>
                        )}
                    </motion.div>
                ))}
            </motion.div>

            <AnimatePresence>
                {selectedProducts[0] && selectedProducts[1] && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="mt-8"
                    >
                        <Compare
                            firstImage={selectedProducts[0].images[0]}
                            secondImage={selectedProducts[1].images[0]}
                            className="w-full max-w-2xl h-screen mx-auto rounded-lg overflow-hidden shadow-lg"
                            showHandlebar={true}
                            slideMode="hover"
                        />

                        <Compare
                            firstImage={selectedProducts[0].images[0]}
                            secondImage={selectedProducts[1].images[0]}
                            className="w-full mt-36 max-w-2xl h-screen mx-auto rounded-lg overflow-hidden shadow-lg"
                            showHandlebar={true}
                            slideMode="hover"
                            autoplay={true}
                        />

                        <motion.div
                            className="mt-6 grid grid-cols-2 gap-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            {selectedProducts.map((product, index) => (
                                <motion.div
                                    key={index}
                                    className="text-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 + index * 0.1 }}
                                >
                                    <h3 className="font-medium">{product?.name}</h3>
                                    <p className="text-gray-600">Rs. {product?.price}</p>
                                    <p className="text-sm text-gray-500">
                                        Size: {Array.isArray(product?.size) ? product.size.join(", ") : "N/A"}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default ProductSearchCompare;