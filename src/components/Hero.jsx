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
          {heroButtons.map((buttonInfo, index) => (
            <button
              key={index}
              // Төрлөөс нь хамаарч өөр өөр класс нэр өгнө
              className={buttonInfo.type === 'sort' ? 'sort-button' : 'brand-button'}
            >
              {buttonInfo.text}
              {/* Хэрэв эрэмбэлэх товчлуур бол сумыг нь нэмж харуулна */}
              {buttonInfo.type === 'sort' && <span className="sort-arrows">↑↓</span>}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;