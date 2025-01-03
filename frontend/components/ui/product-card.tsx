"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

type ProductCardProps = {
  id: number;
  name: string;
  price: number;
  image: string;
  description?: string;
  category?: string;
  className?:string;
};

export function ProductCard({ id, name, price, image, description, category }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <Link href={`/product/${id}`}>
        <div className="aspect-square overflow-hidden bg-gray-100">
          <Image
            src={image}
            alt={name}
            width={400}
            height={400}
            className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
              <p className="text-sm line-clamp-2">{description || "Explore this amazing product and discover its features."}</p>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="mb-2">
            {category && (
              <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded-full">
                {category}
              </span>
            )}
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">{name}</h3>
          <p className="text-xl font-bold text-primary">${price.toFixed(2)}</p>
        </div>
      </Link>
    </motion.div>
  );
}