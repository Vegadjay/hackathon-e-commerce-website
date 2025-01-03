"use client"

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ProductCard } from "@/components/ui/product-card";
import { ProductFilters } from "@/components/products/product-filters";
import { ProductSkeleton } from "@/components/products/product-skeleton";
import { products } from "@/lib/data";
import PhotoCarousel from "@/components/products/product-corosal";
import Footer from "@/components/layout/footer";

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

      <PhotoCarousel />
      <div className="mb-16 text-center">
        <div className="mb-6">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Welcome to</span>
          <h1 className="text-5xl font-bold mb-4 mt-2">Luxury Boutique</h1>
        </div>
        <div className="max-w-4xl mx-auto space-y-4 text-gray-600">
          <p className="text-lg">
            Step into a world of refined elegance and exceptional quality. Our boutique brings you a carefully curated 
            collection of premium products that blend sophistication with contemporary style.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="font-semibold text-gray-800 mb-2">Premium Quality</h3>
              <p className="text-sm">Each product is carefully selected to ensure the highest standards of quality and craftsmanship.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="font-semibold text-gray-800 mb-2">Expert Curation</h3>
              <p className="text-sm">Our team of experts handpicks each item to create a collection that speaks to refined tastes.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="font-semibold text-gray-800 mb-2">Satisfaction Guaranteed</h3>
              <p className="text-sm">We stand behind every product with our commitment to customer satisfaction.</p>
            </div>
          </div>
        </div>
      </div>

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