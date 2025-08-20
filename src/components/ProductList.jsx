// src/components/ProductList.jsx
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import ImageModal from './ImageModal'; // ImageModal-г импортлоно
import { productsData } from '../data';

const ProductList = () => {
  // Modal-г удирдах state
  const [modalData, setModalData] = useState(null);

  // ProductCard-аас мэдээлэл ирэхэд Modal-г нээх функц
  const openModal = (product, clickedSrc) => {
    setModalData({
      allImages: product.images,
      currentSrc: clickedSrc
    });
  };

  // Modal-г хаах функц
  const closeModal = () => {
    setModalData(null);
  };

  return (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
        {productsData.map(product => (
          <ProductCard 
            key={product.id} 
            product={product}
            // "Зураг дээр дарагдвал openModal функцийг дуудаарай" гэж хэлж байна
            onImageClick={(clickedSrc) => openModal(product, clickedSrc)}
          />
        ))}
      </div>
      
      {/* Modal-г энд дуудаж, удирдлагыг нь дамжуулна */}
      <ImageModal modalData={modalData} onClose={closeModal} />
    </>
  );
};

export default ProductList;