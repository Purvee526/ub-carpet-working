import React, { useState } from 'react';
import './ProductCard.css';

const ArrowLeftCircle = () => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
         strokeWidth={1.5}
         stroke="currentColor"
        className="icon"
    >
        <path 
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" 
        />
    </svg>
);

// БАРУУН ТИЙШ ХАРСАН СУМНЫ КОМПОНЕНТ
const ArrowRightCircle = () => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={1.5}
         stroke="currentColor"
        className="icon" // "class"-г "className" болгоод, "icon" болгосон
    >
        <path 
            strokeLinecap="round" // "stroke-linecap"-г "strokeLinecap" болгосон
            strokeLinejoin="round" // "stroke-linejoin"-г "strokeLinejoin" болгосон
            d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" 
        />
    </svg>
);

const ProductCard = ({ product }) => {
  // Хамгаалалт:
  if (!product || !product.images || product.images.length === 0) {
    return <div className="card-container">Мэдээлэл олдсонгүй.</div>;
  }

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  
  // Одоо харагдаж буй зургийн мэдээлэл
  const currentImageInfo = product.images[currentIndex];

  const handlePrev = (e) => {
    e.stopPropagation();
    const isFirst = currentIndex === 0;
    const newIndex = isFirst ? product.images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    const isLast = currentIndex === product.images.length - 1;
    const newIndex = isLast ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  
  // Өнгөний дөрвөлжин дээр дарахад тохирох зургийн индексийг олно
  const handleColorSelect = (color) => {
    const newIndex = product.images.findIndex(image => image.color === color);
    if (newIndex !== -1) {
        setCurrentIndex(newIndex);
    }
  };

  return (
    <div className="card-container">
      <div className="card-image-wrapper">
        <img
          src={currentImageInfo.src}
          alt={`${product.brand}`}
          className="card-image"
        />
        <div className="card-arrows">
          <button className="arrow-button" onClick={handlePrev}><ArrowLeftCircle /></button>
          <button className="arrow-button" onClick={handleNext}><ArrowRightCircle/></button>
        </div>
      </div>
      
      <div className="card-info">
        <h3 className="card-brand">{product.brand}</h3>
        <p className="card-details">Код: {product.code} / Төрөл: {product.type}</p>
        
        <div className="card-sizes">
          <span className="card-label">Хэмжээ:</span>
          <div className="card-sizes-list">
            {product.sizes.map(size => (
              <button
                key={size}
                className={`size-button ${selectedSize === size ? 'active' : ''}`}
                
                // ======> ЯГ ЭНЭ ХЭСГИЙГ Л ӨӨРЧИЛСӨН <======
                onClick={() => {
                  setSelectedSize(size); // Хуучин үйлдэл хэвээрээ
                  const newIndex = product.images.findIndex(image => image.size === size); // ШИНЭ: Тухайн хэмжээтэй зургийг хайж олох
                  if (newIndex !== -1) {
                    setCurrentIndex(newIndex); // ШИНЭ: Олдсон зургийн индексээр зургийг солих
                  }
                }}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        
        <div className="card-colors">
          <span className="card-label">Өнгөний сонголт:</span>
          <div className="card-colors-list">
            {product.colors.map((color) => (
              <span
                key={color}
                className={`color-swatch ${currentImageInfo.color === color ? 'active' : ''}`}
                style={{ backgroundColor: color }}
                onClick={() => handleColorSelect(color)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;