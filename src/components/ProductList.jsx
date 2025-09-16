import React, { useState } from 'react';
import ProductCard from './ProductCard';
import ImageModal from './ImageModal';
import { productsData } from '../data';
import './ProductList.css';

const ProductList = ({ products = productsData, t, selectedBrand }) => {
  const [modalData, setModalData] = useState(null);

  // Filter products by selected brand
  const filteredProducts = selectedBrand
    ? products.filter(p => p.brand === selectedBrand)
    : products;

  // Brand-аар бүлэглэх (filteredProducts-оор бүлэглэх нь чухал!)
  const grouped = filteredProducts.reduce((acc, product) => {
    (acc[product.brand] = acc[product.brand] || []).push(product);
    return acc;
  }, {});

  const openModal = (product, clickedSrc) => {
    setModalData({
      allImages: product.images,
      currentSrc: clickedSrc
    });
  };

  const closeModal = () => setModalData(null);

  return (
    <>
      <div className="w-full max-w-[1400px] mx-auto">
        {Object.entries(grouped).map(([brand, brandProducts]) => (
          <section key={brand} style={{ marginBottom: 32 }}>
            <h2 className="product-section-title">
              {t.brandNames?.[brand] || brand.toUpperCase()}
            </h2>
            <div className="product-list">
              {brandProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  t={t}
                  openModal={openModal}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
      <ImageModal modalData={modalData} onClose={closeModal} />
    </>
  );
};

export default ProductList;