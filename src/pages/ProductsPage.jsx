// src/pages/ProductsPage.jsx
import React, { useState } from 'react';
import { carpetData } from '../data.js';

// CarpetCard компонент
function CarpetCard({ carpet }) {
  const [selectedSize, setSelectedSize] = useState(carpet.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(carpet.colors[0]);

  return (
    <div className="carpet-card">
      <div className="card-image-wrapper">
        <img src={carpet.imageUrl} alt={carpet.name} className="card-image" />
      </div>
      <div className="card-content">
        <h3 className="card-title">{carpet.name}</h3>
        <div className="options-group">
          <strong>Хэмжээ:</strong>
          <div className="checkbox-container">
            {carpet.sizes.map(size => (
              <label key={size} className={`checkbox-label ${selectedSize === size ? 'checked' : ''}`}>
                <input type="radio" name={`size-${carpet.id}`} value={size} checked={selectedSize === size} onChange={() => setSelectedSize(size)} />
                <span>{size}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="options-group">
          <strong>Өнгө:</strong>
          <div className="checkbox-container">
            {carpet.colors.map(color => (
              <label key={color} className={`checkbox-label ${selectedColor === color ? 'checked' : ''}`}>
                <input type="radio" name={`color-${carpet.id}`} value={color} checked={selectedColor === color} onChange={() => setSelectedColor(color)} />
                <span>{color}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ProductsPage компонент
function ProductsPage() {
    const toKebabCase = (str) => str.toLowerCase().replace(/\s+/g, '-');
    return (
        <div className="page-container">
          {/* Энд Header-ийг дуудах шаардлагагүй */}
          <main>
            {carpetData.map((categoryData, index) => (
              <section key={index} id={toKebabCase(categoryData.category)} className="category-section">
                <h2 className="category-title">{categoryData.category}</h2>
                <div className="carpet-grid">
                  {categoryData.items.map((carpet) => (<CarpetCard key={carpet.id} carpet={carpet} />))}
                </div>
              </section>
            ))}
          </main>
          {/* Энд Footer-ийг дуудах шаардлагагүй */}
        </div>
    );
}

export default ProductsPage;