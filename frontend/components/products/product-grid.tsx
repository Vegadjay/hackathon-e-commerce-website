"use client"

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { ProductCard } from "@/components/ui/product-card";
import { ProductFilters } from "@/components/products/product-filters";
import { ProductSkeleton } from "@/components/products/product-skeleton";
import { products } from "@/lib/data";
import Footer from "@/components/layout/footer";
import FashionCarousel from "@/components/products/product-corosal";
import { AppleCardsCarouselDemo } from "@/app/product/component/apple-card-corosal";
import RedesignedLinkPreviewDemo from "@/components/ui/footer-link";
import Earthcomponent from "@/components/earthcomponent/earth-component";
import Filtercomponent from "@/components/filter-component/filter";

const PRODUCTS_PER_PAGE = 15;

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


export function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showFilters, setShowFilters] = useState(true);

  const filterRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY.current) {
        setShowFilters(false);
      } else {
        setShowFilters(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    return products.filter(product => {
      if (selectedCategory !== "All" && product.category !== selectedCategory) {
        return false;
      }

      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const searchMatch =
          product.name.toLowerCase().includes(query) ||
          product.description?.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query);
        if (!searchMatch) return false;
      }

      if (product.price < priceRange[0] || product.price > priceRange[1]) {
        return false;
      }

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

      {/* here add two or more Component here ... */}

      {/* <Textanimation /> */}

      {/* Second Component for hero section that we want to add .... */}


      <div className="mt-10">
        <FashionCarousel />
      </div>


      {/* second component */}

      <Earthcomponent />


      <AppleCardsCarouselDemo />

      {/* Fourth Fiter component */}

      <Filtercomponent />

      <motion.div
        className="mt-16 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
      >
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
          </motion.div>
          <RedesignedLinkPreviewDemo />
          <Footer />


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
