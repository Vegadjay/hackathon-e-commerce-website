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

      <div className="mt-10">
        <FashionCarousel />
      </div>


      {/* second component */}

      <Earthcomponent />

      {/* Third Component */}

      <AppleCardsCarouselDemo />

      {/* Fourth Fiter component */}

      <Filtercomponent />

      
    </motion.div>
  );
}
