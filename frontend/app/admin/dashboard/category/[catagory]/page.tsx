'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';
import { products } from '@/lib/data';
import Image from 'next/image';
import { Edit, Trash2, Filter, Download, MoreVertical, AlertTriangle } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Link from 'next/link';
import ProductDetail from '@/components/products/pieChartAdmin';

interface Product {
    id: number;
    name: string;
    sale?: string;
    price: number;
    rating: number;
    reviews: number;
    inStock: number;
    delivery: string;
    deliveryDate: string;
    seller: string;
    color?: string[];
    category: string;
    video?: string;
    model: string;
    size?: string[];
    images: string[];
    features: string[];
    description: string;
    chartData: ChartData[];
    stock: number;
    lastUpdated: string;
    status: 'active' | 'inactive' | 'out_of_stock';
}

interface ChartData {
    month: string;
    revenue: number;
}

const AdminCategoryDashboard = () => {
    const pathname = usePathname();
    const [categoryProducts, setCategoryProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [totalSales, setTotalSales] = useState(0);
    const [totalRevenue, setTotalRevenue] = useState(0);
    const [monthlySales, setMonthlySales] = useState<{ month: string; sales: number; }[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState<'price' | 'rating' | 'stock'>('price');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
    const [showLowStock, setShowLowStock] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState<string>('all');
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(9);

    const getCategoryFromPath = () => {
        const segments = pathname?.split('/') || [];
        return segments[segments.length - 1] || '';
    };

    const sizeCount: Record<string, number> = {};

    filteredProducts.forEach((product: any) => {
        if (product.size) {
            product.size.forEach((size: any) => {
                    sizeCount[size] = (sizeCount[size] || 0) + product.inStock;
            });
        }
    });


    const chartData = Object.entries(sizeCount).map(([size, count]) => ({
        name: size,
        value: count
    }));

    useEffect(() => {
        const categoryFromUrl = getCategoryFromPath();

        let filtered: Product[] = [];
        switch (categoryFromUrl) {
            case 'top-rated':
                // @ts-ignore
                filtered = products
                    .filter(product => product.rating >= 4.5)
                    .sort((a, b) => b.rating - a.rating);
                break;
            default:
                // @ts-ignore
                filtered = products.filter(
                    product => product.category.toLowerCase() === categoryFromUrl.toLowerCase()
                );
        }

        setCategoryProducts(filtered);
        setFilteredProducts(filtered);
        calculateStatistics(filtered);
    }, [pathname]);

    useEffect(() => {
        setCurrentPage(1);
    }, [filteredProducts]);

    const calculateStatistics = (products: Product[]) => {
        const sales = products.reduce((acc, product) => acc + product.reviews, 0);
        setTotalSales(sales);

        const revenue = products.reduce((acc, product) => {
            const productRevenue = product.chartData.reduce(
                (sum, data) => sum + data.revenue, 0
            );
            return acc + productRevenue;
        }, 0);
        setTotalRevenue(revenue);

        const monthlyData = new Map<string, number>();
        products.forEach(product => {
            product.chartData.forEach(data => {
                const current = monthlyData.get(data.month) || 0;
                monthlyData.set(data.month, current + data.revenue);
            });
        });

        const sortedMonthlyData = Array.from(monthlyData.entries())
            .map(([month, sales]) => ({ month, sales }))
            .sort((a, b) => {
                const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                return months.indexOf(a.month) - months.indexOf(b.month);
            });

        setMonthlySales(sortedMonthlyData);
    };

    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#D72638", "#8A2BE2"];

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const term = event.target.value.toLowerCase();
        setSearchTerm(term);

        let filtered = categoryProducts.filter(product =>
            product.name.toLowerCase().includes(term) ||
            product.model.toLowerCase().includes(term)
        );

        if (showLowStock) {
            filtered = filtered.filter(product => product.inStock < 10);
        }

        if (selectedStatus !== 'all') {
            filtered = filtered.filter(product => product.status === selectedStatus);
        }

        setFilteredProducts(filtered);
    };

    const handleSort = (type: 'price' | 'rating' | 'stock') => {
        setSortBy(type);
        const newOrder = sortOrder === 'asc' ? 'desc' : 'asc';
        setSortOrder(newOrder);

        const sorted = [...filteredProducts].sort((a, b) => {
            const compareValue = newOrder === 'asc' ? 1 : -1;
            return (a[type] - b[type]) * compareValue;
        });

        setFilteredProducts(sorted);
    };


    const exportData = () => {
        const csvContent = [
            ['ID', 'Name', 'Price', 'Stock', 'Rating', 'Status', 'Last Updated'].join(','),
            ...filteredProducts.map(product =>
                [
                    product.id,
                    `"${product.name}"`,
                    product.price,
                    product.inStock,
                    product.rating,
                    product.status,
                    product.lastUpdated
                ].join(',')
            )
        ].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `category_products_${new Date().toISOString()}.csv`;
        link.click();
    };

    const formatCategoryName = (category: string) => {
        return category.replace(/-/g, ' ').split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    // Calculate pagination
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8">
                    {/* Title Section */}
                    <div className="text-center sm:text-left w-full sm:w-auto">
                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">
                            {formatCategoryName(getCategoryFromPath())}
                        </h1>
                        <p className="text-gray-600 text-sm sm:text-base">
                            Managing {categoryProducts.length} products
                        </p>
                    </div>

                    {/* Buttons Section */}
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto mt-4 sm:mt-0">
                        <Button
                            onClick={exportData}
                            variant="outline"
                            className="text-black hover:text-white w-full sm:w-auto"
                        >
                            <Download className="mr-2 h-4 w-4" />
                            Export Data
                        </Button>
                        <Button className="text-white w-full sm:w-auto">
                            Add New Product
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Products</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{categoryProducts.length}</div>
                            <p className="text-xs text-muted-foreground">
                                +2 from last month
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{totalSales.toLocaleString()}</div>
                            <p className="text-xs text-muted-foreground">
                                +12.3% from last month
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">₹{totalRevenue.toLocaleString()}</div>
                            <p className="text-xs text-muted-foreground">
                                +8.1% from last month
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Low Stock Items</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                {categoryProducts.filter(p => p.stock < 10).length}
                            </div>
                            <p className="text-xs text-muted-foreground">
                                Requires attention
                            </p>
                        </CardContent>
                    </Card>
                </div>

                <div className="bg-white rounded-lg shadow p-6 mb-8">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-4">
                        <div className="flex-1">
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="w-full px-4 py-2 border rounded-lg"
                                value={searchTerm}
                                onChange={handleSearch}
                            />
                        </div>
                        <div className="flex gap-4">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline">
                                        <Filter className="mr-2 h-4 w-4" />
                                        Sort By
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem onClick={() => handleSort('price')} className='bg-white text-black hover:text-white'>
                                        Price {sortBy === 'price' && (sortOrder === 'asc' ? '↑' : '↓')}
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => handleSort('rating')} className='bg-white text-black hover:text-white'>
                                        Rating {sortBy === 'rating' && (sortOrder === 'asc' ? '↑' : '↓')}
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentProducts.map((product, index: number) => (
                        <>
                            <Link href={`/admin/dashboard/category/${product.category}/product/${product.id}`}>
                                <div key={`product-${product.id}-${index}`} className="bg-white rounded-lg shadow-md overflow-hidden">
                                    <div className="relative aspect-w-16 aspect-h-9">
                                        <div className="w-full h-96 relative">
                                            <Image
                                                src={product.images[0] || "/placeholder.svg"}
                                                alt={product.name}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                                                {product.name}
                                            </h3>
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" size="icon" className='text-black hover:text-white'>
                                                        <MoreVertical className="h-4 w-4 " />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    <DropdownMenuItem className='text-black hover:text-white'>
                                                        <Edit className="mr-2 h-4 w-4" />
                                                        Edit
                                                    </DropdownMenuItem>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem className="text-red-600 bg-white hover:bg-red-600 hover:text-white">
                                                        <Trash2 className="mr-2 h-4 w-4" />
                                                        Delete
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4 mb-4">
                                            <div>
                                                <p className="text-sm text-gray-500">Price</p>
                                                <p className="text-lg font-semibold">₹{product.price.toLocaleString()}</p>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500">Stock</p>
                                                <p className={`text-lg font-semibold ${product.inStock < 10 ? 'text-red-600' : 'text-green-600'}`}>
                                                    {product.inStock}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500">Rating</p>
                                                <p className="text-lg font-semibold">{product.rating.toFixed(1)}</p>
                                            </div>
                                        </div>
                                        {/* <div className="text-sm text-gray-500">
                                            Last updated: {product.lastUpdated}
                                        </div> */}
                                    </div>
                                </div>
                            </Link>
                        </>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>Monthly Revenue Trend</CardTitle>
                            <CardDescription>Revenue analysis over the past months</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="h-[400px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={monthlySales}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="month" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Line
                                            type="monotone"
                                            dataKey="sales"
                                            stroke="#4f46e5"
                                            strokeWidth={2}
                                            dot={{ r: 4 }}
                                            activeDot={{ r: 6 }}
                                            name="Monthly Revenue"
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>
                    </Card>

                    {/* <Card>
                        <CardHeader>
                            <CardTitle>Product Size Distribution</CardTitle>
                            <CardDescription>Overview of product sizes</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="h-[400px]">
                                <ResponsiveContainer width="100%" height={300}>
                                    <PieChart>
                                        <Pie
                                            data={chartData}
                                            cx="50%"
                                            cy="50%"
                                            labelLine={false}
                                            outerRadius={100}
                                            fill="#8884d8"
                                            dataKey="value"
                                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                        >
                                            {chartData.map((_, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                        <Legend />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>
                    </Card> */}
                    <ProductDetail products={filteredProducts}/>
                </div>

                {/* Low Stock Alert */}
                {categoryProducts.some(p => p.stock < 10) && (
                    <Alert variant="destructive" className="mt-8">
                        <AlertTriangle className="h-4 w-4" />
                        <AlertTitle>Low Stock Alert</AlertTitle>
                        <AlertDescription>
                            {categoryProducts.filter(p => p.stock < 10).length} products are running low on stock.
                            Please review and restock as needed.
                        </AlertDescription>
                    </Alert>
                )}

                {/* Pagination */}
                <div className="mt-8 flex justify-center">
                    <div className="flex gap-2">
                        <Button
                            variant="outline"
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </Button>
                        {[...Array(totalPages)].map((_, i) => (
                            <Button
                                key={i}
                                variant={currentPage === i + 1 ? "default" : "outline"}
                                onClick={() => setCurrentPage(i + 1)}
                                className='text-black hover:text-white'
                            >
                                {i + 1}
                            </Button>
                        ))}
                        <Button
                            variant="outline"
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminCategoryDashboard;