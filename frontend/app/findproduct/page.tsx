'use client'

import React, { useState, useEffect } from "react"
import { FileUpload } from "@/components/ui/file-upload"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Loader from "@/components/Loader"

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
}

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
}

function FileUploadDemo() {
    const [files, setFiles] = useState<File[]>([])
    const [previewUrls, setPreviewUrls] = useState<string[]>([])
    const [recommendedProducts, setRecommendedProducts] = useState<any[]>([])
    const [productImagePaths, setProductImagePaths] = useState([])
    const [loading, setLoading] = useState<boolean>(false)

    const handleFileUpload = async (uploadedFiles: File[]) => {
        if (!uploadedFiles || uploadedFiles.length === 0) return
        setLoading(true)
        setFiles((prevFiles) => [...prevFiles, ...uploadedFiles])

        const urls = uploadedFiles.map((file) => URL.createObjectURL(file))
        setPreviewUrls((prevUrls) => [...prevUrls, ...urls])
        try {
            const formData = new FormData()
            formData.append("file", uploadedFiles[0])
            const python_url = process.env.NEXT_PUBLIC_PYTHON_URL
            const response = await fetch(`${python_url}/recommend`, {
                method: "POST",
                body: formData,
            })

            if (response.ok) {
                const data = await response.json()
                const paths = data.recommendations.map((path: string) => {
                    const cleanPath = path.replace("dataset\\", "")
                    return cleanPath
                })
                setProductImagePaths(paths)
                findProducts(data)
            } else {
                console.error("Error response:", await response.text())
            }
        } catch (error) {
            console.error("Fetch error:", error)
        }
    }

    const findProducts = async (files: any) => {
        setLoading(true)
        const updatedFiles = files.recommendations.map((file: any) =>
            file.replace("dataset\\", "")
        )
        setRecommendedProducts([])

        try {
            const productDetails = await Promise.all(
                updatedFiles.map(async (url: string) => {
                    const response = await fetch(`/api/product/find/${url}`)
                    if (response.ok) {
                        const data = await response.json()
                        return data.data
                    } else {
                        console.error("Error fetching product:", await response.text())
                        return null
                    }
                })
            )

            const validProducts = productDetails.filter((product) => product !== null)
            setRecommendedProducts(validProducts)
            setLoading(false)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="space-y-8 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="w-full border border-dashed bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 rounded-lg p-4">
                <FileUpload onChange={handleFileUpload} />

                <div className="mt-4">
                    <label
                        htmlFor="camera-input"
                        className="block text-center py-2 px-4 bg-blue-500 text-white rounded-lg cursor-pointer sm:hidden"
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
                                handleFileUpload(Array.from(e.target.files))
                            }
                        }}
                    />
                </div>
            </div>

            {previewUrls.length > 0 && (
                <div className="w-full">
                    <h2 className="text-xl font-semibold mb-4">Uploaded Images</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {previewUrls.map((url, index) => (
                            <div
                                key={index}
                                className="relative aspect-square rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700"
                            >
                                <Image
                                    src={url || "/placeholder.svg"}
                                    alt={`Uploaded image ${index + 1}`}
                                    layout="fill"
                                    objectFit="cover"
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
                    className="w-full"
                >
                    <h2 className="text-2xl font-semibold mb-6">Recommended Products</h2>
                    {loading ? (
                        <div className="flex justify-center items-center h-40">
                            <Loader />
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {recommendedProducts.map((product, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="flex flex-col rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                                >
                                    <Link href={`/product/${product._id}`} className="block w-full">
                                        <div className="relative aspect-square">
                                            <Image
                                                src={product.images[0] || "/placeholder.svg"}
                                                alt={`Product ${index + 1}`}
                                                layout="fill"
                                                objectFit="cover"
                                            />
                                        </div>
                                    </Link>
                                    <div className="p-4 flex-grow flex flex-col justify-between">
                                        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2 line-clamp-2">
                                            {product.name}
                                        </h3>
                                        <p className="text-xl font-bold text-gray-900 dark:text-gray-100">
                                            ₹{parseFloat(product.price.toString()).toFixed(2)}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </motion.div>
            )}
        </div>
    )
}

export default FileUploadDemo