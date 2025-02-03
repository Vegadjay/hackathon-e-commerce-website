'use client'
import React, { useState, useEffect } from "react";
import { Search, X, Layers, Repeat, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Compare } from "@/components/ui/compare";
import { products } from "@/lib/data";


interface Product {
    id: number;
    name: string;
    price: number;
    images: string[];
    size: string[];
    description?: string;
    features?: string[];
}

export function ProductSearchCompare() {
    const [searchQueries, setSearchQueries] = useState<[string, string]>(["", ""]);
    const [filteredProducts, setFilteredProducts] = useState<[Product[], Product[]]>([[], []]);
    const [selectedProducts, setSelectedProducts] = useState<[Product | null, Product | null]>([null, null]);
    const [dropdownVisibility, setDropdownVisibility] = useState<[boolean, boolean]>([false, false]);

    useEffect(() => {
        const pathname = decodeURIComponent(window.location.pathname);
        const match = pathname.match(/\/compare\/(.+)/);
        if (match) {
            const productName = match[1].replace(/-/g, " ");
            const foundProduct = products.find(product => product.name.toLowerCase() === productName.toLowerCase());
            if (foundProduct) {
                // @ts-ignore
                setSelectedProducts([foundProduct, null]);
            }
        }
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
            // @ts-ignore
            setDropdownVisibility((prev) => {
                const newDropdownVisibility = [...prev];
                newDropdownVisibility[index] = true;
                return newDropdownVisibility;
            });
        } else {
            const newFilteredProducts: [Product[], Product[]] = [...filteredProducts] as [Product[], Product[]];
            newFilteredProducts[index] = [];
            setFilteredProducts(newFilteredProducts);
            // @ts-ignore
            setDropdownVisibility((prev) => {
                const newDropdownVisibility = [...prev];
                newDropdownVisibility[index] = false;
                return newDropdownVisibility;
            });
        }
    };

    const handleProductSelect = (product: Product | null, index: number) => {
        const newSelectedProducts: [Product | null, Product | null] = [...selectedProducts] as [Product | null, Product | null];
        newSelectedProducts[index] = product;
        setSelectedProducts(newSelectedProducts);

        // @ts-ignore
        setDropdownVisibility((prev) => {
            const newDropdownVisibility = [...prev];
            newDropdownVisibility[index] = false;
            return newDropdownVisibility;
        });
    };

    const handleClearSearch = (index: number) => {
        const newSearchQueries: [string, string] = [...searchQueries] as [string, string];
        newSearchQueries[index] = "";
        setSearchQueries(newSearchQueries);

        const newFilteredProducts: [Product[], Product[]] = [...filteredProducts] as [Product[], Product[]];
        newFilteredProducts[index] = [];
        setFilteredProducts(newFilteredProducts);
        // @ts-ignore
        setDropdownVisibility((prev) => {
            const newDropdownVisibility = [...prev];
            newDropdownVisibility[index] = false;
            return newDropdownVisibility;
        });
    };

    const handleRemoveProduct = (index: number) => {
        const newSelectedProducts: [Product | null, Product | null] = [...selectedProducts];
        newSelectedProducts[index] = null;
        setSelectedProducts(newSelectedProducts);
    };

    const renderComparisonDetails = () => {
        if (!selectedProducts[0] || !selectedProducts[1]) return null;

        const product1 = selectedProducts[0];
        const product2 = selectedProducts[1];

        return (
            <div className="grid grid-cols-2 gap-8 mt-8 bg-white rounded-2xl shadow-lg p-8">
                {/* Comparison Grid */}
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-red-800 border-b pb-2">Product Details</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                            <h4 className="font-semibold text-red-700">{product1.name}</h4>
                            <img
                                src={product1.images[0]}
                                alt={product1.name}
                                className="w-full h-48 object-cover rounded-lg mt-2 shadow-md"
                            />
                            <p className="mt-2 text-red-600">Rs. {product1.price}</p>
                        </div>
                        <div className="text-center">
                            <h4 className="font-semibold text-red-700">{product2.name}</h4>
                            <img
                                src={product2.images[0]}
                                alt={product2.name}
                                className="w-full h-48 object-cover rounded-lg mt-2 shadow-md"
                            />
                            <p className="mt-2 text-red-600">Rs. {product2.price}</p>
                        </div>
                    </div>
                </div>

                {/* Specification Comparison */}
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-red-800 border-b pb-2">Specifications Comparison</h3>
                    <table className="w-full">
                        <tbody>
                            <tr className="border-b">
                                <td className="py-2 font-medium text-red-700">Price</td>
                                <td className="py-2 text-right">{product1.price}</td>
                                <td className="py-2 text-right">{product2.price}</td>
                            </tr>
                            <tr className="border-b">
                                <td className="py-2 font-medium text-red-700">Available Sizes</td>
                                <td className="py-2 text-right">{product1.size.join(", ")}</td>
                                <td className="py-2 text-right">{product2.size.join(", ")}</td>
                            </tr>
                            <tr>
                                <td className="py-2 font-medium text-red-700">Description</td>
                                <td className="py-2 text-right text-sm">{product1.description}</td>
                                <td className="py-2 text-right text-sm">{product2.description}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    };

    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-8 bg-gradient-to-br from-red-50 to-red-100 min-h-screen">
            {/* Title Section */}
            <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="flex justify-center items-center mb-4">
                    <Repeat className="w-8 h-8 text-red-600 mr-3" />
                    <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">
                        Product Comparison
                    </h1>
                </div>
                <p className="text-red-800 max-w-2xl mx-auto opacity-70">
                    Easily compare two products side by side. Search, select, and visualize the differences.
                </p>
            </motion.div>

            {/* Search Inputs */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                {[0, 1].map((index) => (
                    <div key={index} className="relative">
                        <motion.div
                            initial={{ scale: 0.95 }}
                            animate={{ scale: 1 }}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                            className="relative shadow-md rounded-lg"
                        >
                            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-400">
                                <Search className="h-5 w-5" />
                            </div>
                            <input
                                type="text"
                                placeholder={`Search Product ${index + 1}`}
                                value={searchQueries[index]}
                                onChange={(e) => handleSearch(e.target.value, index)}
                                className="w-full rounded-lg border-2 border-transparent pl-10 pr-10 py-3 text-sm 
                                    focus:outline-none focus:border-red-500 
                                    bg-white shadow-sm transition-all duration-300
                                    placeholder-red-300"
                            />
                            {searchQueries[index] && (
                                <X
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-red-400 cursor-pointer hover:text-red-600 transition-colors"
                                    onClick={() => handleClearSearch(index)}
                                />
                            )}
                        </motion.div>

                        <AnimatePresence>
                            {dropdownVisibility[index] && searchQueries[index] && filteredProducts[index]?.length > 0 && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="absolute z-20 w-full bg-white shadow-xl rounded-lg mt-2 border overflow-hidden"
                                >
                                    <div className="max-h-64 overflow-y-auto">
                                        {filteredProducts[index].map((product) => (
                                            <motion.div
                                                key={product.id}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                whileHover={{
                                                    backgroundColor: "rgb(254 226 226)",
                                                    scale: 1.02
                                                }}
                                                onClick={() => handleProductSelect(product, index)}
                                                className="p-3 cursor-pointer flex items-center space-x-4 hover:bg-red-50 transition-all"
                                            >
                                                <img
                                                    src={product.images[0]}
                                                    alt={product.name}
                                                    className="w-12 h-12 object-cover rounded-md shadow-sm"
                                                />
                                                <div className="flex-1">
                                                    <p className="font-semibold text-red-800">{product.name}</p>
                                                    <p className="text-sm text-red-600">Rs. {product.price}</p>
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

            {/* Selected Products Preview */}
            <motion.div
                className="flex justify-center items-center gap-16 mt-12 mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                {selectedProducts.map((product, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="relative group"
                    >
                        {product ? (
                            <div className="relative">
                                <div className="w-40 h-40 rounded-xl overflow-hidden shadow-lg relative">
                                    <img
                                        src={product.images[0]}
                                        alt={product.name}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div
                                        className="absolute top-2 right-2 bg-white/70 rounded-full p-1 
                                        opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                                        hover:bg-red-100 cursor-pointer"
                                        onClick={() => handleRemoveProduct(index)}
                                    >
                                        <X className="w-5 h-5 text-red-500" />
                                    </div>
                                </div>
                                <motion.div
                                    className="mt-3 text-center"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    <p className="font-semibold text-red-800 truncate max-w-40">{product.name}</p>
                                    <p className="text-sm text-red-600">Rs. {product.price}</p>
                                </motion.div>
                            </div>
                        ) : (
                            <div className="w-40 h-40 border-2 border-dashed border-red-300 rounded-xl 
                                flex items-center justify-center bg-red-50 hover:bg-red-100 transition-colors">
                                <Search className="w-8 h-8 text-red-400" />
                            </div>
                        )}
                    </motion.div>
                ))}
            </motion.div>

            {/* Visual and Detailed Comparison */}
            <AnimatePresence>
                {selectedProducts[0] && selectedProducts[1] && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                    >
                        {/* Visual Comparison */}
                        <div className="flex items-center justify-center mb-6">
                            <Layers className="w-6 h-6 text-red-600 mr-2" />
                            <h2 className="text-2xl fontbold text-red-800">Visual Comparison</h2>
                        </div>
                        <Compare
                            firstImage={selectedProducts[0].images[0]}
                            secondImage={selectedProducts[1].images[0]}
                            className="w-full max-w-5xl h-[700px] mx-auto rounded-2xl overflow-hidden shadow-2xl mb-8"
                            showHandlebar={true}
                            slideMode="hover"
                        />
                        {renderComparisonDetails()}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default ProductSearchCompare;