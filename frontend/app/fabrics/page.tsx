"use client";

import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { ProductCard } from "@/components/ui/product-card";
import { products } from "@/lib/data";

function ProductGrid() {
  const searchParams = useSearchParams();
  const category1 = searchParams.get("category");

  console.log("Category from URL:", category1);

  const filteredProducts = products.filter(
    (product) => product.category === category1
  );


  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            images={product.images || "/download.png"}
            description={product.description}
            category={product.category}
          />
        ))}
      </motion.div>
    </main>
  );
}

export default ProductGrid;
