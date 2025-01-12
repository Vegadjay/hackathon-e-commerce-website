"use client";

import { useState, useCallback } from "react";
import { products } from "@/lib/data";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Search, X, ChevronDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Custom debounce hook
const useDebounce = (callback: Function, delay: number) => {
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  return useCallback(
    (...args: any[]) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      const newTimeoutId = setTimeout(() => {
        callback(...args);
      }, delay);

      setTimeoutId(newTimeoutId);
    },
    [callback, delay, timeoutId]
  );
};

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
  const [internalPriceRange, setInternalPriceRange] = useState(priceRange);

  const uniqueCategories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];
  const uniqueSizes = Array.from(new Set(products.flatMap((p) => p.sizes || [])));
  
  const minPrice = Math.min(...products.map(p => p.price));
  const maxPrice = Math.max(...products.map(p => p.price));

  const debouncedPriceRangeChange = useDebounce((range: number[]) => {
    onPriceRangeChange(range);
    filterProducts(selectedCategory, searchTerm, range, selectedSizes);
  }, 300);

  const handlePriceRangeChange = (range: number[]) => {
    setInternalPriceRange(range);
    debouncedPriceRangeChange(range);
  };

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

      {/* Categories Dropdown */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Categories</h3>
        <Select value={selectedCategory} onValueChange={handleCategoryChange}>
          <SelectTrigger className="w-full bg-white hover:bg-gray-50">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            {uniqueCategories.map((category) => (
              <SelectItem 
                key={category} 
                value={category}
                className="hover:bg-red-50 focus:bg-red-50 cursor-pointer"
              >
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
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
              value={internalPriceRange}
              onValueChange={handlePriceRangeChange}
              className="w-full"  
            />
            <div className="mt-2 flex items-center justify-between text-sm text-neutral-600">
              <span>₹{internalPriceRange[0]}</span>
              <span>₹{internalPriceRange[1]}</span>
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

      {/* Sort By */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Sort By</h3>
        <Select value={sortBy} onValueChange={handleSortChange}>
          <SelectTrigger className="w-full bg-white hover:bg-gray-50">
            <SelectValue placeholder="Choose sorting" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectItem value="default" className="hover:bg-red-50 focus:bg-red-50 cursor-pointer">
              Default
            </SelectItem>
            <SelectItem value="price-asc" className="hover:bg-red-50 focus:bg-red-50 cursor-pointer">
              Price: Low to High
            </SelectItem>
            <SelectItem value="price-desc" className="hover:bg-red-50 focus:bg-red-50 cursor-pointer">
              Price: High to Low
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}