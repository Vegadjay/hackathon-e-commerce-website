'use client'
import React, { useEffect, useState } from 'react';
import { Package, Plus, Search, Edit, Trash2, AlertCircle, ImageOff, SlidersHorizontal } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Loader from '@/components/Loader';
import { toast, Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';

interface Product {
    _id: string;
    name: string;
    price: number;
    category: string;
    stock: number;
    images: string[];
    description: string;
}

type PriceFilterOption = 'all' | 'low' | 'medium' | 'high';

const ManageProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [showFilters, setShowFilters] = useState(false);
    const [selectedPriceRange, setSelectedPriceRange] = useState<PriceFilterOption>('all');
    const [priceRanges, setPriceRanges] = useState<{ low: number; medium: number; high: number }>({
        low: 0,
        medium: 0,
        high: 0
    });
    const router = useRouter();

    useEffect(() => {
        fetchProducts();
    }, []);

    useEffect(() => {
        if (products.length > 0) {
            const prices = products.map(p => p.price);
            const maxPrice = Math.max(...prices);
            setPriceRanges({
                low: maxPrice / 3,
                medium: (maxPrice / 3) * 2,
                high: maxPrice
            });
        }
    }, [products]);

    const fetchProducts = async () => {
        try {
            const response = await fetch('/api/product');
            if (!response.ok) throw new Error('Failed to fetch products');
            const result = await response.json();
            if (result.success && result.data) {
                setProducts(result.data);
            } else {
                throw new Error('Invalid response format');
            }
        } catch (err: any) {
            console.error('Error fetching products:', err);
            setError(err.message || 'Failed to load products');
        } finally {
            setIsLoading(false);
        }
    };

    const handleAddProduct = () => {
        router.push('/admin/dashboard/products/add');
    };

    const handleEditProduct = (productId: string) => {
        setIsLoading(true);
        router.push(`/admin/dashboard/manageproducts/updateproducts/${productId}`);
    };

    const handleDeleteProduct = async (productId: string) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            try {
                const response = await fetch(`/api/product/${productId}`, {
                    method: 'DELETE',
                });
                if (!response.ok) throw new Error('Failed to delete product');
                const result = await response.json();
                if (result.success) {
                    setProducts(products.filter(product => product._id !== productId));
                    toast.success('Product Deleted successfully!');
                }
            } catch (err: any) {
                console.error('Error deleting product:', err);
                setError(err.message || 'Failed to delete product');
                toast.error('Some error is occur');
            }
        }
    };

    const getStatusStyle = (status: string) => {
        switch (status) {
            case 'In Stock':
                return 'bg-green-100 text-green-800';
            case 'Low Stock':
                return 'bg-yellow-100 text-yellow-800';
            case 'Out of Stock':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const resetFilters = () => {
        setSelectedPriceRange('all');
        setSearchQuery('');
    };

    const filterProductsByPrice = (product: Product) => {
        switch (selectedPriceRange) {
            case 'low':
                return product.price <= priceRanges.low;
            case 'medium':
                return product.price > priceRanges.low && product.price <= priceRanges.medium;
            case 'high':
                return product.price > priceRanges.medium;
            default:
                return true;
        }
    };

    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.category.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesPrice = filterProductsByPrice(product);
        return matchesSearch && matchesPrice;
    });

    if (isLoading) return <Loader />;

    return (
        <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
            <Toaster position="top-right" />
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <h1 className="text-2xl font-bold text-gray-900">Manage Products</h1>
                <button
                    onClick={handleAddProduct}
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                >
                    <Plus className="w-4 h-4" />
                    <span>Add Product</span>
                </button>
            </div>

            <Card className="bg-white shadow-sm">
                <CardContent className="py-4 px-4 space-y-4">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className="flex items-center space-x-2 px-4 py-2 text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                            <SlidersHorizontal className="w-4 h-4" />
                            <span className="text-sm">Filters</span>
                        </button>
                    </div>

                    {showFilters && (
                        <div className="pt-4 border-t border-gray-100">
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-sm font-medium text-gray-700 mb-2">Price Range</h3>
                                    <div className="flex flex-wrap gap-2">
                                        <button
                                            onClick={() => setSelectedPriceRange('all')}
                                            className={`px-4 py-2 rounded-md text-sm ${selectedPriceRange === 'all'
                                                ? 'bg-blue-600 text-white'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                                }`}
                                        >
                                            All Prices
                                        </button>
                                        <button
                                            onClick={() => setSelectedPriceRange('low')}
                                            className={`px-4 py-2 rounded-md text-sm ${selectedPriceRange === 'low'
                                                ? 'bg-blue-600 text-white'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                                }`}
                                        >
                                            Low (₹0 - ₹{priceRanges.low.toLocaleString('en-IN')})
                                        </button>
                                        <button
                                            onClick={() => setSelectedPriceRange('medium')}
                                            className={`px-4 py-2 rounded-md text-sm ${selectedPriceRange === 'medium'
                                                ? 'bg-blue-600 text-white'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                                }`}
                                        >
                                            Medium (₹{(priceRanges.low + 1).toLocaleString('en-IN')} - ₹{priceRanges.medium.toLocaleString('en-IN')})
                                        </button>
                                        <button
                                            onClick={() => setSelectedPriceRange('high')}
                                            className={`px-4 py-2 rounded-md text-sm ${selectedPriceRange === 'high'
                                                ? 'bg-blue-600 text-white'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                                }`}
                                        >
                                            High ({'>'}₹{priceRanges.medium.toLocaleString('en-IN')})
                                        </button>
                                    </div>
                                </div>

                                <div className="flex justify-end">
                                    <button
                                        onClick={resetFilters}
                                        className="text-sm text-blue-600 hover:text-blue-700"
                                    >
                                        Reset Filters
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>

            {error && (
                <Card className="bg-red-50 border-red-200">
                    <CardContent className="p-3 flex items-center space-x-2">
                        <AlertCircle className="w-4 h-4 text-red-500" />
                        <p className="text-sm text-red-500">{error}</p>
                    </CardContent>
                </Card>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                    <Card key={product._id} className="flex flex-col bg-white overflow-hidden hover:shadow-lg transition-shadow duration-200">
                        <div className="relative w-full pt-[75%] bg-gray-100">
                            {product.images && product.images[0] ? (
                                <Image
                                    src={product.images[0]}
                                    alt={product.name}
                                    fill
                                    className="absolute inset-0 object-cover"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <ImageOff className="w-8 h-8 text-gray-400" />
                                </div>
                            )}
                        </div>
                        <CardContent className="flex-1 p-4 space-y-3">
                            <div>
                                <div className="flex items-start justify-between gap-2">
                                    <h3 className="text-sm font-semibold text-gray-900 line-clamp-1">{product.name}</h3>
                                    {/* @ts-ignore */}
                                    <span className={`shrink-0 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${getStatusStyle(product.status)}`}>
                                        {/* @ts-ignore */}
                                        {product.status}
                                    </span>
                                </div>
                                <p className="text-xs text-gray-600 mt-1">{product.category}</p>
                            </div>


                            {product.description && (
                                <p className="text-xs text-gray-600 line-clamp-2">{product.description}</p>
                            )}

                            <div className="flex justify-end items-center space-x-2 pt-2 border-t border-gray-100">
                                <button
                                    onClick={() => handleEditProduct(product._id)}
                                    className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                                    title="Edit product"
                                >
                                    <Edit className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => handleDeleteProduct(product._id)}
                                    className="p-1.5 text-red-600 hover:bg-red-50 rounded-md transition-colors"
                                    title="Delete product"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {filteredProducts.length === 0 && (
                <Card className="bg-gray-50">
                    <CardContent className="py-12 px-4 text-center">
                        <Package className="w-10 h-10 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">No Products Found</h3>
                        <p className="text-sm text-gray-600 max-w-md mx-auto">
                            {searchQuery || selectedPriceRange !== 'all'
                                ? "No products match your search criteria. Try adjusting your filters."
                                : "Start by adding your first product."}
                        </p>
                    </CardContent>
                </Card>
            )}
        </div>
    );
};

export default ManageProducts;