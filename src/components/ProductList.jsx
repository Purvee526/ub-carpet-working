// src/components/ProductList.jsx
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import ImageModal from './ImageModal';
import { productsData } from '../data';

const ProductList = () => {
  const [modalData, setModalData] = useState(null);

  const openModal = (product, clickedSrc) => {
    setModalData({
      allImages: product.images,
      currentSrc: clickedSrc
    });
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <>
      {/* Responsive container болон grid */}
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {productsData.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onImageClick={(clickedSrc) => openModal(product, clickedSrc)}
            />
          ))}
        </div>
      </div>
      <ImageModal modalData={modalData} onClose={closeModal} />
    </>
  );
};

export default ProductList;