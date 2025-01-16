"use client"

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { ProductCard } from "@/components/ui/product-card";
import { ProductFilters } from "@/components/products/product-filters";
import { ProductSkeleton } from "@/components/products/product-skeleton";
import { products } from "@/lib/data";

const PRODUCTS_PER_PAGE = 15;

const Filtercomponent = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [sortBy, setSortBy] = useState("default");
    const [searchQuery, setSearchQuery] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [priceRange, setPriceRange] = useState([0, 10000]);
    const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
    const [isScrolled, setIsScrolled] = useState(false);
    const [showFilters, setShowFilters] = useState(true);

    const filterRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, [selectedCategory, sortBy, searchQuery, priceRange, selectedSizes]);

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
        <div className="flex flex-col lg:flex-row gap-8 px-4 sm:px-6 lg:px-8 py-12">
            <motion.aside
                ref={filterRef}
                className={`lg:w-64 flex-shrink-0 transition-all duration-300 ${isScrolled ? "lg:sticky lg:top-4" : ""}`}
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
                    initial="hidden"
                    animate="visible"
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

export default Filtercomponent;