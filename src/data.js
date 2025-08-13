// src/data.js

import carpet1 from './assets/ABrgb11.jpg';
import carpet1_2 from './assets/ABrgb08.jpg';
import carpet1_3 from './assets/ABrgb07.jpg';
import carpet2 from './assets/ABrgb10.jpg';
import carpet2_2 from './assets/ABrgb07.jpg';
import carpet2_3 from './assets/ABrgb06.jpg';
import carpet3 from './assets/ABrgb09.jpg';
import carpet3_2 from './assets/ABrgb05.jpg';
import carpet3_3 from './assets/ABrgb04.jpg';


export const productsData = [
  {
    id: 1,
    images: [carpet1, carpet1_2, carpet1_3],
    brand: 'АЛТАНБУЛАГ ХИВС',
    code: 'AB748',
    type: 'Авангард',
    sizes: ['200x300', '255x350','300x400', '300x500'],
    colors: ['#216F80', '#000080', '#D9A943', '#C9C6C1'],
  },
  {
    id: 2,
    images: [carpet2, carpet2_2, carpet2_3],
    brand: 'САЯН ХИВС',
    code: 'SN101',
    type: 'Модерн',
    sizes: ['3x4м', '3x5м'],
    colors: ['#800080', '#0000ff'],
  },
  {
    id: 3,
    images: [carpet3, carpet3_2, carpet3_3],
    brand: 'БОГД БРЭНД',
    code: 'BG202',
    type: 'Хүүхдийн',
    sizes: ['1.5x2.3м'],
    colors: ['#FFC0CB', '#ADD8E6'],
  },
];