"use client"

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ProductCard } from "@/components/ui/product-card";
import { ProductFilters } from "@/components/products/product-filters";
import { ProductSkeleton } from "@/components/products/product-skeleton";
import { products } from "@/lib/data";
import Footer from "@/components/layout/footer";
import { BackgroundLines } from "@/components/ui/background-lines";

const PRODUCTS_PER_PAGE = 15;

const productCardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.4
    }
  },
  hover: {
    scale: 1.1,
    transition: { 
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

export function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  const [isLoading, setIsLoading] = useState(true);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  const quotes = [
    "पधारो म्हारे वस्त्र संसार।",
    "राजस्थानी रंग, परंपरा के संग।",
    "म्हारी धरती री शान, राजस्थानी पोशाक जान।",
    "पहनावे में परंपरा, हर धागे में कहानी।",
    "वस्त्र जो कहें राजस्थानी इतिहास।"
  ];

  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setCurrentQuoteIndex(prev => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(quoteInterval);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, [selectedCategory]);

  const filteredProducts = products.filter(
    (product) => selectedCategory === "All" || product.category === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-asc") return a.price - b.price;
    if (sortBy === "price-desc") return b.price - a.price;
    return 0;
  });

  return (
    <main className="mx-auto max-w-[1800px] px-4 py-10 sm:px-6 lg:px-8">
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative"
        >
          <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-3xl md:text-5xl lg:text-8xl font-sans py-4 md:py-12 relative z-20 font-bold tracking-tight">
            Rajwadi{" "}
            <motion.span
              className="text-red-400"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Poshaak
            </motion.span>
            ,{" "}
            <br className="md:hidden" />
            <span className="mt-4">पधारो म्हारे देश।</span>
          </h2>

          <AnimatePresence mode="wait">
            <motion.p
              key={currentQuoteIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              className="max-w-2xl font-semibold mx-auto text-xl md:text-2xl text-neutral-700 dark:text-neutral-300 text-center mt-6"
            >
              {quotes[currentQuoteIndex]}
            </motion.p>
          </AnimatePresence>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-700 dark:text-neutral-400 text-center mt-8"
          >
            Discover the vibrant heritage of Rajasthan, wrapped in the elegance of Jaipuri attire.
            <span className="font-bold">
              पधारो म्हारे देश, राजस्थानी परंपरा आपके साथ।
            </span>
          </motion.p>
        </motion.div>
      </BackgroundLines>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <ProductFilters
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      >
        {isLoading
          ? Array.from({ length: PRODUCTS_PER_PAGE }).map((_, i) => (
              <ProductSkeleton key={`skeleton-${i}`} />
            ))
          : sortedProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={productCardVariants}
                whileHover="hover"
                className="transform-gpu"
              >
                <ProductCard
                  {...product}
                  // @ts-ignore
                  image={[`https://picsum.photos/500?random=${product.id}`]}
                  className="shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </motion.div>
            ))}
      </motion.div>

      <div className="mt-16">
        <Footer />
      </div>
    </main>
  );
}
