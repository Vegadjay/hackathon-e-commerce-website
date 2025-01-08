"use client";

import { useState } from "react";
import { products } from "@/lib/data";

interface ProductFiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  sortBy: string;
  onSortChange: (value: string) => void;
}

export function ProductFilters({
  selectedCategory,
  onCategoryChange,
  sortBy,
  onSortChange,
}: ProductFiltersProps) {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleCategoryChange = (category: string) => {
    onCategoryChange(category);

    if (category === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => product.category === category)
      );
    }
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

  const uniqueCategories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];

  return (
    <div>
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">

        <select
          value={selectedCategory}
          onChange={(e) => handleCategoryChange(e.target.value)}
          className="rounded-lg border bg-card px-4 py-2 text-sm"
        >
          {uniqueCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <select
          value={sortBy}
          onChange={(e) => handleSortChange(e.target.value)}
          className="rounded-lg border bg-card px-4 py-2 text-sm"
        >
          <option value="default">Sort by</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
}
