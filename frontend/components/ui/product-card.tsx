"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  images: string[];
  description?: string;
  category?: string;
  className?: string;
}

export function ProductCard({ id, name, price, description, category, images }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative flex flex-col overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <Link href={`/product/${id}`}>
        <div className="aspect-square overflow-hidden bg-gray-100 flex-shrink-0">
          <Image
            src={images[0]}
            alt={name}
            width={400}
            height={400}
            className="h-[30rem] w-[30rem] -mt-5 object-cover transition-all duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
              <p className="text-sm line-clamp-2">
                {description || "Explore this amazing product and discover its features."}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between p-4 h-full">
          <div className="mb-2">
            {category && (
              <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded-full">
                {category || "New Collections"}
              </span>
            )}
          </div>

          <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-1">
            {name || "Product Name Is Not Printable"}
          </h3>

          <p className="text-xl font-bold text-black">₹ {price.toFixed(2) || 2000}</p>
        </div>
      </Link>
    </motion.div>
  );
}
