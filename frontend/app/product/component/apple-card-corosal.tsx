"use client";
import Image from "next/image";
import React from "react";
import { products } from "@/lib/data";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

interface ChartData {
    // Add chart data interface properties as needed
    // This should match your actual ChartData interface
}

interface Product {
    id: number;
    name: string | "";
    price: number;
    rating: number;
    reviews: number;
    answers: number;
    inStock: boolean;
    delivery: string;
    deliveryDate: string;
    seller: string;
    color?: string[];
    category: string;
    model: string;
    size?: string[];
    images: string[];
    features: string[];
    description: string;
    chartData: ChartData[];
}

export function AppleCardsCarouselDemo() {
    const cards = products.map((product: Product, index) => (
        <Card
            key={product.id}
            card={{
                category: product.category,
                title: product.name || product.model,
                src: product.images[0],
                content: <DummyContent product={product} />
            }}
            index={index}
        />
    ));

    return (
        <div className="w-full h-full py-20">
            <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
                Get to know your iSad.
            </h2>
            <Carousel items={cards} />
        </div>
    );
}

interface DummyContentProps {
    product: Product;
}

const DummyContent: React.FC<DummyContentProps> = ({ product }) => {
    return (
        <>
            {[...new Array(3).fill(1)].map((_, index) => {
                return (
                    <div
                        key={"dummy-content" + index}
                        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
                    >
                        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                            <span className="font-bold text-neutral-700 dark:text-neutral-200">
                                {product.name || product.model}
                            </span>{" "}
                            {product.description}
                        </p>
                        <Image
                            src={product.images[index % product.images.length]}
                            alt={`${product.name || product.model} - Image ${index + 1}`}
                            height="500"
                            width="500"
                            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
                        />
                    </div>
                );
            })}
        </>
    );
};