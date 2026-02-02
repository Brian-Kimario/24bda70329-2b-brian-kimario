// app/page.tsx
"use client";

import { useState } from "react";
import { Product } from "@/types";
import { ProductCard } from "@/components/product-card";
import { SelectControl } from "@/components/select-control";

const products: Product[] = [
  { id: 1, name: "Laptop", price: 800, category: "electronics" },
  { id: 2, name: "Headphones", price: 120, category: "electronics" },
  { id: 3, name: "T-Shirt", price: 25, category: "clothing" },
  { id: 4, name: "Jeans", price: 60, category: "clothing" },
];

const categoryOptions = [
  { value: "all", label: "All Products" },
  { value: "electronics", label: "Electronics" },
  { value: "clothing", label: "Clothing" },
];

const sortOptions = [
  { value: "default", label: "Default" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
];

export default function HomePage() {
  const [filterCategory, setFilterCategory] = useState("all");
  const [sortBy, setSortBy] = useState("default");

  const filtered = products.filter((product) => {
    if (filterCategory === "all") return true;
    return product.category === filterCategory;
  });

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "price-asc") return a.price - b.price;
    if (sortBy === "price-desc") return b.price - a.price;
    return 0;
  });

  return (
    <main className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold text-center">
          Product Filter
        </h1>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <SelectControl
            selectLabel="Category"
            value={filterCategory}
            onValueChange={setFilterCategory}
            options={categoryOptions}
            placeholder="Select category"
          />
          <SelectControl
            selectLabel="Sort By"
            value={sortBy}
            onValueChange={setSortBy}
            options={sortOptions}
            placeholder="Select sorting"
          />
        </div>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          {sorted.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </main>
  );
}
