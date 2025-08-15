// src/components/ProductList.jsx

import React from 'react';
import ProductCard from './ProductCard';
import { productsData } from '../data'; // <-- data.js-ээс зөв нэрээр нь импортлоно

const ProductList = () => {
  return (
    // Энд Grid эсвэл Flexbox-оо ашиглаж болно
    
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
     
      {productsData.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;