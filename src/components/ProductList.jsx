import React, { useState } from 'react';
import ProductCard from './ProductCard';
import ImageModal from './ImageModal';
import { productsData } from '../data';
import './ProductList.css';


const ProductList = ({ products = productsData, t }) => {
  const [modalData, setModalData] = useState(null);

  const openModal = (product, clickedSrc) => {
    setModalData({
      allImages: product.images,
      currentSrc: clickedSrc
    });
  };

  const closeModal = () => setModalData(null);

  return (
    <>
      {/* Container with equal left/right padding and center alignment */}
      <div className="w-full max-w-[1400px] mx-auto px-8 py-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product, idx) => (
            <ProductCard
              key={product.id}
              product={product}
              t={t}
              openModal={openModal}
            />
          ))}
        </div>
      </div>
      <ImageModal modalData={modalData} onClose={closeModal} />
    </>
  );
};

export default ProductList;