import React, { useState } from 'react';
import ProductCard from './ProductCard';
import ImageModal from './ImageModal';
import { productsData } from '../data';

const ProductList = ({ products = productsData, t }) => {
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
      <div className="container mx-auto px-2 sm:px-0 my-5 w-full max-w-[1200px]">
  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
    {products.map((product, idx) => (
      <ProductCard
        key={idx}
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