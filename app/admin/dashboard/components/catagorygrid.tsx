import React from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const CategoryGrid = () => {

    const basePath = "/admin/dashboard";
    const categories = [
        { title: "Latest Collections", path: `${basePath}/category/latest-collection` },
        { title: "Lounge Wear", path: `${basePath}/category/lounge-wear` },
        { title: "Solid Wear Clothing", path: `${basePath}/category/solid-wear-clothing` },
        { title: "Plus Size Suits", path: `${basePath}/category/plus-size` },
        { title: "Indian Sarees", path: `${basePath}/category/indian-sarees` },
        { title: "Bedsheets", path: `${basePath}/category/bedsheets` },
        { title: "Traditional Suits", path: `${basePath}/category/traditional-suits` },
        { title: "Kurta Sets", path: `${basePath}/category/kurta-sets` },
        { title: "Indian Wear", path: `${basePath}/category/indian` },
        { title: "Western Wear", path: `${basePath}/category/western` },
        { title: "Festive Collection", path: `${basePath}/category/festive` },
        { title: "Traditional Sarees", path: `${basePath}/category/traditional-sarees` },
        { title: "Most Popular", path: `${basePath}/category/popular` },
        { title: "Trending Now", path: `${basePath}/category/trending` },
        { title: "Top Rated", path: `${basePath}/category/top-rated` },
        { title: "Customer Favorites", path: `${basePath}/category/favorites` },
        { title: "Premium Collection", path: `${basePath}/category/premium` },
        { title: "Cotton", path: `${basePath}/category/cotton` },
        { title: "Silk", path: `${basePath}/category/silk` },
        { title: "Chiffon", path: `${basePath}/category/chiffon` },
        { title: "Georgette", path: `${basePath}/category/georgette` },
        { title: "Premium Fabrics", path: `${basePath}/category/premium` },
        { title: "Clearance Sale", path: `${basePath}/category/clearance` },
        { title: "Season End", path: `${basePath}/category/season-end` },
        { title: "Bundle Deals", path: `${basePath}/category/bundles` },
        { title: "First Order Discount", path: `${basePath}/category/first-order` }
    ];

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-2xl font-bold mb-6">All Categories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {categories.map((category, index) => (
                    <Link
                        href={category.path}
                        key={index}
                        className="transform transition-transform hover:scale-105"
                    >
                        <Card className="hover:shadow-lg transition-shadow">
                            <CardContent className="p-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="font-medium text-lg text-gray-800">
                                            {category.title}
                                        </h3>
                                        <p className="text-sm text-gray-500 mt-1">
                                            Browse Collection
                                        </p>
                                    </div>
                                    <ArrowRight className="w-5 h-5 text-gray-400" />
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CategoryGrid;