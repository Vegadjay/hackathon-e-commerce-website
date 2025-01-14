"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { ProductCard } from "@/components/ui/product-card";
// @ts-ignore
import { products, Product } from "lib/data";

const PRODUCTS_PER_BATCH = 5;

export function ProductGrid() {
  const [sortBy, setSortBy] = useState("default");
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const getSortedProducts = useCallback(() => {
    let sortedProducts = [...products];
    switch (sortBy) {
      case "price-asc":
        return sortedProducts.sort((a, b) => a.price - b.price);
      case "price-desc":
        return sortedProducts.sort((a, b) => b.price - a.price);
      default:
        return sortedProducts;
    }
  }, [sortBy]);

  // Load more products
  const loadMoreProducts = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));

    const sortedProducts = getSortedProducts();
    const nextProducts = sortedProducts.slice(
      currentIndex,
      currentIndex + PRODUCTS_PER_BATCH
    );

    if (nextProducts.length > 0) {
      setDisplayedProducts(prev => [...prev, ...nextProducts]);
      setCurrentIndex(prev => prev + PRODUCTS_PER_BATCH);
      setHasMore(currentIndex + PRODUCTS_PER_BATCH < sortedProducts.length);
    } else {
      setHasMore(false);
    }

    setLoading(false);
  }, [currentIndex, loading, hasMore, getSortedProducts]);

  // Handle scroll
  const handleScroll = useCallback(() => {
    if (loading || !hasMore) return;

    const scrollPosition = window.innerHeight + window.scrollY;
    const scrollThreshold = document.documentElement.scrollHeight - 200;

    if (scrollPosition >= scrollThreshold) {
      loadMoreProducts();
    }
  }, [loading, hasMore, loadMoreProducts]);

  // Reset when sort changes
  useEffect(() => {
    setDisplayedProducts([]);
    setCurrentIndex(0);
    setHasMore(true);
    loadMoreProducts();
  }, [sortBy]);

  // Add scroll listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-center justify-end gap-4">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm"
        >
          <option value="default">Sort by</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {displayedProducts.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ProductCard
              id={product.id}
              name={product.name}
              price={product.price}
              images={product.images || "/download.png"}
              description={product.description}
              category={product.category}
            />
          </motion.div>
        ))}

        {/* Loading skeletons */}
        {loading && (
          <>
            {[...Array(PRODUCTS_PER_BATCH)].map((_, index) => (
              <motion.div
                key={`skeleton-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="rounded-lg border border-gray-200 p-4 h-[400px]"
              >
                <div className="animate-pulse">
                  <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
                  <div className="h-6 bg-gray-200 rounded w-1/4"></div>
                </div>
              </motion.div>
            ))}
          </>
        )}
      </motion.div>

      {!hasMore && displayedProducts.length > 0 && (
        <div className="mt-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-600"
          >
            No more products to load
          </motion.div>
        </div>
      )}
    </main>
  );
}