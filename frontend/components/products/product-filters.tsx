// todo: In this code error is occur that is size error while that size is come than error is gone..
// todo: Go throw one this this full code

"use client";

import { useState } from "react";
import { products } from "@/lib/data";
import { motion } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Search, X } from "lucide-react";

interface ProductFiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  sortBy: string;
  onSortChange: (value: string) => void;
  searchQuery: string;
  onSearchChange: (value: string) => void;
  priceRange: number[];
  onPriceRangeChange: (range: number[]) => void;
  selectedSizes: string[];
  onSizesChange: (sizes: string[]) => void;
  className?: string;
}

export function ProductFilters({
  selectedCategory,
  onCategoryChange,
  sortBy,
  onSortChange,
  searchQuery,
  onSearchChange,
  priceRange,
  onPriceRangeChange,
  selectedSizes,
  onSizesChange,
  className = "",
}: ProductFiltersProps) {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchTerm, setSearchTerm] = useState("");
  const [localPriceRange, setLocalPriceRange] = useState([0, 10000]);

  const uniqueCategories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];
  const uniqueSizes = Array.from(new Set(products.flatMap((p) => p.sizes || [])));
  
  const minPrice = Math.min(...products.map(p => p.price));
  const maxPrice = Math.max(...products.map(p => p.price));

  const handleCategoryChange = (category: string) => {
    onCategoryChange(category);
    filterProducts(category, searchTerm, localPriceRange, selectedSizes);
  };


  const handleSortChange = (value: string) => {
    onSortChange(value);
    const sortedProducts = [...filteredProducts];
    if (value === "price-asc") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (value === "price-desc") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    setFilteredProducts(sortedProducts);
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    filterProducts(selectedCategory, term, localPriceRange, selectedSizes);
  };

  const handlePriceRangeChange = (range: number[]) => {
    setLocalPriceRange(range);
    filterProducts(selectedCategory, searchTerm, range, selectedSizes);
  };

  const handleSizeToggle = (size: string) => {
    const updatedSizes = selectedSizes.includes(size)
      ? selectedSizes.filter(s => s !== size)
      : [...selectedSizes, size];
    onSizesChange(updatedSizes);
    filterProducts(selectedCategory, searchTerm, localPriceRange, updatedSizes);
  };

  const filterProducts = (
    category: string,
    search: string,
    price: number[],
    sizes: string[]
  ) => {
    let filtered = products;

    if (category !== "All") {
      filtered = filtered.filter((product) => product.category === category);
    }

    if (search) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    filtered = filtered.filter(
      (product) => product.price >= price[0] && product.price <= price[1]
    );

    if (sizes.length > 0) {
      filtered = filtered.filter((product) =>
        sizes.some(size => product.sizes?.includes(size))
      );
    }

    setFilteredProducts(filtered);
  };

  const hasActiveFilters = 
    selectedCategory !== "All" ||
    searchQuery !== "" ||
    priceRange[0] !== minPrice ||
    priceRange[1] !== maxPrice ||
    selectedSizes.length > 0 ||
    sortBy !== "default";

  return (
    <div className={`space-y-6 ${className}`}>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium">Search</h3>
          {searchQuery && (
            <button
              onClick={() => onSearchChange("")}
              className="text-sm text-neutral-500 hover:text-neutral-700"
            >
              Clear
            </button>
          )}
        </div>
         <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-neutral-500" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full rounded-md border pl-8 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange("")}
              className="absolute right-2 top-2.5"
            >
              <X className="h-4 w-4 text-neutral-500 hover:text-neutral-700" />
            </button>
          )}
        </div>
      </div>

      {/* Categories */}
       <div className="space-y-2">
        <h3 className="text-sm font-medium">Categories</h3>
        <div className="space-y-1">
          {uniqueCategories.map((category) => (
            <motion.button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`w-full text-left px-3 py-1.5 rounded-md text-sm transition-colors ${
                selectedCategory === category
                  ? "bg-red-100 text-red-900"
                  : "hover:bg-neutral-100"
              }`}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>


      {/* Price Range */}
      <div className="space-y-2">
          <h3 className="text-sm font-medium">Price Range</h3>
          <div className="px-2">
            <Slider
              defaultValue={[minPrice, maxPrice]}
              min={minPrice}
              max={maxPrice}
              step={100}
              value={priceRange}
              onValueChange={onPriceRangeChange}
              className="w-full"  
            />
            <div className="mt-2 flex items-center justify-between text-sm text-neutral-600">
              <span>₹{priceRange[0]}</span>
              <span>₹{priceRange[1]}</span>
            </div>
          </div>
        </div>


      {/* Sizes */}
      {uniqueSizes.length > 0 && (
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Sizes</h3>
          <div className="space-y-2">
            {uniqueSizes.map((size) => (
              <div key={size} className="flex items-center space-x-2">
                <Checkbox
                  id={`size-${size}`}
                  checked={selectedSizes.includes(size)}
                  onCheckedChange={() => handleSizeToggle(size)}
                />
                <label
                  htmlFor={`size-${size}`}
                  className="text-sm text-neutral-600"
                >
                  {size}
                </label>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Sort By</h3>
        <select
          value={sortBy}
          onChange={(e) => handleSortChange(e.target.value)}
          className="w-full rounded-full border bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          <option value="default">Default</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
}