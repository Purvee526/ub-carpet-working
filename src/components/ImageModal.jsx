// src/components/ImageModal.jsx
import React, { useState, useEffect } from 'react'; // <--- ЯГ ИНГЭЖ ЗАСНА
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import './ImageModal.css';

const ImageModal = ({ modalData, onClose }) => {
  // modalData байхгүй бол юу ч харуулахгүй
  if (!modalData) {
    return null;
  }

  const { allImages, currentSrc } = modalData;
  const [currentIndex, setCurrentIndex] = useState(0);

  // Modal нээгдэх болгонд дарсан зургийг нь эхэлж харуулах
  useEffect(() => {
    const initialIndex = allImages.findIndex(img => img.src === currentSrc);
    setCurrentIndex(initialIndex !== -1 ? initialIndex : 0);
  }, [currentSrc, allImages]);
  

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % allImages.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex - 1 + allImages.length) % allImages.length);
  };

  // Thumbnail дээр дарахад том зургийг солих
  const handleThumbnailClick = (index, e) => {
    e.stopPropagation();
    setCurrentIndex(index);
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      {/* Хаах товч */}
      <button className="close-button" onClick={onClose}>×</button>
      
      {/* Зүүн сум */}
      <button className="modal-arrow prev" onClick={handlePrev}>‹</button>
      
      {/* Голын контент (Зураг ба thumbnail) */}
      <div className="modal-content-wrapper" onClick={(e) => e.stopPropagation()}>
        <div className="main-image-container">
          <Zoom>
            <img 
              src={allImages[currentIndex].src} 
              alt="Enlarged view" 
              className="main-image"
            />
          </Zoom>
        </div>

        <div className="thumbnail-container">
          {allImages.map((image, index) => (
            <div 
              key={index}
              className={`thumbnail-item ${index === currentIndex ? 'active' : ''}`}
              onClick={(e) => handleThumbnailClick(index, e)}
            >
              <img src={image.src} alt={`Thumbnail ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      
      {/* Баруун сум */}
      <button className="modal-arrow next" onClick={handleNext}>›</button>
    </div>
  );
};

export default ImageModal;