"use client"

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { ProductCard } from "@/components/ui/product-card";
import { ProductFilters } from "@/components/products/product-filters";
import { ProductSkeleton } from "@/components/products/product-skeleton";
import { products } from "@/lib/data";
import Footer from "@/components/layout/footer";
import { BackgroundLines } from "@/components/ui/background-lines";
import EarthComponent from "@/app/pages/secondpage/page";
import { Cover } from "@/components/ui/cover";
import { Sparkles } from "lucide-react";
import FashionCarousel from "@/components/products/product-corosal";
import { AppleCardsCarouselDemo } from "@/app/product/component/apple-card-corosal";

const PRODUCTS_PER_PAGE = 15;

// Enhanced animations
const pageTransition = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1
    }
  }
};

const productCardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
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

const heroTextVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showFilters, setShowFilters] = useState(true);

  // Refs for scroll handling
  const filterRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  const quotes = [
    "पधारो म्हारे वस्त्र संसार।",
    "राजस्थानी रंग, परंपरा के संग।",
    "म्हारी धरती री शान, राजस्थानी पोशाक जान।",
    "पहनावे में परंपरा, हर धागे में कहानी।",
    "वस्त्र जो कहें राजस्थानी इतिहास।"
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Update isScrolled state
      setIsScrolled(currentScrollY > 50);

      // Handle filter visibility based on scroll direction
      if (currentScrollY > lastScrollY.current) {
        // Scrolling down
        setShowFilters(false);
      } else {
        // Scrolling up
        setShowFilters(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Quote rotation
  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setCurrentQuoteIndex(prev => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(quoteInterval);
  }, []);

  // Loading simulation
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, [selectedCategory, searchQuery, priceRange, selectedSizes]);

  // Enhanced filtering logic
  const getFilteredProducts = () => {
    return products.filter(product => {
      // Category filter
      if (selectedCategory !== "All" && product.category !== selectedCategory) {
        return false;
      }

      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const searchMatch =
          product.name.toLowerCase().includes(query) ||
          product.description?.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query);
        if (!searchMatch) return false;
      }

      // Price range filter
      if (product.price < priceRange[0] || product.price > priceRange[1]) {
        return false;
      }

      // Size filter
      if (selectedSizes.length > 0) {
        if (!product.size?.some(size => selectedSizes.includes(size))) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "name-asc":
          return a.name.localeCompare(b.name);
        case "name-desc":
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });
  };

  const filteredProducts = getFilteredProducts();

  // Reset filters function
  const resetFilters = () => {
    setSelectedCategory("All");
    setSortBy("default");
    setSearchQuery("");
    setPriceRange([0, 10000]);
    setSelectedSizes([]);
  };

  const filteredAndSortedProducts = getFilteredProducts();

  return (
    <motion.div
      className="mx-auto max-w-[1800px]"
      initial="hidden"
      animate="visible"
      variants={pageTransition}
    >




      {/* Second Component for hero section that we want to add .... */}


      <div className="mt-10">
        <FashionCarousel />
      </div>

      {/* <BackgroundLines className="relative flex items-center justify-center w-full flex-col px-4 py-16 overflow-hidden"> */}
      {/* <motion.div
          variants={heroTextVariants}
          className="relative z-10"
        > */}
      {/* <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-100 dark:to-neutral-400 text-4xl md:text-6xl lg:text-8xl font-sans py-8 md:py-12 font-bold tracking-tight">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Rajwadi{" "}
            </motion.span>
            <motion.span
              className="text-red-400 inline-block"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Poshaak
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              , <br className="md:hidden" />
              <span className="mt-4">पधारो म्हारे देश।</span>
            </motion.span>
          </h2> */}

      {/* <AnimatePresence mode="wait">
            <motion.p
              key={currentQuoteIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl font-semibold mx-auto text-xl md:text-2xl text-neutral-700 dark:text-neutral-300 text-center mt-6"
            >
              {quotes[currentQuoteIndex]}
            </motion.p>
          </AnimatePresence> */}
      {/* </motion.div> */}

      {/* Decorative elements */}
      {/* <motion.div
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="absolute top-10 left-10 transform rotate-45">
            <Sparkles className="w-6 h-6 text-red-400" />
          </div>
          <div className="absolute bottom-10 right-10 transform -rotate-45">
            <Sparkles className="w-6 h-6 text-red-400" />
          </div>
        </motion.div> */}
      {/* </BackgroundLines> */}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="w-full py-16 bg-gradient-to-b from-transparent to-neutral-50 dark:to-neutral-900"
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold max-w-7xl mx-auto relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-200 dark:via-neutral-100 dark:to-neutral-300">
              Buy amazing products <div className="-mt-10">
                <br /> with{" "}
                <Cover>
                  <span className="text-red-400">lightning-fast delivery</span>
                </Cover>
              </div>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mt-4 text-neutral-600 dark:text-neutral-400">
              Shop now and experience speed like never before!
            </p>
          </motion.div>

          <motion.div
            className="relative h-[600px] w-full rounded-2xl overflow-hidden bg-transparent"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <EarthComponent />
          </motion.div>
        </div>
      </motion.div>


      {/* Third Component */}

      <AppleCardsCarouselDemo />

      <div className="flex flex-col lg:flex-row gap-8 px-4 sm:px-6 lg:px-8 py-12">
        <motion.aside
          ref={filterRef}
          className={`lg:w-64 flex-shrink-0 transition-all duration-300 ${isScrolled ? "lg:sticky lg:top-4" : ""
            }`}
          style={{
            position: isScrolled ? "sticky" : "relative",
            top: isScrolled ? "1rem" : "0",
            height: "fit-content",
            opacity: showFilters ? 1 : 0.5,
            transform: `translateY(${showFilters ? "0" : "-1rem"})`
          }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg p-6">
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
              // @ts-ignore
              onReset={resetFilters}
            />
          </div>
        </motion.aside>

        <motion.main
          className="flex-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-lg">
              Found {filteredAndSortedProducts.length} products
              {searchQuery && (
                <span className="font-medium text-neutral-900 dark:text-neutral-100">
                  {" "}for "{searchQuery}"
                </span>
              )}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            variants={pageTransition}
          >
            <AnimatePresence mode="wait">
              {isLoading ? (
                Array.from({ length: PRODUCTS_PER_PAGE }).map((_, i) => (
                  <motion.div
                    key={`skeleton-${i}`}
                    variants={productCardVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
                    <ProductSkeleton />
                  </motion.div>
                ))
              ) : (
                filteredAndSortedProducts.map((product) => (
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
                      // @ts-ignore
                      image={[`https://picsum.photos/500?random=${product.id}`]}
                      className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    />
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </motion.div>

          {filteredAndSortedProducts.length === 0 && !isLoading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <p className="text-xl text-neutral-600 dark:text-neutral-400">
                No products found matching your criteria
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                  setPriceRange([0, 10000]);
                  setSelectedSizes([]);
                }}
                className="mt-4 px-6 py-2 bg-red-400 text-white rounded-lg hover:bg-red-500 transition-colors duration-300"
              >
                Reset Filters
              </button>
            </motion.div>
          )}
        </motion.main>
      </div>

      <motion.div
        className="mt-16 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
      >
        <div className="relative">
          {/* Enhanced Footer with animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Footer />
          </motion.div>

          {/* Scroll to top button */}
          <AnimatePresence>
            {isScrolled && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-8 right-8 p-4 bg-red-400 text-white rounded-full shadow-lg hover:bg-red-500 transition-colors duration-300 z-50"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Loading overlay */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-16 h-16 border-4 border-red-400 border-t-transparent rounded-full"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
