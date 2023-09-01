import React from 'react';

function CategoryDropdown({ categories, selectedCategory, onCategoryChange }) {
  return (
    <div>
      <select value={selectedCategory} onChange={(e) => onCategoryChange(e.target.value)}>
        <option value="">Select a category</option>
        {categories.map(category => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategoryDropdown;
