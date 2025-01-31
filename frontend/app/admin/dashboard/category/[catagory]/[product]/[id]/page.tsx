'use client';

import React, { useState } from 'react';
import { ProductChart } from './ProductChart';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { products } from '@/lib/data';
import { Edit2, Save, Trash, X } from 'lucide-react';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

// Mock customer data
const recentCustomers = [
    { id: 1, name: 'John Doe', date: '2024-01-15', amount: 299, avatar: '/avatars/01.png' },
    { id: 2, name: 'Sarah Smith', date: '2024-01-14', amount: 299, avatar: '/avatars/02.png' },
    { id: 3, name: 'Mike Johnson', date: '2024-01-13', amount: 299, avatar: '/avatars/03.png' },
    { id: 4, name: 'Emily Brown', date: '2024-01-12', amount: 299, avatar: '/avatars/04.png' },
];

interface PageProps {
    params: {
        id: string;
    };
}

export default function ProductDetails({ params }: PageProps) {
    const [product, setProduct] = useState(products.find(p => p.id.toString() === params.id));
    const [isEditing, setIsEditing] = useState(false);
    const [editedProduct, setEditedProduct] = useState<any>(product);

    if (!product) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <h1 className="text-2xl font-bold text-gray-900">Product not found</h1>
            </div>
        );
    }

    const handleEdit = () => {
        setIsEditing(true);
        setEditedProduct({ ...product });
    };

    const handleSave = () => {
        setProduct(editedProduct);
        setIsEditing(false);
        // Here you would typically make an API call to save the changes
    };

    const handleCancel = () => {
        setIsEditing(false);
        setEditedProduct(product);
    };

    return (
        <div className="p-6 max-w-7xl mx-auto">
            {/* Header with Edit Controls */}
            <div className="mb-8">
                <div className="flex justify-between items-center">
                    <div className="flex-1">
                        {isEditing ? (
                            <Input
                                value={editedProduct?.name}
                                onChange={(e) => setEditedProduct({ ...editedProduct, name: e.target.value })}
                                className="text-3xl font-bold"
                            />
                        ) : (
                            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
                        )}
                        <p className="text-gray-500 mt-2">Model: {product.model}</p>
                    </div>
                    <div className="flex gap-2">
                        {isEditing ? (
                            <>
                                <Button onClick={handleSave} className="flex items-center">
                                    <Save className="w-4 h-4 mr-2" />
                                    Save
                                </Button>
                                <Button onClick={handleCancel} variant="outline" className="flex items-center">
                                    <X className="w-4 h-4 mr-2" />
                                    Cancel
                                </Button>
                            </>
                        ) : (
                            <Button onClick={handleEdit} className="flex items-center text-white">
                                <Edit2 className="w-4 h-4 mr-2" />
                                Edit Product
                            </Button>
                        )}
                        {/* <Button onClick={handleEdit} className="flex items-center bg-red-600 text-white hover:text-red-600 hover:bg-white border-0 hover:border-2 border-gray-700">
                            <Trash className="w-4 h-4 mr-2" />
                            Delete
                        </Button> */}
                    </div>
                </div>
            </div>

            {/* Main Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-sm font-medium">Price</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {isEditing ? (
                            <Input
                                type="number"
                                value={editedProduct?.price}
                                onChange={(e) => setEditedProduct({ ...editedProduct, price: parseFloat(e.target.value) })}
                                className="text-2xl font-bold"
                            />
                        ) : (
                            <div className="text-2xl font-bold">
                                Rs. {product.price.toLocaleString()}
                                {product.sale && (
                                    <span className="ml-2 text-sm text-green-600 font-normal">
                                        {product.sale} OFF
                                    </span>
                                )}
                            </div>
                        )}
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-sm font-medium">Stock Status</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {isEditing ? (
                            <Input
                                type="number"
                                value={editedProduct?.inStock}
                                onChange={(e) => setEditedProduct({ ...editedProduct, stock: parseInt(e.target.value) })}
                                className="text-2xl font-bold"
                            />
                        ) : (
                            <div className="flex items-center gap-2">
                                <div className="text-2xl font-bold">{product.inStock}</div>
                                <Badge variant={product.inStock ? "default" : "destructive"}>
                                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                                </Badge>
                            </div>
                        )}
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-sm font-medium">Rating & Reviews</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{product.rating}/5</div>
                        <p className="text-sm text-gray-500">{product.reviews} reviews</p>
                    </CardContent>
                </Card>
            </div>

            {/* Sales Chart */}
            <Card className="mb-8">
                <CardHeader>
                    <CardTitle>Sales Performance</CardTitle>
                </CardHeader>
                <CardContent>
                    <ProductChart chartData={product.chartData} />
                </CardContent>
            </Card>

            {/* Recent Customers */}
            <Card className="mb-8">
                <CardHeader>
                    <CardTitle>Recent Customers</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {recentCustomers.map((customer) => (
                            <div key={customer.id} className="flex items-center justify-between p-4 border rounded-lg">
                                <div className="flex items-center gap-4">
                                    <Avatar>
                                        <AvatarFallback>
                                            {customer.name.split(' ').map(n => n[0]).join('')}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-medium">{customer.name}</p>
                                        <p className="text-sm text-gray-500">Purchased on {customer.date}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-medium">${customer.amount}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Product Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Product Details</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <dl className="space-y-4">
                            {isEditing ? (
                                <>
                                    <div>
                                        <dt className="font-medium text-gray-500">Description</dt>
                                        <Textarea
                                            value={editedProduct?.description}
                                            onChange={(e) => setEditedProduct({ ...editedProduct, description: e.target.value })}
                                            className="mt-1"
                                        />
                                    </div>
                                    <div>
                                        <dt className="font-medium text-gray-500">Category</dt>
                                        <Input
                                            value={editedProduct?.category}
                                            onChange={(e) => setEditedProduct({ ...editedProduct, category: e.target.value })}
                                            className="mt-1"
                                        />
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div>
                                        <dt className="font-medium text-gray-500">Category</dt>
                                        <dd className="mt-1 text-gray-900">{product.category}</dd>
                                    </div>
                                    <div>
                                        <dt className="font-medium text-gray-500">Seller</dt>
                                        <dd className="mt-1 text-gray-900">{product.seller}</dd>
                                    </div>
                                </>
                            )}
                            {product.color && (
                                <div>
                                    <dt className="font-medium text-gray-500">Available Colors</dt>
                                    <dd className="mt-1 text-gray-900 flex gap-2">
                                        {product.color.map((color) => (
                                            <Badge key={color} variant="outline">{color}</Badge>
                                        ))}
                                    </dd>
                                </div>
                            )}
                            {product.size && (
                                <div>
                                    <dt className="font-medium text-gray-500">Available Sizes</dt>
                                    <dd className="mt-1 text-gray-900 flex gap-2">
                                        {product.size.map((size) => (
                                            <Badge key={size} variant="outline">{size}</Badge>
                                        ))}
                                    </dd>
                                </div>
                            )}
                        </dl>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Features</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {isEditing ? (
                            <Textarea
                                value={editedProduct?.features.join('\n')}
                                onChange={(e) => setEditedProduct({
                                    ...editedProduct,
                                    features: e.target.value.split('\n')
                                })}
                                className="h-[200px]"
                            />
                        ) : (
                            <ul className="space-y-2">
                                {product.features.map((feature, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}