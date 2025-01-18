"use client";
import React from 'react';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Star, Heart, Share2, Check, AlertCircle, Facebook, Twitter, Plus, Minus, Linkedin } from "lucide-react";
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion";
import ImageSwapper from "@/components/image/page";
import Cookies from "js-cookie";
import { AddToCartModal, BuyNowButton } from "@/app/product/component/button-component";
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { products } from '@/lib/data';
import RevenueChart from '@/app/product/component/price-chart';
import { Compare } from '@/components/ui/compare';

interface ProductProps {
  id: number;
}

const Product: React.FC<ProductProps> = ({ id }) => {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);

  const product = products.find((p) => p.id === id);

  useState(() => {
    if (product && product.size && product.size.length > 0) {
      setSelectedSize(product.size[0]);
    }
  });

  const handleClick = () => {
    setIsSaved(!isSaved);
  };

  const handleShare = (platform: string) => {
    if (!product) return;

    const url = window.location.href;
    const text = `Check out this amazing product: ${product.name}`;

    const shareUrls: { [key: string]: string } = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
      whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(text + ' ' + url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    };

    if (platform in shareUrls) {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
      setShowShareMenu(false);
    }
  };

  const handleQuantityChange = (type: 'increase' | 'decrease') => {
    setQuantity(prev => {
      if (type === 'increase' && prev < 10) return prev + 1;
      if (type === 'decrease' && prev > 1) return prev - 1;
      return prev;
    });
  };

  const handleManualQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value === '') {
      setQuantity(1);
      return;
    }

    const numValue = parseInt(value);

    if (!isNaN(numValue)) {
      if (numValue > 10) {
        setQuantity(10);
      } else if (numValue < 1) {
        setQuantity(1);
      } else {
        setQuantity(numValue);
      }
    }
  };

  const handleAddToCart = async () => {
    if (!product) {
      alert('Product not found');
      return;
    }

    setIsLoading(true);
    const userId = Cookies.get('userId');

    if (!userId) {
      router.push('/login');
      return;
    }
    try {
      const response = await fetch('/api/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: userId,
          products: [
            {
              productId: "677816d602b67aeb8b631fd0",
              quantity: quantity,
              price: product.price.toString(),
              size: selectedSize,
            }
          ],
          totalPrice: 0
        }),
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error || 'Failed to add to cart');
      }

      alert('Added to cart successfully!');
    } catch (error) {
      console.error('Add to cart error:', error);
      alert('Failed to add to cart. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const totalSizes = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];

  const handleBuyNow = () => {
    if (product) {
      router.push(`/checkout?productId=${product.id}&quantity=${quantity}&size=${selectedSize}`);
    } else {
      alert("Product not found");
    }
  };


  // todo Change this ui
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <AlertCircle className="mx-auto h-12 w-12 text-red-500" />
          <h1 className="mt-4 text-2xl font-bold text-gray-800">Product Not Found</h1>
          <p className="text-gray-600 mt-2">
            The product you are looking for (ID: {id}) does not exist or has been removed.
          </p>
          <button
            onClick={() => router.push("/")}
            className="mt-4 px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Go Back to Home
          </button>
        </div>
      </div>
    );
  }

  const isSizeAvailable = (totalSizes: string) => {
    return product.size?.includes(totalSizes);
  };

  return (
    <motion.div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="space-y-4">
              <ImageSwapper
                images={product.images}
                altText="Product Images"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="flex items-center gap-4 pt-4 border-t">
                <div className="relative">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowShareMenu(!showShareMenu)}
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-500"
                  >
                    <Share2 className="w-5 h-5" />
                    Share
                  </motion.button>

                  <AnimatePresence>
                    {showShareMenu && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
                      >
                        <div className="py-1">
                          <button
                            onClick={() => handleShare('facebook')}
                            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
                          >
                            <Facebook className="w-4 h-4 text-blue-600" />
                            Facebook
                          </button>
                          <button
                            onClick={() => handleShare('twitter')}
                            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
                          >
                            <Twitter className="w-4 h-4 text-blue-400" />
                            Twitter
                          </button>
                          <button
                            onClick={() => handleShare('whatsapp')}
                            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
                          >
                            <FaWhatsapp className="w-4 h-4 text-green-600" />
                            WhatsApp
                          </button>
                          <button
                            onClick={() => handleShare('linkedin')}
                            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
                          >
                            <Linkedin className="w-4 h-4 text-blue-600" />
                            LinkedIn
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleClick}
                  className="flex items-center gap-2 text-gray-600 hover:text-red-500"
                >
                  <Heart
                    className="w-5 h-5"
                    fill={isSaved ? "#ef4444" : "none"}
                    color={isSaved ? "#ef4444" : "currentColor"}
                  />
                  {isSaved ? 'Saved' : 'Save'}
                </motion.button>

                {/* Compare Button */}
                <Link href="/product/compare">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-500"
                  >
                    <Compare className="w-5 h-5" />
                    Compare
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>


          <motion.div
            className="lg:col-span-1 self-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="space-y-4">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{product.name}</h1>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <span className="text-blue-500 hover:underline cursor-pointer">
                  by {product.seller}
                </span>
                <span className="text-gray-500">Model: {product.model}</span>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(product.rating)
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                        }`}
                    />
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <span className="text-blue-500 hover:text-blue-600 cursor-pointer">
                    {product.reviews.toLocaleString()} ratings
                  </span>
                  <span className="text-blue-500 hover:text-blue-600 cursor-pointer">
                    {product.answers} answered questions
                  </span>
                </div>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-sm text-gray-500">Price:</span>
                  <span className="text-2xl sm:text-3xl font-medium">
                    ₹{product.price.toFixed(2)}
                  </span>
                </div>
                <div className="text-sm text-gray-500 mt-1">
                  No Import Fees & Free Shipping Included
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Size</label>
                <div className="flex gap-2">
                  {product.size?.map((size) => {
                    const available = isSizeAvailable(size);
                    return (
                      <button
                        key={size}
                        onClick={() => available && setSelectedSize(size)}
                        disabled={!available}
                        className={`
                          px-4 py-2 rounded-md relative
                          ${available
                            ? selectedSize === size
                              ? 'bg-red-500 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          }
                          ${!available && 'hover:cursor-not-allowed'}
                        `}
                      >
                        {size}
                        {!available && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-full h-0.5 bg-gray-400 transform rotate-45" />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Quantity</label>
                <div className="flex items-center space-x-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-2 rounded-full ${quantity <= 1 ? 'bg-gray-100 text-gray-400' : 'bg-blue-100 text-blue-500 hover:bg-blue-200'
                      }`}
                    onClick={() => handleQuantityChange('decrease')}
                    disabled={quantity <= 1}
                  >
                    <Minus className="w-4 h-4" />
                  </motion.button>

                  <motion.div
                    key={quantity}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="relative w-52"
                  >
                    <input
                      type="number"
                      value={quantity}
                      onChange={handleManualQuantityChange}
                      className="w-full h-10 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      min="1"
                      max="10"
                      onBlur={() => {
                        if (quantity < 1) setQuantity(1);
                        if (quantity > 10) setQuantity(10);
                      }}
                    />
                  </motion.div>

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-2 rounded-full ${quantity >= 10 ? 'bg-gray-100 text-gray-400' : 'bg-blue-100 text-blue-500 hover:bg-blue-200'
                      }`}
                    onClick={() => handleQuantityChange('increase')}
                    disabled={quantity >= 10}
                  >
                    <Plus className="w-4 h-4" />
                  </motion.button>
                </div>
                <p className="text-xs text-gray-500 mt-1">Enter a quantity between 1 and 10</p>
              </div>

              <div className="space-y-4">
                <h2 className="font-bold text-lg">About this item</h2>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-2"
                    >
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-600">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="w-full space-y-4 p-4">
                <AddToCartModal
                  // @ts-ignore
                  product={product}
                  quantity={quantity}
                  selectedSize={selectedSize}
                />
                <BuyNowButton
                  // @ts-ignore
                  product={product}
                  quantity={quantity}
                  selectedSize={selectedSize}
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 border-t pt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-6">Product Description</h2>
          <div className="prose max-w-none text-gray-600">
            <p className="whitespace-pre-line">{product.description}</p>
          </div>
        </motion.div>
        {product?.chartData && product.chartData.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <RevenueChart data={product.chartData} />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};


export default Product;