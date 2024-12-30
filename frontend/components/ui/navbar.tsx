"use client";

import { motion } from 'framer-motion';
import { ShoppingBag, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { useCart } from '@/lib/store';

export function Navbar() {
  const items = useCart((state) => state.items);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-white shadow-sm"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <ShoppingBag className="h-6 w-6" />
            <span className="text-xl font-bold">Fashion Store</span>
          </Link>

          <Link
            href="/cart"
            className="relative flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-gray-600 hover:bg-gray-200"
          >
            <ShoppingCart className="h-5 w-5" />
            <span>Cart</span>
            {itemCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-white"
              >
                {itemCount}
              </motion.span>
            )}
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}