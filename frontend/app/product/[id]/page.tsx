"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Star, Heart, Share2, Check, AlertCircle, Facebook, Twitter } from "lucide-react";
import { products } from "./data";
import { motion, AnimatePresence } from "framer-motion";
import ImageSwapper from "@/components/image/page";
import Cookies from "js-cookie";

interface ProductProps {
  id: number;
}

const Product: React.FC<ProductProps> = ({ id }) => {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("S");
  const [isLoading, setIsLoading] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);

  const product = products.find((p) => p.id === id);

  const handleClick = () => {
    setIsSaved(!isSaved);
  };

  const handleShare = (platform: string) => {
    if (!product) return;

    const url = window.location.href;
    const text = `Check out this amazing product: ${product.name}`;

    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
      whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(text + ' ' + url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    };

    window.open(shareUrls[platform as keyof typeof shareUrls], '_blank', 'width=600,height=400');
    setShowShareMenu(false);
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
              productId: "6783546add252cb18a80dfe7",
              quantity: quantity,
              price: product.price.toString(),
              size: selectedSize,
            }
          ],
          totalPrice: quantity * product.price
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

  const handleBuyNow = () => {
    if (product) {
      router.push(`/checkout?productId=${product.id}&quantity=${quantity}&size=${selectedSize}`);
    } else {
      alert("Product not found");
    }
  };

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
                  <span className="text-2xl sm:text-3xl font-medium text-gray-900">
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
                  {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-md ${
                        selectedSize === size
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selection */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Quantity</label>
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="block w-24 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>

              {/* Features */}
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

              {/* Action Buttons */}
              <div className="space-y-4">
                <button
                  onClick={handleAddToCart}
                  className="w-full px-4 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isLoading}
                >
                  {isLoading ? "Adding to Cart..." : "Add to Cart"}
                </button>
                <button
                  onClick={handleBuyNow}
                  className="w-full px-4 py-3 text-white bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  Buy Now
                </button>
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
      </div>
    </motion.div>
  );
};

export default Product;