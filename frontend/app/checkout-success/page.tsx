"use client";

import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { products } from "@/lib/data";
import { ProductCard } from "@/components/products/product-card-detailed";

function ProductGrid() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <main className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-10">
      <motion.div
        className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {filteredProducts.map((product) => (
          <motion.div
            key={product.id}
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <ProductCard {...product} />
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}

export default ProductGrid;
