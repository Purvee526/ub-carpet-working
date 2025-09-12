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
      {/* Container with center alignment */}
      <div className="w-full max-w-[1400px] mx-auto">
        <div className="product-list">
          {products.map((product) => (
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