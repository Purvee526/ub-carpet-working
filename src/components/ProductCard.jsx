import React, { useState } from 'react';
import './ProductCard.css';

const ChevronLeftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
);
const ChevronRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
);

const ProductCard = ({ product }) => {
  const [imgIndex, setImgIndex] = useState(0);

  const handlePrev = () => {
    setImgIndex(prev => prev === 0 ? product.images.length - 1 : prev - 1);
  };

  const handleNext = () => {
    setImgIndex(prev => prev === product.images.length - 1 ? 0 : prev + 1);
  };

  return (
    <div className="card-container">
      {/* зурагны хэсэг */}
      <div className="card-image-wrapper">
        <img
          src={product.images[imgIndex]}
          alt={product.brand}
          className="card-image"
        />
      </div>
      <div className="card-arrows">
        <button className="arrow-button left-arrow" onClick={handlePrev}><ChevronLeftIcon /></button>
        <button className="arrow-button right-arrow" onClick={handleNext}><ChevronRightIcon /></button>
      </div>
      {/* Мэдээллийн хэсэг */}
      <div className="card-info">
        <h3 className="card-brand">{product.brand}</h3>
        <p className="card-details">Код: {product.code} / Төрөл: {product.type}</p>
        
        {/* Хэмжээний хэсэг */}
        <div className="card-sizes">
          <span className="card-label">Хэмжээ:</span>
          <div className="card-sizes-list">
            {product.sizes.map(size => (
              <button key={size} className="size-button">{size}</button>
            ))}
          </div>
        </div>

        {/* Өнгөний хэсэг */}
        <div className="card-colors">
          <span className="card-label">Өнгөний сонголт:</span>
          <div className="card-colors-list">
            {product.colors.map(color => (
              <span 
                key={color} 
                className="color-swatch"
                style={{ backgroundColor: color }} 
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;