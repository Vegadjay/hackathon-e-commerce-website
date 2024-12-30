"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

type ProductCardProps = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export function ProductCard({ id, name, price, image }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className="group relative overflow-hidden rounded-lg bg-white shadow-md"
    >
      <Link href={`/product/${id}`}>
        <div className="aspect-square overflow-hidden">
          <Image
            src={image}
            alt={name}
            width={400}
            height={400}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <p className="mt-2 text-xl font-bold text-primary">${price}</p>
        </div>
      </Link>
    </motion.div>
  );
}