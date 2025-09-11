import React from 'react';
import './FeaturedBrands.css';

const FeaturedBrands = ({ t }) => {
  const text = t.featuredBrandsText || "";

  return (
    <div className="flex flex-wrap justify-center gap-2 py-1 bg-blue-100">
      <div className="ticker-wrap">
        <div className="ticker-move">
          <div className="ticker-item">{text}</div>
          <div className="ticker-item">{text}</div>
          <div className="ticker-item">{text}</div>
          <div className="ticker-item">{text}</div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBrands;