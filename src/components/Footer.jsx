// src/components/Footer.jsx
import React from 'react';
const Footer = () => {
return (
// Дээд талын нарийн зураас
<div className="border-t border-gray-200 mt-12">
<footer className="bg-white">
<div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
{/* ======> FLEXBOX АШИГЛАСАН ШИНЭ ЗАГВАР <====== */}
      {/* Гар утас дээр доошоо цуварна, таблетаас дээш зэрэгцэнэ */}
      <div className="flex flex-col-1 md:flex-row justify-between gap-10 text-sm text-gray-700">
        
        {/* ХЭСЭГ 1: Салбаруудын байршил */}
        <div className="flex-grow"> {/* Энэ хэсэг боломжит бүх зайг эзэлнэ */}
          <h4 className="font-bold text-gray-900 uppercase tracking-wider mb- text-xs">Салбаруудын байршил</h4>
          
          {/* Салбаруудыг дотор нь 3 баганатай grid-ээр зохион байгуулна */}
          <div className="grid grid-cols-3 sm:grid-cols-3 gap-8">
            {/* 1-р салбар */}
            <address className="not-italic text-xs leading-relaxed"> {/* line-height нэмсэн */}
              <p className="font-semibold">1-р салбар:</p>
              <p>Улаанбаатар хот, ХУД, 19р хороо АПУ компанийн баруун талд, Алтанбулаг хивсний дэлгүүр</p>
              <p>Өдөр бүр 10:00 - 20:00</p>
              <p>УТАС: 70142555</p>
            </address>

            {/* 2-р салбар */}
            <address className="not-italic text-xs leading-relaxed">
              <p className="font-semibold">2-р салбар:</p>
              <p>Улаанбаатар хот, БГД, төмөр замын Монголд үйлдвэрлэв худалдааны төв</p>
              <p>Мя - Ням 10:00 - 19:00 (Даваа - Амарна)</p>
              <p>Утас: 94390801</p>
            </address>

            {/* 3-р салбар */}
            <address className="not-italic text-xs leading-relaxed">
              <p className="font-semibold">3-р салбар:</p>
              <p>Улаанбаатар хот, БЗД, 5-р хороо, Их засаг их сургуулиас зүүн тийш 100м Алтанбулаг хивс нэрийн барааны дэлгүүр</p>
              <p>Мя - Ням 10:00 - 18:00 (Даваа - Амарна)</p>
              <p>Утас: 94589894</p>
            </address>
          </div>
        </div>

         {/* ХЭСЭГ 2: Холбоо барих ба Төлбөрийн хэсгийг нэгтгэсэн */}
         <div className="flex-shrink-0">
             <h4 className="font-bold text-gray-900 uppercase tracking-wider mb-4 text-xs">Холбоо барих</h4>
           <div className="space-y-2 text-xs leading-relaxed">
           <p>Утас: 70142556, 70142555</p>
            <p>И-мэйл: info@ubcarpet.mn</p>
           <p>Facebook: Улаанбаатар хивс</p>
              </div>
             </div>
             
          {/* Төлбөрийн картуудын лого */}
            <div className="mt-10 md:mt-0 flex-shrink-0">
          <h4 className="font-bold text-gray-900 uppercase tracking-wider mb-4 text-xs">Төлбөрийн хэсэг</h4>
          <div className="grid grid-cols-3 items-center gap-x-0 gap-y-3">
            <img src="/image/banks/haan.jpg" alt="Khaan Bank" className="h-6 object-contain" />
            <img src="/image/banks/has.jpg" alt="Xac Bank" className="h-6 object-contain" />
            <img src="/image/banks/pocet.png" alt="Pocket" className="h-6 object-contain" />
            <img src="/image/banks/storypay.jpg" alt="StorePay" className="h-6 object-contain" />
            <img src="/image/banks/simple.png" alt="Simple" className="h-6 object-contain" />
          </div>
        </div>
        
      </div>
    </div>
  </footer>
  {/* Хамгийн доод хар хэсэг */}
  <div className="bg-gray-800">
    <div className="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8 text-center">
      <p className="text-white text-xs">UBCARPET. Бүх эрх хуулиар хамгаалагдсан.</p>
    </div>
  </div>
</div>
);
};
export default Footer;