// src/data.js

// 1-р хивсний зургууд
import carpetAB848_1 from './assets/AB848-200x300.jpg';
import carpetAB848_2 from './assets/AB848-255x350.jpg';
import carpetAB848_3 from './assets/AB848-255x350r.jpg';
import carpetAB848_4 from './assets/AB848-255x350t.jpg';
import carpetAB848_5 from './assets/AB848-300x400.jpg'; 
import carpetAB848_6 from './assets/AB848-300x400r.jpg';
import carpetAB848_7 from './assets/AB848-300x400t.jpg'; 
import carpetAB848_8 from './assets/AB848-300x500.jpg';
import carpetAB848_9 from './assets/AB848-300x500r.jpg';
import carpetAB848_10 from './assets/AB848-300x500t.jpg';

// 2-р хивсний зургууд
import carpetAB2005_1 from './assets/AB2005-2x3.jpg';
import carpetAB2005_2 from './assets/AB2005-300x400m.jpg';
import carpetAB2005_3 from './assets/AB2005-300x400sh.jpg';
import carpetAB2005_4 from './assets/AB2005-300x500m.jpg';

export const productsData = [
  {
    id: 1,
    brand: 'АЛТАНБУЛАГ ХИВС',
    code: 'AB848',
    type: 'классик',
    // "images" жагсаалтыг илүү ухаалаг бүтэцтэй болгосон
    images: [
      { src: carpetAB848_1, size: '200x300', color: '#1b7979ff' },
      { src: carpetAB848_2, size: '255x350', color:'#bcb395ff' },
      { src: carpetAB848_3, size: '255x350', color: '#bcb395ff' },
      { src: carpetAB848_4, size: '255x350', color: '#b8b8b8ff'},
      { src: carpetAB848_5, size: '300x400', color: '#bcb395ff'},
      { src: carpetAB848_6, size: '300x400', color: '#bcb395ff'},
      { src: carpetAB848_7, size: '300x400', color: '#bcb395ff'},
      { src: carpetAB848_8, size: '300x500', color: '#1b7979ff' },
      { src: carpetAB848_9, size: '300x500', color: '#bcb395ff' },
      { src: carpetAB848_10, size: '300x500', color: '#1b7979ff'},
    ],
    sizes: ['200x300', '255x350', '300x400', '300x500'],
    colors: ['#1b7979ff','#bcb395ff', '#b8b8b8ff' ], // Энд байгаа beige өнгөний (#C9C6C1) зураг дутуу байна
  },
  {
    id: 2,
    brand: 'АЛТАНБУЛАГ ХИВС',
    code: 'AB2005',
    type: 'классик',
    images: [
      { src: carpetAB2005_1, size: '2x3', color: '#216F80' },
      { src: carpetAB2005_2, size: '300x400', color: '#000080' },
      { src: carpetAB2005_3, size: '300x400', color: '#D9A943' },
      { src: carpetAB2005_4, size: '300x500', color: '#216F80' },
    ],
    sizes: ['2x3', '300x400', '300x500'],
    colors: ['#216F80', '#000080', '#D9A943'],
  },
];