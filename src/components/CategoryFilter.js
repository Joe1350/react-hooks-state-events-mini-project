import React from "react";

function CategoryFilter({ categories, selectedCategory, onSetCategory }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(
        cat => {
          return (
            <button
              key={cat}
              className={cat === selectedCategory ? "selected" : null}
              onClick={() => onSetCategory(cat)}
            >
              {cat}
            </button>
          )
        }
      )}
    </div>
  );
}

export default CategoryFilter;
