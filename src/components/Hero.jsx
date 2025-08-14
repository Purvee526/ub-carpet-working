// src/components/Hero.jsx

import React from 'react';
import './Hero.css';

// Бүх товчлуурын мэдээллийг нэг array-д нэгтгэе
const heroButtons = [
  { text: 'АЛТАНБУЛАГ', type: 'brand' },
  { text: 'САЯН БРЭНД', type: 'brand' },
  { text: 'БОГД БРЭНД', type: 'brand' },
  { text: 'АЛТАНӨРГӨӨ', type: 'brand' },
  { text: 'УЛААНБААТАР', type: 'brand' },
  { text: 'ЗАГВАРЫН ТӨРӨЛ', type: 'sort' }
];

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="container">
        <div className="hero-content">
          <h1>Чамин тансаг хээгээр танд зориулан урлав.</h1>
          <p>ЦЭВЭР ХОНИНЫ НООСОН ХИВС</p>
        </div>

        {/* === БҮХ ТОВЧЛУУРЫГ АГУУЛАХ ГАНЦХАН DIV === */}
       <div className="hero-buttons-container">
        {heroButtons.map((buttonInfo) => (
          <button
            key={buttonInfo.text}
            // БҮХ ТОВЧЛУУРТ НЭГ ИЖИЛ КЛАСС НЭР ӨГНӨ
            className="brand-button"
          >
            {buttonInfo.text}
            
            {/* Хэрэв эрэмбэлэх товчлуур (type === 'sort') бол сумыг харуулна */}
            {buttonInfo.type === 'sort' && <span className="icon">↑↓</span>}
          </button>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Hero;