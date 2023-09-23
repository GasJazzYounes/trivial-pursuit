import React from 'react';

function CategoryDropdown({ categories, selectedCategory, onCategoryChange }) {
  return (
    <>
      <select value={selectedCategory} onChange={(e) => onCategoryChange(e.target.value)}>
        <option value="" selected disabled>Select a category</option>
        {categories.map(category => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </>
  );
}

export default CategoryDropdown;
