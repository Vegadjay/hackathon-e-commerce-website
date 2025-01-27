"use client";
import React, { useState, useEffect } from "react";
import { FileUpload } from "@/components/ui/file-upload";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Loader from "@/components/Loader";

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3,
            ease: "easeOut",
        },
    },
};

function FileUploadDemo() {
    const [files, setFiles] = useState<File[]>([]);
    const [previewUrls, setPreviewUrls] = useState<string[]>([]);
    const [recommendedProducts, setRecommendedProducts] = useState<any[]>([]);
    const [productImagePaths, setProductImagePaths] = useState([]);
    const [loading, setLoading] = useState<boolean>(false);

    const handleFileUpload = async (uploadedFiles: File[]) => {
        if (!uploadedFiles || uploadedFiles.length === 0) return;

        setFiles((prevFiles) => [...prevFiles, ...uploadedFiles]);

        const urls = uploadedFiles.map((file) => URL.createObjectURL(file));
        setPreviewUrls((prevUrls) => [...prevUrls, ...urls]);
        setLoading(true);
        try {
            const formData = new FormData();
            formData.append("file", uploadedFiles[0]);

            const response = await fetch("http://localhost:5000/recommend", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                const paths = data.recommendations.map((path: string) => {
                    const cleanPath = path.replace("converted\\", "");
                    return cleanPath;
                });
                setProductImagePaths(paths);
                findProducts(data);
            } else {
                console.error("Error response:", await response.text());
            }
        } catch (error) {
            console.error("Fetch error:", error);
        }
    };

    const findProducts = async (files: any) => {
        setLoading(true);
        const updatedFiles = files.recommendations.map((file: any) =>
            file.replace("converted\\", "")
        );
        setRecommendedProducts([]);

        try {
            const productDetails = await Promise.all(
                updatedFiles.map(async (url: string) => {
                    const response = await fetch(`/api/product/find/${url}`);
                    if (response.ok) {
                        const data = await response.json();
                        return data.data;
                    } else {
                        console.error("Error fetching product:", await response.text());
                        return null;
                    }
                })
            );

            const validProducts = productDetails.filter((product) => product !== null);
            setRecommendedProducts(validProducts);
            setLoading(false);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="space-y-8">
            <div className="w-full max-w-5xl mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
                <FileUpload onChange={handleFileUpload} />

                <div className="mt-4">
                    <label
                        htmlFor="camera-input"
                        className="block text-center py-2 px-4 bg-blue-500 text-white rounded-lg cursor-pointer"
                    >
                        Use Camera
                    </label>
                    <input
                        id="camera-input"
                        type="file"
                        accept="image/*"
                        capture="environment"
                        className="hidden"
                        onChange={(e) => {
                            if (e.target.files) {
                                handleFileUpload(Array.from(e.target.files));
                            }
                        }}
                    />
                </div>
            </div>

            {previewUrls.length > 0 && (
                <div className="w-full max-w-4xl mx-auto">
                    <h2 className="text-xl font-semibold mb-4">Uploaded Images</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {previewUrls.map((url, index) => (
                            <div
                                key={index}
                                className="relative aspect-square rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800"
                            >
                                <Image
                                    src={url}
                                    alt={`Uploaded image ${index + 1}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {productImagePaths.length > 0 && (
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="w-full max-w-5xl mx-auto"
                >
                    <h2 className="text-xl font-semibold mb-4">Recommended Products</h2>
                    {
                        loading ? <Loader /> :
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                                {recommendedProducts.map((product, index) => (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black flex flex-col items-center"
                                    >
                                        <Link href={`/product/${product._id}`} className="w-full">
                                            <div className="relative aspect-square rounded-lg overflow-hidden mb-3">
                                                <Image
                                                    src={`${product.images[0]}`}
                                                    alt={`Product ${index + 1}`}
                                                    width={300}
                                                    height={300}
                                                    className="object-cover w-full h-full"
                                                />
                                            </div>
                                        </Link>
                                        <p className="text-sm text-center text-black-600 dark:text-neutral-400 mb-1">
                                            {product.name}
                                        </p>
                                        <p className="text-sm text-center text-black-600 dark:text-neutral-400">
                                            Price: ₹{product.price}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>

                    }
                </motion.div>
            )}
        </div>
    );
}

export default FileUploadDemo;
