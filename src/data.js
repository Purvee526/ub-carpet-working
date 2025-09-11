// src/data.js

export const productsData = [
  {
    id: 1,
    brand: "altanbulag",
    code: 'AB848',
    type: 'классик',
    images: [
      // ЗАСВАР: "/0AB848/" биш "/AB848/" байх ёстой
      { src: '/image/products/AB848/AB848-200x300.jpg', size: '200x300', color: '#1b7979ff' },
      { src: '/image/products/AB848/AB848-255x350.jpg', size: '255x350', color: '#bcb395ff' },
      { src: '/image/products/AB848/AB848-255x350r.jpg', size: '255x350', color: '#bcb395ff' },
      { src: '/image/products/AB848/AB848-255x350t.jpg', size: '255x350', color: '#b8b8b8ff' },
      { src: '/image/products/AB848/AB848-300x400m.jpg', size: '300x400', color: '#bcb395ff' },
      { src: '/image/products/AB848/AB848-300x400r.jpg', size: '300x400', color: '#bcb395ff' },
      { src: '/image/products/AB848/AB848-300x500a.jpg', size: '300x500', color: '#1b7979ff' },
      { src: '/image/products/AB848/AB848-300x500r.jpg', size: '300x500', color: '#bcb395ff' },
    ],
    sizes: ['200x300', '255x350', '300x400', '300x500'],
    colors: ['#1b7979ff','#bcb395ff', '#b8b8b8ff'],
  },
   {
    id: 2,
    brand: "altanbulag",
    code: 'AB2005',
    type: 'классик',
    images: [
      { src: '/image/products/AB2005/AB2005-200x300.jpg', size: '200x300', color: '#02213B' },
      { src: '/image/products/AB2005/AB2005-255x350ma.jpg', size: '255x350', color: '#216F80' },
      { src: '/image/products/AB2005/AB2005-255x350sh.jpg', size: '255x350', color: '#b8b8b8ff' },
      { src: '/image/products/AB2005/AB2005-300x400m.jpg', size: '300x400', color: '#02213B'},
      { src: '/image/products/AB2005/AB2005-300x400sh.jpg', size: '300x400', color: '#216F80' },
      { src: '/image/products/AB2005/AB2005-300x500m.jpg', size: '300x500', color: '#02213B' },
      { src: '/image/products/AB2005/AB2005-300x500sh.jpg', size: '300x500', color: '#216F80' },
    ],
    sizes: ['200x300', '255x350', '300x400', '300x500'],
    colors: ['#02213B', '#216F80'],
  }, 
  {
    id: 3,
    brand: "altanbulag",
    code: 'AB707',
    type: 'классик',
    images: [
      { src: '/image/products/AB707/AB707-300x400.jpg', size: '300x400', color: '#02213B' },
      { src: '/image/products/AB707/AB707-300x400g.jpg', size: '300x400', color: '#b8b8b8ff' },
    ],
    sizes: ['300x400',], 
    colors: ['#02213B', '#b8b8b8ff'],
  },
   {
    id: 4,
    brand: "altanbulag",
    code: 'AB749',
    type: 'классик',
    images: [
      { src: '/image/products/AB749/AB749-200x300.jpg', size: '200x300', color: '#b8b8b8ff' },
      { src: '/image/products/AB749/AB749-255x350.jpg', size: '255x350', color: '#216F80' },
      { src: '/image/products/AB749/AB749-255x350sh.jpg', size: '255x350', color: '#b8b8b8ff' },
      { src: '/image/products/AB749/AB749-300x400.jpg', size: '300x400', color: '#216F80' },
      { src: '/image/products/AB749/AB749-300x400g.jpg', size: '300x400', color: '#b8b8b8ff' },
      { src: '/image/products/AB749/AB749-300x500.jpg', size: '300x500', color: '#216F80' },
      { src: '/image/products/AB749/AB749-300x500t.jpg', size: '300x500', color: '#b8b8b8ff' },
    ],
    sizes: ['200x300', '255x350', '300x400', '300x500'],
    colors: ['#b8b8b8ff', '#216F80',],
  },
];