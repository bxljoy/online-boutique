"use client";

import { useState, useEffect } from 'react';
import ProductCard from '@/components/ProductCard';
import SearchBar from '@/components/SearchBar';
import FilterOptions from '@/components/FilterOptions';
import SortOptions from '@/components/SortOptions';

const products = [
  { id: 1, name: 'Glitter Nail Polish Set', price: 19.99, image: 'https://source.unsplash.com/random/300x300?nail+polish', category: 'Nail Polish' },
  { id: 2, name: 'Nail Art Brush Kit', price: 24.99, image: 'https://source.unsplash.com/random/300x300?nail+brush', category: 'Tools' },
  { id: 3, name: 'Cuticle Oil Pen', price: 9.99, image: 'https://source.unsplash.com/random/300x300?cuticle+oil', category: 'Care' },
  { id: 4, name: 'Nail Stamping Plate Set', price: 29.99, image: 'https://source.unsplash.com/random/300x300?nail+stamping', category: 'Tools' },
  { id: 5, name: 'LED Nail Lamp', price: 39.99, image: 'https://source.unsplash.com/random/300x300?nail+lamp', category: 'Equipment' },
  { id: 6, name: 'Nail File and Buffer Set', price: 14.99, image: 'https://source.unsplash.com/random/300x300?nail+file', category: 'Tools' },
];

const categories = ['Nail Polish', 'Tools', 'Care', 'Equipment'];

export default function ProductsPage() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState('');

  useEffect(() => {
    let result = [...products];

    // Apply search filter
    if (searchQuery) {
      result = result.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply category filter
    if (selectedCategories.length > 0) {
      result = result.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }

    // Apply sorting
    if (sortOption) {
      const [field, direction] = sortOption.split('-');
      result.sort((a, b) => {
        if (field === 'price') {
          return direction === 'asc' ? a.price - b.price : b.price - a.price;
        } else if (field === 'name') {
          return direction === 'asc'
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name);
        }
        return 0;
      });
    }

    setFilteredProducts(result);
  }, [searchQuery, selectedCategories, sortOption]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFilter = (categories: string[]) => {
    setSelectedCategories(categories);
  };

  const handleSort = (option: string) => {
    setSortOption(option);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <div className="w-full md:w-1/4">
          <SearchBar onSearch={handleSearch} />
          <div className="mt-8">
            <FilterOptions categories={categories} onFilterChange={handleFilter} />
          </div>
          <div className="mt-8">
            <SortOptions onSortChange={handleSort} />
          </div>
        </div>
        <div className="w-full md:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}