'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  ShoppingCart, 
  Shield, 
  Truck, 
  Heart,
  Share2,
  ChevronRight,
  MapPin,
  Gift,
  Check,
  AlertCircle,
  Package
} from 'lucide-react';

const ProductDetail = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  
  const product = {
    name: "PlayStation 5 Console - God of War Ragnarök Bundle",
    price: 499.99,
    rating: 4.8,
    reviews: 12584,
    answers: 234,
    inStock: true,
    delivery: "FREE delivery",
    deliveryDate: "Tomorrow, Jan 4",
    seller: "Sony Interactive Entertainment",
    category: "Video Games",
    model: "PS5-GOW-Bundle",
    images: [
      "/api/placeholder/600/600",
      "/api/placeholder/600/600",
      "/api/placeholder/600/600",
      "/api/placeholder/600/600"
    ],
    features: [
      "Includes PS5 Console and God of War Ragnarök full game download",
      "Lightning Speed - Harness the power of a custom CPU, GPU, and SSD with Integrated I/O",
      "Stunning Games - Marvel at incredible graphics and experience new PS5 features",
      "Breathtaking Immersion - Discover a deeper gaming experience with haptic feedback",
      "Ray Tracing - Immerse yourself in worlds with a new level of realism",
    ],
    description: `Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man. In the latest adventure in the Marvel's Spider-Man universe, teenager Miles Morales is adjusting to his new home while following in the footsteps of his mentor, Peter Parker, as a new Spider-Man.

But when a fierce power struggle threatens to destroy his new home, the aspiring hero realizes that with great power, there must also come great responsibility. To save all of Marvel's New York, Miles must take up the mantle of Spider-Man and own it.

Key Features:
• The rise of Miles Morales: Miles Morales discovers explosive powers that set him apart from his mentor, Peter Parker. Master his unique, bio-electric venom blast attacks and covert camouflage power alongside spectacular web-slinging acrobatics, gadgets and skills.

• A war for power: A war for control of Marvel's New York has broken out between a devious energy corporation and a high-tech criminal army. With his new home at the heart of the battle, Miles must learn the cost of becoming a hero and decide what he must sacrifice for the greater good.

• A vibrant new home: Traverse the snowy streets of his new, vibrant and bustling neighborhood as Miles searches for a sense of belonging. When the lines blur between his personal and crime-fighting lives, he discovers who he can trust, and what it feels like to truly be home.`
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Breadcrumb */}
      <nav className="bg-gray-100 py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="flex items-center gap-2 text-gray-600"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="hover:text-blue-500 cursor-pointer">Home</span>
            <ChevronRight className="w-4 h-4" />
            <span className="hover:text-blue-500 cursor-pointer">{product.category}</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium truncate">{product.name}</span>
          </motion.div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Left Column - Image Gallery */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="sticky top-8 space-y-4">
              {/* Main Image */}
              <motion.div 
                className="aspect-square rounded-lg overflow-hidden bg-gray-100 hover:bg-gray-200 cursor-zoom-in"
                layoutId="productImage"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Thumbnail Images */}
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((img, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedImage(index)}
                    className={`border-2 rounded-md overflow-hidden ${
                      selectedImage === index ? 'border-blue-500' : 'border-gray-200'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </motion.button>
                ))}
              </div>

              {/* Share Buttons */}
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

          {/* Middle Column - Product Details */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {/* Product Title and Badges */}
            <div className="space-y-4">
              <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
              <div className="flex items-center gap-4">
                <span className="text-blue-500 hover:underline cursor-pointer">
                  by {product.seller}
                </span>
                <span className="text-gray-500">Model: {product.model}</span>
              </div>

              {/* Ratings */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-gray-300'
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

              {/* Price */}
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

              {/* Key Features */}
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
            </div>
          </motion.div>

          {/* Right Column - Purchase Options */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="sticky top-8 space-y-6 bg-gray-50 rounded-lg p-6 border">
              {/* Price */}
              <div className="text-3xl text-gray-900">
                ${product.price.toFixed(2)}
              </div>

              {/* Delivery */}
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

              {/* Stock Status */}
              <div className="text-xl text-green-600 font-medium">
                {product.inStock ? 'In Stock' : 'Currently unavailable'}
              </div>

              {/* Quantity Selector */}
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

              {/* Action Buttons */}
              <div className="space-y-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-yellow-400 text-gray-900 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-colors"
                >
                  Add to Cart
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-orange-500 text-white py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors"
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

              {/* Return Policy */}
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

        {/* Product Description */}
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
    </div>
  );
};

export default ProductDetail;