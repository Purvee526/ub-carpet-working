// src/components/ProductCard.jsx
import React, { useState } from 'react';
import './ProductCard.css';

const ArrowLeftCircle = () => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon"> <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /> </svg> );
const ArrowRightCircle = () => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon"> <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /> </svg> );

// onImageClick гэдэг шинэ функц хүлээж авч байгааг анхаарна уу
const ProductCard = ({ product, onImageClick }) => {
  if (!product || !product.images || !product.images.length === 0) { return <div className="card-container">Мэдээлэл олдсонгүй.</div>; }

  const [selectedColor, setSelectedColor] = useState(product.images[0].color);
  const [selectedSize, setSelectedSize] = useState(product.images[0].size);
  
  let currentImageInfo = product.images.find(img => img.color === selectedColor && img.size === selectedSize) || product.images.find(img => img.color === selectedColor) || product.images[0];

  const handleColorSelect = (color) => setSelectedColor(color);
  const handleSizeSelect = (size) => setSelectedSize(size);

  const handleArrowClick = (direction, e) => {
    e.stopPropagation();
    const imagesWithSameColor = product.images.filter(img => img.color === selectedColor);
    if (imagesWithSameColor.length <= 1) return;
    const currentIndex = imagesWithSameColor.findIndex(img => img.src === currentImageInfo.src);
    const nextIndex = (currentIndex + (direction === 'next' ? 1 : -1) + imagesWithSameColor.length) % imagesWithSameColor.length;
    setSelectedSize(imagesWithSameColor[nextIndex].size);
  };
  
  return (
    <div className="card-container">
      {/* ======> ХОЛБОЛТ ХИЙГДСЭН <====== */}
      <div 
        className="card-image-wrapper cursor-pointer" 
        onClick={() => onImageClick(currentImageInfo.src)}
      >
        <img src={currentImageInfo.src} alt={product.brand} className="card-image" />
        <div className="card-arrows">
          <button className="arrow-button" onClick={(e) => handleArrowClick('prev', e)}><ArrowLeftCircle /></button>
          <button className="arrow-button" onClick={(e) => handleArrowClick('next', e)}><ArrowRightCircle/></button>
        </div>
      </div>
      
      <div className="card-info">
        {/* ... бусад мэдээлэл хэвээрээ ... */}
        <h3 className="card-brand">{product.brand}</h3>
        <p className="card-details">Код: {product.code} / Төрөл: {product.type}</p>
        <div className="card-sizes">
          <span className="card-label">Хэмжээ:</span>
          <div className="card-sizes-list">
            {product.sizes.map(size => ( <button key={size} className={`size-button ${selectedSize === size ? 'active' : ''}`} onClick={() => handleSizeSelect(size)}> {size} </button> ))}
          </div>
        </div>
        <div className="card-colors">
          <span className="card-label">Өнгөний сонголт:</span>
          <div className="card-colors-list">
            {product.colors.map((color) => ( <span key={color} className={`color-swatch ${selectedColor === color ? 'active' : ''}`} style={{ backgroundColor: color }} onClick={() => handleColorSelect(color)}></span> ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;