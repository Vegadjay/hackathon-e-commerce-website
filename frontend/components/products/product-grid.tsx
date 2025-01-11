// todo: In this code error is occur that is size error while that size is come than error is gone..


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
    scale: 1.05,
    transition: { 
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

export function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

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
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, [selectedCategory, searchQuery, priceRange, selectedSizes]);

  const getFilteredProducts = () => {
    let filtered = [...products];

    if (selectedCategory !== "All") {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(query) ||
        product.description?.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      );
    }

    filtered = filtered.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    if (selectedSizes.length > 0) {
      filtered = filtered.filter(product =>
        selectedSizes.some(size => product.sizes?.includes(size))
      );
    }

    if (sortBy === "price-asc") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      filtered.sort((a, b) => b.price - a.price);
    }

    return filtered;
  };

  const filteredAndSortedProducts = getFilteredProducts();

  return (
    <div className="mx-auto max-w-[1800px]">
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 py-8">
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
            , <br className="md:hidden" />
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
        </motion.div>
      </BackgroundLines>

      <div className="flex flex-col lg:flex-row gap-8 px-4 sm:px-6 lg:px-8">
        <motion.aside
          className="lg:w-64 flex-shrink-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="sticky top-4 bg-white dark:bg-neutral-900 rounded-lg shadow-lg p-6">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden w-full text-left mb-4 text-neutral-600 dark:text-neutral-400"
            >
              {isSidebarOpen ? "Hide Filters ↑" : "Show Filters ↓"}
            </button>
            
            <div className={`${isSidebarOpen ? 'block' : 'hidden lg:block'}`}>
              <h3 className="text-lg font-semibold mb-4">Filters</h3>
              <ProductFilters
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                sortBy={sortBy}
                onSortChange={setSortBy}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                priceRange={priceRange}
                onPriceRangeChange={setPriceRange}
                selectedSizes={selectedSizes}
                onSizesChange={setSelectedSizes}
                className="flex flex-col gap-4"
              />
            </div>
          </div>
        </motion.aside>

        <motion.main 
          className="flex-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {/* Results count */}
          <div className="mb-6">
            <p className="text-neutral-600 dark:text-neutral-400">
              Found {filteredAndSortedProducts.length} products
              {searchQuery && ` for "${searchQuery}"`}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {isLoading
              ? Array.from({ length: PRODUCTS_PER_PAGE }).map((_, i) => (
                  <ProductSkeleton key={`skeleton-${i}`} />
                ))
              : filteredAndSortedProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    variants={productCardVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    className="transform-gpu"
                  >
                    <ProductCard
                      {...product}
                      image={[`https://picsum.photos/500?random=${product.id}`]}
                      className="shadow-lg hover:shadow-xl transition-shadow duration-300"
                    />
                  </motion.div>
                ))}
          </div>

          {/* No results message */}
          {filteredAndSortedProducts.length === 0 && !isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-lg text-neutral-600 dark:text-neutral-400">
                No products found matching your criteria
              </p>
            </motion.div>
          )}
        </motion.main>
      </div>

      <div className="mt-16 px-4 sm:px-6 lg:px-8">
        <Footer />
      </div>
    </div>
  );
}