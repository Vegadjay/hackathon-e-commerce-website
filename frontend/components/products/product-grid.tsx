"use client"

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ProductCard } from "@/components/ui/product-card";
import { ProductFilters } from "@/components/products/product-filters";
import { ProductSkeleton } from "@/components/products/product-skeleton";
import { products } from "@/lib/data";
import PhotoCarousel from "@/components/products/product-corosal";
import Footer from "@/components/layout/footer";
import { BackgroundLines } from "@/components/ui/background-lines";

const PRODUCTS_PER_PAGE = 15;

export function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [selectedCategory, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  const filteredProducts = products.filter(
    (product) => selectedCategory === "All" || product.category === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-asc") return a.price - b.price;
    if (sortBy === "price-desc") return b.price - a.price;
    return 0;
  });

  const totalPages = Math.ceil(sortedProducts.length / PRODUCTS_PER_PAGE);
  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  return (
    <main className="mx-auto max-w-[1800px] px-4 py-8 sm:px-6 lg:px-8">

      {/* <PhotoCarousel /> */}
      
      { /* Add that background lines to here */} 

      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        Jaipuri <span className="text-red-400">Adaah</span>, <br /> No.1 Fashion Brand In India.
      </h2>
      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        Get the best advices from our experts, including expert artists,
        painters, marathon enthusiasts and RDX, totally free.
      </p>
    </BackgroundLines>

      <ProductFilters
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={`${isLoading}-${currentPage}-${selectedCategory}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
        >
          {isLoading
            ? Array.from({ length: PRODUCTS_PER_PAGE }).map((_, i) => (
                <ProductSkeleton key={`skeleton-${i}`} />
              ))
            : paginatedProducts.map((product) => (
                <motion.div
                  key={product.id}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  className="transform-gpu"
                >
                  <ProductCard
                    {...product}
                    image={`https://picsum.photos/500?random=${product.id}`}
                    className="shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </motion.div>
              ))}
        </motion.div>
      </AnimatePresence>
      <div>
        <Footer />
      </div>
    </main>
  );
}