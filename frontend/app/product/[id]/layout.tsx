// Layout.tsx
'use client'
import { SetStateAction, useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Star, Heart, Share2, Check, Truck, MapPin, Shield, Gift, Package, AlertCircle } from "lucide-react";
import { useRouter } from "next/navigation";

const Layout = ({ product, quantity, setQuantity, isLoading, handleAddToCart, handleBuyNow }: {
  product: any;
  quantity: number;
  setQuantity: React.Dispatch<SetStateAction<number>>;
  isLoading: boolean;
  handleAddToCart: () => void;
  handleBuyNow: () => void;
}) => {
  const router = useRouter();

  return (
    <motion.div className="min-h-screen bg-white">
      <nav className="bg-gray-100 py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="flex items-center gap-2 text-gray-600"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span
              className="hover:text-blue-500 cursor-pointer"
              onClick={() => router.push('/')}
            >
              Home
            </span>
            <ChevronRight className="w-4 h-4" />
            <span className="hover:text-blue-500 cursor-pointer">
              {product.category}
            </span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium truncate">
              {product.name}
            </span>
          </motion.div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="sticky top-8 space-y-4">
              <motion.div
                className="aspect-square rounded-lg overflow-hidden bg-gray-100 hover:bg-gray-200 relative cursor-zoom-in"
                layoutId="productImage"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={product.images[0]} // assuming first image
                  alt={`${product.name} - View 1`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((img: string, index: number) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 rounded-md overflow-hidden"
                  >
                    <img
                      src={img}
                      alt={`${product.name} - Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.button>
                ))}
              </div>
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

          {/* Product Details Section */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="space-y-4">
              <h1 className="text-3xl font-bold text-gray-900">
                {product.name}
              </h1>
              <div className="flex items-center gap-4">
                <span className="text-blue-500 hover:underline cursor-pointer">
                  by {product.seller}
                </span>
                <span className="text-gray-500">
                  Model: {product.model}
                </span>
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
                  {product.features.map((feature: string, index: number) => (
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
            </div>
          </motion.div>

          {/* Purchase Section */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="sticky top-8 space-y-6 bg-gray-50 rounded-lg p-6 border">
              <div className="text-3xl text-gray-900">
                ${product.price.toFixed(2)}
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-green-600">
                  <Truck className="w-5 h-5" />
                  <span>
                    {product.delivery} <strong>{product.deliveryDate}</strong>
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-5 h-5" />
                  <span className="text-blue-500 hover:underline cursor-pointer">
                    Deliver to your location
                  </span>
                </div>
              </div>

              <div className="text-xl text-green-600 font-medium">
                {product.inStock ? "In Stock" : "Currently unavailable"}
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-600">Quantity:</label>
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-full border rounded-lg px-3 py-2"
                >
                  {[...Array(10)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleAddToCart}
                  disabled={isLoading}
                  className="w-full bg-yellow-400 text-gray-900 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-colors disabled:opacity-50"
                >
                  {isLoading ? 'Adding...' : 'Add to Cart'}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleBuyNow}
                  disabled={isLoading}
                  className="w-full bg-orange-500 text-white py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors disabled:opacity-50"
                >
                  Buy Now
                </motion.button>
              </div>

              {/* Additional Info */}
              <div className="space-y-4 border-t pt-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Shield className="w-4 h-4" />
                  Secure transaction
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Gift className="w-4 h-4" />
                  Gift options available
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Package className="w-4 h-4" />
                  Ships from and sold by {product.seller}
                </div>
              </div>

              <div className="text-sm text-gray-600 border-t pt-4">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0 mt-1" />
                  <span>
                    This item can be returned within 30 days of delivery
                  </span>
                </div>
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

export default Layout;
