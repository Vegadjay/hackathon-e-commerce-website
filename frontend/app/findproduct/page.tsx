'use client'

import React, { useState, useEffect, useRef } from "react"
import { FileUpload } from "@/components/ui/file-upload"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Loader from "@/components/Loader"
import { Button } from "@/components/ui/button"
import { Camera, X, Upload, Sparkles } from 'lucide-react'
import { toast, Toaster } from 'react-hot-toast'

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
    const [showCamera, setShowCamera] = useState<boolean>(false)
    const videoRef = useRef<HTMLVideoElement>(null)
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        if (showCamera) {
            startCamera()
        } else {
            stopCamera()
        }
    }, [showCamera])

    const startCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
            if (videoRef.current) {
                videoRef.current.srcObject = stream
            }
        } catch (err) {
            console.error("Error accessing camera:", err)
            toast.error("Failed to access camera")
        }
    }

    const stopCamera = () => {
        if (videoRef.current && videoRef.current.srcObject) {
            const tracks = (videoRef.current.srcObject as MediaStream).getTracks()
            tracks.forEach(track => track.stop())
        }
    }

    const captureImage = () => {
        if (videoRef.current && canvasRef.current) {
            const context = canvasRef.current.getContext('2d')
            if (context) {
                canvasRef.current.width = videoRef.current.videoWidth
                canvasRef.current.height = videoRef.current.videoHeight
                context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height)
                canvasRef.current.toBlob((blob) => {
                    if (blob) {
                        const file = new File([blob], "captured_image.jpg", { type: "image/jpeg" })
                        handleFileUpload([file])
                    }
                }, 'image/jpeg')
            }
        }
        setShowCamera(false)
    }

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
                toast.success("AI model successfully processed your image!")
            } else {
                console.error("Error response:", await response.text())
                toast.error("Failed to process image")
            }
        } catch (error) {
            console.error("Fetch error:", error)
            toast.error("An error occurred while processing your request")
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
            toast.error("Failed to fetch product recommendations")
        }
    }

    return (
        <div className="space-y-8 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-screen">
            <Toaster position="top-right" />
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full border-2 border-dashed bg-white dark:bg-gray-800 border-red-300 dark:border-red-600 rounded-lg p-8 shadow-lg"
            >
                <h1 className="text-3xl font-bold mb-4 text-center text-red-700 dark:text-red-300">Find Similar Clothes</h1>
                <p className="text-center mb-6 text-gray-600 dark:text-gray-300">Upload an image or use your camera to find similar clothing items using our AI-powered model</p>
                <div className="flex items-center justify-center mb-4">
                    <Sparkles className="w-6 h-6 text-yellow-500 mr-2" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">Powered by AI</span>
                </div>
                <FileUpload onChange={handleFileUpload} />

                <div className="mt-6 sm:hidden">
                    <Button
                        onClick={() => setShowCamera(true)}
                        className="w-full flex items-center justify-center bg-red-600 hover:bg-red-700 text-white transition-colors duration-300"
                    >
                        <Camera className="mr-2 h-4 w-4" /> Use Camera
                    </Button>
                </div>
            </motion.div>

            <AnimatePresence>
                {showCamera && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center"
                    >
                        <video ref={videoRef} autoPlay playsInline className="w-full h-auto" />
                        <canvas ref={canvasRef} className="hidden" />
                        <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-4">
                            <Button onClick={captureImage} className="bg-green-500 hover:bg-green-600 transition-colors duration-300">
                                Snap to Continue
                            </Button>
                            <Button onClick={() => setShowCamera(false)} variant="destructive" className="transition-colors duration-300">
                                <X className="h-4 w-4" />
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {previewUrls.length > 0 && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
                >
                    <h2 className="text-2xl font-semibold mb-4 text-red-700 dark:text-red-300">Uploaded Images</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {previewUrls.map((url, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="relative aspect-square rounded-lg overflow-hidden border-2 border-red-200 dark:border-red-700 shadow-md hover:shadow-lg transition-shadow duration-300"
                            >
                                <Image
                                    src={url || "/placeholder.svg"}
                                    alt={`Uploaded image ${index + 1}`}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            )}

            {productImagePaths.length > 0 && (
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="w-full bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
                >
                    <h2 className="text-2xl font-semibold mb-6 text-red-700 dark:text-red-300">AI-Recommended Products</h2>
                    {loading ? (
                        <div className="flex justify-center items-center h-40">
                            Finding a best recommendation for you...
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {recommendedProducts.map((product, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.05 }}
                                    className="flex flex-col rounded-lg border-2 border-red-200 dark:border-red-700 bg-white dark:bg-gray-800 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                                >
                                    <Link href={`/product/${product._id}`} className="block w-full">
                                        <div className="relative aspect-square">
                                            <Image
                                                src={product.images[0] || "/placeholder.svg"}
                                                alt={`Product ${index + 1}`}
                                                layout="fill"
                                                objectFit="cover"
                                                className="transition-transform duration-300 hover:scale-110"
                                            />
                                        </div>
                                    <div className="p-4 flex-grow flex flex-col justify-between">
                                        <h3 className="cursor-pointer text-lg font-medium text-gray-900 dark:text-gray-100 mb-2 line-clamp-2 hover:text-red-600 dark:hover:text-red-300 transition-colors duration-300">
                                            {product.name}
                                        </h3>
                                        <p className="text-xl cursor-pointer font-bold text-red-600 dark:text-red-300">
                                            ₹{parseFloat(product.price.toString()).toFixed(2)}
                                        </p>
                                    </div>
                                    </Link>
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