import Link from "next/link";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { motion } from 'framer-motion';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  images: string[];
  description?: string;
  category?: string;
  className?: string;
}

export function ProductCard({ 
  id, 
  name, 
  price, 
  description, 
  category, 
  images 
}: ProductCardProps) {
  return (
    <Link href={`/product/${id}`}>
      <motion.div 
        className="group relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
          <Image
            src={images[0]}
            alt={name}
            width={400}
            height={400}
            className="h-full w-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
          <motion.div 
            className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"
            whileHover={{ opacity: 1 }}
          />
          <motion.div 
            className="absolute top-2 right-2 m-2"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <motion.button 
              className="bg-white bg-opacity-90 p-2 rounded-full shadow-md hover:bg-opacity-100"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Add to cart"
            >
              <ShoppingCart size={20} className="text-blue-600" />
            </motion.button>
          </motion.div>
        </div>
        
        <div className="p-4">
          {category && (
            <motion.span 
              className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full mb-2"
              whileHover={{ scale: 1.05 }}
            >
              {category}
            </motion.span>
          )}
          
          <h3 className="text-lg font-medium text-gray-900 truncate">
            {name}
          </h3>
          
          <div className="flex items-center justify-between mt-3">
            <motion.span 
              className="text-xl font-bold text-gray-900"
              whileHover={{ scale: 1.05 }}
            >
              ₹{price.toFixed(2)}
            </motion.span>
            
            <motion.button 
              className="relative overflow-hidden bg-blue-600 text-white px-4 py-2 text-sm rounded-full group-hover:bg-blue-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Buy Now
                <span className="hidden group-hover:inline">→</span>
              </span>
              <div className="absolute inset-0 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}