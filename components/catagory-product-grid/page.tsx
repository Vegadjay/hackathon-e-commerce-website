import React, { useEffect, useState } from 'react';
import Heading from '@/components/title/page';

const ProductGridComponent = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [allProducts, setAllProducts] = useState<any[]>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                setIsLoading(true);
                const response = await fetch(`/api/product/category/all`);
                const data = await response.json();
                setAllProducts(data.data || []);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchData();
    }, []);

    if (isLoading) {
        return <div className="text-center py-8">Loading...</div>;
    }

    if (allProducts.length === 0) {
        return <div className="text-center py-8">No products found.</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <Heading text={"All Products"} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {allProducts.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full"
                    >
                        <a href={`/product/${product.id}`} className="relative pt-[100%] bg-gray-50 block">
                            <img
                                src={product.images[0]}
                                alt={product.name}
                                className="absolute top-0 left-0 w-full h-full object-contain p-4"
                            />
                            {/* Sale badge */}
                            {product.sale && (
                                <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-semibold shadow-md">
                                    {product.sale} OFF
                                </div>
                            )}
                        </a>

                        <div className="p-4 flex flex-col flex-1">
                            <a href={`/product/${product.id}`} className="group">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-lg font-semibold truncate flex-1">
                                        {product.name}
                                    </h3>
                                </div>
                            </a>

                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-2">
                                    <span className="text-xl font-bold">Rs. {product.price.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductGridComponent;
