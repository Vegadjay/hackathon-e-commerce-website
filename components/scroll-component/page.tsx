"use client";
import React, { useEffect, useState } from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import Image from "next/image";
import Link from "next/link";

interface ProductData {
    id: string;
    name: string;
    description: string;
    price: number;
    images: string[];
}

interface HeroScrollProps {
    imageId: string;
    title: string;
    discription: string;
}

export function HeroScrollDemo({ imageId, title, discription }: HeroScrollProps): JSX.Element {
    const [productData, setProductData] = useState<ProductData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        const fetchProductData = async () => {
            try {
                setLoading(true);
                const response = await fetch(`/api/product/${imageId}`);

                if (!response.ok) {
                    throw new Error('Failed to fetch product data');
                }

                const data = await response.json();
                setProductData(data.data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
                console.error('Error fetching product data:', err);
            } finally {
                setLoading(false);
            }
        };

        if (imageId) {
            fetchProductData();
        }
    }, [imageId]);

    return (
        <div className="flex flex-col overflow-hidden">
            <ContainerScroll
                titleComponent={
                    <>
                        <h1 className="text-4xl font-semibold text-black dark:text-white">
                            Our high sell product <br />
                            <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                                Checkout Here
                            </span>
                        </h1>
                    </>
                }
            >
                {loading ? (
                    <div className="animate-pulse bg-gray-200 rounded-2xl w-full h-[720px]" />
                ) : error ? (
                    <div className="flex items-center justify-center h-[720px] bg-gray-100 rounded-2xl">
                        <p className="text-red-500">Error loading product image</p>
                    </div>
                ) : (
                    <Link href={`product/${imageId}`}>
                        <div className="relative w-full h-[720px]">
                            <Image
                                src={productData?.images?.[0] || `/detailphotos/${imageId}.1.jpg`}
                                alt={productData?.name || "product"}
                                fill
                                className="mx-auto rounded-2xl object-cover object-left-top"
                                draggable={false}
                                priority
                            />
                        </div>
                    </Link>
                )}
            </ContainerScroll>
        </div>
    );
}
