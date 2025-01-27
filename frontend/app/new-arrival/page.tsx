"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { ProductCard } from "@/components/ui/product-card";
import { ProductFilters } from "@/components/products/product-filters";
import { ProductSkeleton } from "@/components/products/product-skeleton";

interface Product {
  _id: string;
  name: string;
  description?: string;
  category: string;
  price: number;
  size?: string[];
  image?: string;
}

const CategoryProductListingPage = () => {
  const searchParams = useSearchParams();
  const categoryFromURL = searchParams.get("category");

  const [selectedCategory, setSelectedCategory] = useState(categoryFromURL || "All");
  const [sortBy, setSortBy] = useState("default");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [allProducts, setAllProducts] = useState<Product[]>([]);

  // Mobile and Responsive Checks
  useEffect(() => {
    const checkMobileSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobileSize();
    window.addEventListener('resize', checkMobileSize);

    return () => {
      window.removeEventListener('resize', checkMobileSize);
    };
  }, []);

  // Update Selected Category from URL
  useEffect(() => {
    setSelectedCategory(categoryFromURL || "All");
  }, [categoryFromURL]);

  // Scroll and Mobile Filter Handling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      if (isMobile) {
        setShowFilters(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  // Fetch Products
  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await fetch('/api/product');
        const data = await response.json();

        const productsArray = Array.isArray(data)
          ? data
          : data.data
            ? data.data
            : [];

        const productsToSet = categoryFromURL
          ? productsArray.filter((product: Product) => product.category === categoryFromURL)
          : productsArray;

        setAllProducts(productsArray);
        setFilteredProducts(productsToSet);
      } catch (error) {
        console.error("Error fetching products:", error);
        setAllProducts([]);
        setFilteredProducts([]);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [categoryFromURL]);

  // Apply Filters and Sorting
  useEffect(() => {
    const applyFilters = () => {
      let result = [...allProducts];

      if (selectedCategory !== "All") {
        result = result.filter(product => product.category === selectedCategory);
      }

      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        result = result.filter(product =>
          product.name.toLowerCase().includes(query) ||
          product.description?.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query)
        );
      }

      result = result.filter(product =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
      );

      if (selectedSizes.length > 0) {
        result = result.filter(product =>
          product.size?.some((size: string) => selectedSizes.includes(size))
        );
      }

      switch (sortBy) {
        case "price-asc":
          result.sort((a, b) => a.price - b.price);
          break;
        case "price-desc":
          result.sort((a, b) => b.price - a.price);
          break;
        case "name-asc":
          result.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case "name-desc":
          result.sort((a, b) => b.name.localeCompare(a.name));
          break;
      }

      setFilteredProducts(result);
    };

    applyFilters();
  }, [selectedCategory, sortBy, searchQuery, priceRange, selectedSizes, allProducts]);

  // Reset Filters
  const resetFilters = () => {
    setSortBy("default");
    setSearchQuery("");
    setPriceRange([0, 10000]);
    setSelectedSizes([]);
    setSelectedCategory("All");
    setShowFilters(false);
  };

  // Toggle Filters (Mobile)
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  // Animation Variants
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

  return (
    <div className="relative flex flex-col lg:flex-row gap-8 px-4 sm:px-6 lg:px-8 py-12">
      {/* Mobile Filter Toggle Button */}
      {isMobile && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
          <button
            onClick={toggleFilters}
            className="bg-red-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-red-600 transition-colors"
          >
            {showFilters ? "Hide Filters" : "Show Filters"}
          </button>
        </div>
      )}

      {/* Mobile Filters Overlay */}
      {isMobile && showFilters && (
        <motion.div
          className="fixed inset-0 bg-black/50 z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={toggleFilters}
        >
          <motion.aside
            className="absolute bottom-0 w-full bg-white dark:bg-neutral-900 rounded-t-2xl p-6 max-h-[80vh] overflow-y-auto"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ type: "spring", damping: 15, stiffness: 200 }}
            onClick={(e) => e.stopPropagation()}
          >
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
          </motion.aside>
        </motion.div>
      )}

      {/* Desktop Filters Sidebar */}
      {!isMobile && (
        <motion.aside
          className={`lg:w-64 flex-shrink-0 transition-all duration-300 ${isScrolled ? "lg:sticky lg:top-4" : ""}`}
          style={{
            position: isScrolled ? "sticky" : "relative",
            top: isScrolled ? "1rem" : "0",
            height: "fit-content"
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
      )}

      {/* Main Product Listing */}
      <motion.main
        className="flex-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {/* Products Count and Search Info */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-neutral-600 dark:text-neutral-400 text-lg">
            Found {filteredProducts.length} products in {selectedCategory}
            {searchQuery && (
              <span className="font-medium text-neutral-900 dark:text-neutral-100">
                {" "}for "{searchQuery}"
              </span>
            )}
          </p>
        </motion.div>

        {/* Product Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={pageTransition}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence mode="wait">
            {isLoading ? (
              Array.from({ length: 6 }).map((_, i) => (
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
              filteredProducts.map((product) => (
                <motion.div
                  key={product._id}
                  variants={productCardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  className="transform-gpu"
                >
                  {/* @ts-ignore */}
                  <ProductCard {...product} />
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </motion.div>

        {/* No Products Found Message */}
        {filteredProducts.length === 0 && !isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <p className="text-xl text-neutral-600 dark:text-neutral-400">
              No products found matching your criteria
            </p>
            <button
              onClick={resetFilters}
              className="mt-4 px-6 py-2 bg-red-400 text-white rounded-lg hover:bg-red-500 transition-colors duration-300"
            >
              Reset Filters
            </button>
          </motion.div>
        )}
      </motion.main>
    </div>
  );
};

export default CategoryProductListingPage;  