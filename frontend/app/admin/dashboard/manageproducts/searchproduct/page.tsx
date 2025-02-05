'use client'
import React, { useState, useEffect } from "react";
import { Search, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from 'next/navigation'

interface Product {
    _id: string;
    name: string;
    price: number;
    images: string[];
    size: string[];
    description?: string;
    features?: string[];
}

export function ProductSearch() {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [dropdownVisibility, setDropdownVisibility] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const router = useRouter();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const response = await fetch('/api/product');
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                setProducts(data.data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to fetch products');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const handleUpdate = (productId: string) => {
        setLoading(true);
        router.push(`/admin/dashboard/manageproducts/updateproducts/${productId}`);
    }

    useEffect(() => {
        if (searchQuery) {
            const filtered = products.filter((product) =>
                product.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts([]);
        }
    }, [searchQuery, products]);

    const handleSearch = (term: string) => {
        setSearchQuery(term);

        if (term.length > 0) {
            const filtered = products.filter((product) =>
                product.name.toLowerCase().includes(term.toLowerCase())
            );
            setFilteredProducts(filtered);
            setDropdownVisibility(true);
        } else {
            setFilteredProducts([]);
            setDropdownVisibility(false);
        }
    };

    const handleProductSelect = (product: Product) => {
        setSelectedProduct(product);
        setSearchQuery(product.name);
        setDropdownVisibility(false);
    };

    const handleClearSearch = () => {
        setSearchQuery("");
        setFilteredProducts([]);
        setDropdownVisibility(false);
    };

    if (loading && products.length === 0) {
        return (
            <div className="w-full max-w-6xl mx-auto px-4 py-8 bg-gradient-to-br from-red-50 to-red-100 min-h-screen flex items-center justify-center">
                <div className="text-red-600 text-xl">Loading products...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="w-full max-w-6xl mx-auto px-4 py-8 bg-gradient-to-br from-red-50 to-red-100 min-h-screen flex items-center justify-center">
                <div className="text-red-600 text-xl">Error: {error}</div>
            </div>
        );
    }

    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-8 bg-gradient-to-br from-red-50 to-red-100 min-h-screen flex flex-col justify-between">
            <div>
                <motion.div className="text-center mb-12" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                    <div className="flex justify-center items-center mb-4">
                        <Search className="w-8 h-8 text-red-600 mr-3" />
                        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">
                            Product Search
                        </h1>
                    </div>
                    <p className="text-red-800 max-w-2xl mx-auto opacity-70">
                        Search for a product and select it to view details.
                    </p>
                </motion.div>

                <motion.div className="relative" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }} className="relative shadow-md rounded-lg">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-400">
                            <Search className="h-5 w-5" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search Product"
                            value={searchQuery}
                            onChange={(e) => handleSearch(e.target.value)}
                            className="w-full rounded-lg border-2 border-transparent pl-10 pr-10 py-3 text-sm focus:outline-none focus:border-red-500 bg-white shadow-sm transition-all duration-300 placeholder-red-300"
                        />
                        {searchQuery && (
                            <X className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-red-400 cursor-pointer hover:text-red-600 transition-colors" onClick={handleClearSearch} />
                        )}
                    </motion.div>

                    <AnimatePresence>
                        {dropdownVisibility && searchQuery && filteredProducts.length > 0 && (
                            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="absolute z-20 w-full bg-white shadow-xl rounded-lg mt-2 border overflow-hidden">
                                <div className="max-h-64 overflow-y-auto">
                                    {filteredProducts.map((product) => (
                                        <motion.div key={product._id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileHover={{ backgroundColor: "rgb(254 226 226)", scale: 1.02 }} onClick={() => handleProductSelect(product)} className="p-3 cursor-pointer flex items-center space-x-4 hover:bg-red-50 transition-all">
                                            <img src={product.images[0]} alt={product.name} className="w-12 h-12 object-cover rounded-md shadow-sm" />
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
                </motion.div>

                {selectedProduct && (
                    <motion.div className="mt-12 text-center" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }}>
                        <div className="w-80 mx-auto">
                            <img src={selectedProduct.images[0]} alt={selectedProduct.name} className="w-full h-[30rem] object-cover rounded-xl shadow-lg" />
                            <h3 className="mt-4 text-2xl font-semibold text-red-800">{selectedProduct.name}</h3>
                            <p className="mt-2 text-lg text-red-600">Rs. {selectedProduct.price}</p>
                            <p className="mt-2 text-sm text-red-500">{selectedProduct.description}</p>
                        </div>
                    </motion.div>
                )}
            </div>
            <button
                className="mt-10 w-full bg-red-600 text-white py-3 rounded-lg shadow-md hover:bg-red-700 transition-all disabled:bg-red-300"
                onClick={() => selectedProduct && handleUpdate(selectedProduct._id)}
                disabled={!selectedProduct}
            >
                Update Product
            </button>
        </div>
    );
}

export default ProductSearch;