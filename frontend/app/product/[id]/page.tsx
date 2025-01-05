"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronRight, Star, Heart, Share2, Check, AlertCircle } from "lucide-react";
import { products } from './data';
import { motion } from "framer-motion";
import ImageSwapper from "@/components/image/page";

interface ProductProps {
  id: number;
}

const Product: React.FC<ProductProps> = ({ id }) => {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const product = products.find(p => p.id === id);

  const handleAddToCart = async () => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert("Added to cart successfully!");
    } catch (error) {
      alert("Failed to add to cart. Please try again.");
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
            onClick={() => router.push('/')}
            className="mt-4 px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Go Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <motion.div className="min-h-[120vh] bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="sticky top-8 space-y-4">
              <ImageSwapper
                images={product.images}
                altText="Product name"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="flex items-center gap-4 pt-4 border-t">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 text-gray-600 hover:text-blue-500"
                >
                  <Share2 className="w-5 h-5" />
                  Share
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 text-gray-600 hover:text-red-500"
                >
                  <Heart className="w-5 h-5" />
                  Save
                </motion.button>
              </div>
            </div>
          </motion.div>

          <motion.div
  className="lg:col-span-1 sticky top-8 self-start"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.2 }}
>
  <div className="space-y-4">
    <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
    <div className="flex items-center gap-4">
      <span className="text-blue-500 hover:underline cursor-pointer">
        by {product.seller}
      </span>
      <span className="text-gray-500">Model: {product.model}</span>
    </div>
    <div className="flex items-center gap-4">
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
      <div className="flex items-center gap-4 text-sm">
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
        <span className="text-3xl font-medium text-gray-900">
          ${product.price.toFixed(2)}
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
        className="w-full px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        disabled={isLoading}
      >
        {isLoading ? "Adding to Cart..." : "Add to Cart"}
      </button>
      <button
        onClick={handleBuyNow}
        className="w-full px-6 py-3 text-white bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
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
