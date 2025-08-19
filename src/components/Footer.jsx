// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <div className="border-t-5 border-gray-200">
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-8 px-4">
          {/* ======> 4 БАГАНАТАЙ ШИНЭ ЗАГВАР <====== */}
          <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-20 text-sm text-gray-700">
            
            {/* Багана 1: 1-р салбар */}
            <div className="space-y-2">
              <h4 className="font-bold text-gray-900 mb-3">1-р салбар</h4>
              <address className="not-italic">
                <p>Улаанбаатар хот, ХУД, 19р хороо АПУ компанийн баруун талд, Алтанбулаг хивсний дэлгүүр</p>
                <p className="mt-2">Өдөр бүр 10:00 - 20:00</p>
                <p>УТАС: 70142555</p>
              </address>
            </div>

            {/* Багана 2: 2-р салбар */}
            <div className="space-y-2">
              <h4 className="font-bold text-gray-900 mb-3">2-р салбар</h4>
              <address className="not-italic">
                <p>Улаанбаатар хот, БГД, төмөр замын Монголд үйлдвэрлэв худалдааны төв</p>
                <p className="mt-2">Мя - Ням 10:00 - 19:00 (Даваа - Амарна)</p>
                <p>Утас: 94390801</p>
              </address>
            </div>

            {/* Багана 3: 3-р салбар */}
            <div className="space-y-2">
              <h4 className="font-bold text-gray-900 mb-3">3-р салбар</h4>
              <address className="not-italic">
                <p>Улаанбаатар хот, БЗД, 5-р хороо, Их засаг их сургуулиас зүүн тийш 100м Алтанбулаг хивс нэрийн барааны дэлгүүр</p>
                <p className="mt-2">Мя - Ням 10:00 - 18:00 (Даваа - Амарна)</p>
                <p>Утас: 94589894</p>
              </address>
            </div>

            {/* Багана 4: Холбоо барих */}
            <div className="space-y-2">
              <h4 className="font-bold text-gray-900 uppercase tracking-wider mb-3">Холбоо барих</h4>
              <p>Утас: 70142556, 70142555</p>
              <p>И-мэйл: info@ubcarpet.mn</p>
              <p>Facebook: Улаанбаатар хивс</p>
              {/* Төлбөрийн картуудын лого */}
              <div className="mt-5 grid grid-cols-3 gap-2">
                {/* Хэрэв таны Хаан банкны лого PNG форматтай бол: */}
                <img src="/image/banks/haan.jpg" alt="Khan Bank" className="h-6 w-auto object-contain" />
                <img src="/image/banks/has.jpg" alt="Xac Bank" className="h-6 w-auto object-contain" />
                 <img src="/image/banks/pocet.png" alt="Pocket" className="h-6 w-auto object-contain" />
                  <img src="/image/banks/simple.png" alt="Simple" className="h-6 w-auto object-contain" />
                <img src="/image/banks/Spay (1).jpg" alt="StorePay" className="h-6 w-auto object-contain" />
              </div>
            </div>
            


          </div>
        </div>
      </footer>
      {/* Хамгийн доод хар хэсэг */}
      <div className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white text-sm">UBCARPET. Бүх эрх хуулиар хамгаалагдсан.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;