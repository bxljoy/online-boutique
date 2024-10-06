"use client";

import { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

interface FilterOptionsProps {
  categories: string[];
  onFilterChange: (selectedCategories: string[]) => void;
}

export default function FilterOptions({ categories, onFilterChange }: FilterOptionsProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCategoryChange = (category: string) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];
    
    setSelectedCategories(updatedCategories);
    onFilterChange(updatedCategories);
  };

  return (
    <div className="space-y-2">
      <h3 className="font-semibold mb-2">Filter by Category:</h3>
      {categories.map((category) => (
        <div key={category} className="flex items-center space-x-2">
          <Checkbox
            id={category}
            checked={selectedCategories.includes(category)}
            onCheckedChange={() => handleCategoryChange(category)}
          />
          <Label htmlFor={category}>{category}</Label>
        </div>
      ))}
    </div>
  );
}