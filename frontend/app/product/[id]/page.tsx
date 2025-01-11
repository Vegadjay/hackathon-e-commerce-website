"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronRight, Star, Heart, Share2, Check, AlertCircle, Facebook, Twitter } from "lucide-react";
import { products } from "./data";
import { motion, AnimatePresence } from "framer-motion";
import ImageSwapper from "@/components/image/page";

interface ProductProps {
  id: number;
}

const Product: React.FC<ProductProps> = ({ id }) => {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
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
  try {
    const response = await fetch('/api/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        itemId: product.id,
        quantity: 1
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to add to cart');
    }

    const data = await response.json();
    alert('Added to cart successfully!');
  } catch (error) {
    alert('Failed to add to cart. Please try again.');
  } finally {
    setIsLoading(false);
  }
};


  const handleBuyNow = () => {
    if (product) {
      router.push(`/checkout?productId=${product.id}&quantity=${quantity}`);
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
                          <button
                            onClick={() => handleShare('whatsapp')}
                            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
                          >
                            <svg className="w-4 h-4 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                            </svg>
                            WhatsApp
                          </button>
                          <button
                            onClick={() => handleShare('linkedin')}
                            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
                          >
                            <svg className="w-4 h-4 text-blue-700" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
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
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
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
              <div className="space-y-4">
                <button
                  onClick={handleAddToCart}
                  className="w-full px-4 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  disabled={isLoading}
                >
                  {isLoading ? "Adding to Cart..." : "Add to Cart"}
                </button>
                <button
                  onClick={handleBuyNow}
                  className="w-full px-4 py-3 text-white bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  Shop Now
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