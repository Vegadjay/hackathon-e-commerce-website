// todo: in this code do that one thing that id is not come from user url so please do that one thing like id is come from user and that product is shown


"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
  Package,
} from "lucide-react";

const ProductDetail = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product = [
  {
    "id": 1,
    "name": "Indigo Dream Suit Set",
    "price": 3199.00,
    "rating": 4.5,
    "reviews": 10000,
    "answers": 234,
    "inStock": true,
    "delivery": "FREE delivery",
    "deliveryDate": "5-6 working days",
    "seller": "Indigo Apparel Co.",
    "category": "Cotton Suit Sets",
    "model": "JA-729",
    "images": [
      "./detailphotos/1.1.webp",
      "./detailphotos/1.2.webp",
      "./detailphotos/1.3.webp",
      "./detailphotos/1.4.webp"
    ],
    "features": [
      "Dispatch Time: 5 To 6 Working Days",
      "Fabric: Pure Cotton",
      "Fit: Relaxed",
      "Washing instruction: Quick dip wash or Dry clean, separate wash in cold water, dry in shadow",
      "Kurta length: 46 inches",
      "Pant length: 38 inches"
    ],
    "description": "A captivating ensemble embodying elegance and grace. This three-piece set features 3/4 sleeves, exquisite neckline work, and a beautiful lotus motif print throughout. Completing the look is a stunning dupatta adorned with playful tassels. Embrace the allure of the 'Indigo Dream' and let your style shine with its timeless charm."
  },
  {
    "id": 2,
    "name": "Mogra Gher Mul Cotton Suit Set",
    "price": 2899.00,
    "rating": 4.7,
    "reviews": 11000,
    "answers": 184,
    "inStock": true,
    "delivery": "FREE delivery",
    "deliveryDate": "9-12 working days",
    "seller": "Cotton Elegance",
    "category": "Cotton Suit Sets",
    "model": "JA-792",
    "images": [
      "./detailphotos/2.1.webp",
      "./detailphotos/2.2.webp",
      "./detailphotos/2.3.webp",
      "./detailphotos/2.4.webp"
    ],
    "features": [
      "Fit: Relaxed",
      "Dispatch Time: 9 To 12 Working Days",
      "Fabric: Pure Cotton",
      "Washing instruction: Hand wash separately in cold water, use mild detergent",
      "Kurta length: 46 inches",
      "Pant length: 38 inches"
    ],
    "description": "Indulge in the luxury of the Mogra Gher Mul Cotton Suit Set. This premium set is made from high-quality cotton for a luxurious feel and features intricate Mogra Gher weaving. Elevate your style with this elegant and exclusive suit set."
  },
  {
    "id": 3,
    "name": "Tarin Green Floral Print Embroidered Suit Set",
    "price": 3199.00,
    "rating": 4.6,
    "reviews": 9000,
    "answers": 150,
    "inStock": true,
    "delivery": "FREE delivery",
    "deliveryDate": "4-5 working days",
    "seller": "Green Threads",
    "category": "Cotton Suit Sets",
    "model": "JA-704",
    "images": [
      "./detailphotos/3.1.webp",
      "./detailphotos/3.2.webp",
      "./detailphotos/4.3.webp",
      "./detailphotos/5.4.webp"
    ],
    "features": [
      "Fit: Relaxed",
      "Dispatch Time: 4-5 working days",
      "Fabric: Pure Cotton",
      "Washing instruction: Hand wash separately in cold water, dry in shade",
      "Kurta length: 46 inches",
      "Pant length: 38 inches"
    ],
    "description": "A Verdant Green Cotton Kalidar Kurta Adorned With Intricate Floral Prints And Delicate Thread Work On The Neckline. This Charming Ensemble Combines Comfort With Elegance, Making It Ideal For Both Casual Outings And Festive Occasions."
  }
]
;

  return (
    <div className="min-h-screen bg-white">
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
                  src={product.images[selectedImage]} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0 bg-black bg-opacity-20 hidden hover:flex justify-center items-center"
                  style={{ cursor: "zoom-in" }}
                >
                  <span className="text-white text-lg">Zoom In</span>
                </div>
              </motion.div>
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((img, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedImage(index)}
                    className={`border-2 rounded-md overflow-hidden ${
                      selectedImage === index
                        ? "border-blue-500"
                        : "border-gray-200"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
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

          <motion.div
            className="lg:col-span-1"
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
            </div>
          </motion.div>

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

              {/* Stock Status */}
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
    </div>
  );
};

export default ProductDetail;
