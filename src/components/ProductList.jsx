// src/components/ProductList.jsx
import React from 'react';
import ProductCard from './ProductCard';

const ProductList = () => {
  return (
    // Энэ бол хамгийн зөв, энгийн арга
    <div className="grid grid-cols-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default ProductList;