// src/components/ProductCard.jsx

import React from 'react'; // <-- React-ийг заавал import хийнэ.
import carpetImage from '../assets/ABrgb11.jpg'; // <-- Зурагны замаа шалгаарай

// HeartIcon компонентыг зөв бичиглэлээр оруулсан
const HeartIcon = () => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-5 w-5" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor" 
        strokeWidth={1.5} // stroke-width -> strokeWidth
    >
        <path 
            strokeLinecap="round" // stroke-linecap -> strokeLinecap
            strokeLinejoin="round" // stroke-linejoin -> strokeLinejoin
            d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.636l-7.682-7.682a4.5 4.5 0 010-6.364z" 
        />
    </svg>
);

const ProductCard = () => {
  return (
    // Энд таны өмнөх зөв картын код орно
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
      <div className="w-full">
        <div className="relative group">
          <img
            src={carpetImage}
            alt="Хивсний зураг"
            className="w-full h-auto object-cover"
          />
          <div className="absolute top-2 right-2">
            <button className="p-1.5 rounded-full bg-white/50 text-gray-500 hover:text-red-500 transition">
              <HeartIcon />
            </button>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div>
          <h3 className="text-base font-bold text-gray-800">АЛТАНБУЛАГ ХИВС</h3>
          <p className="text-sm text-gray-500 mt-1">Код: AB725</p>
          <p className="text-sm text-gray-500">Төрөл: классик</p>
        </div>
        <div className="mt-4">
          <p className="text-sm font-medium">Хэмжээ:</p>
          <div className="flex flex-wrap gap-2 mt-1">
            <button className="text-sm border rounded px-3 py-1 hover:bg-gray-100">2x3м</button>
            <button className="text-sm border rounded px-3 py-1 hover:bg-gray-100">255x350</button>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-sm font-medium">Өнгөний сонголт: beige</p>
          <div className="flex items-center gap-2 mt-1">
            <span className="block h-5 w-5 rounded border border-gray-300 bg-teal-600"></span>
            <span className="block h-5 w-5 rounded border border-gray-300 bg-white ring-2 ring-gray-400"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;