import React from 'react';
const Footer = () => {
  return (
    <div className="border-t border-gray-200 mt-12">
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          {/* FLEXBOX АШИГЛАСАН ШИНЭ ЗАГВАР */}
          <div className="flex flex-col md:flex-row justify-between gap-10 text-sm text-gray-700">
            {/* ХЭСЭГ 1: Салбаруудын байршил */}
            <div className="flex-grow">
              <h4 className="font-bold text-gray-900 uppercase tracking-wider mb-4 text-xs">Салбаруудын байршил</h4>
              <div className="grid grid-cols-3 sm:grid-cols-3 gap-8">
                <address className="not-italic text-xs leading-relaxed text-center bg-gray-50 rounded-lg p-3 shadow">
                  <p className="font-semibold">1-р салбар:</p>
                  <p>Улаанбаатар хот, ХУД, 19р хороо АПУ компанийн баруун талд, Алтанбулаг хивсний дэлгүүр</p>
                  <p>Өдөр бүр 10:00 - 20:00</p>
                  <p>УТАС: 70142555</p>
                </address>
                <address className="not-italic text-xs leading-relaxed text-center bg-gray-50 rounded-lg p-3 shadow">
                  <p className="font-semibold">2-р салбар:</p>
                  <p>Улаанбаатар хот, БГД, төмөр замын Монголд үйлдвэрлэв худалдааны төв</p>
                  <p>Мя - Ням 10:00 - 19:00 (Даваа - Амарна)</p>
                  <p>Утас: 94390801</p>
                </address>
                <address className="not-italic text-xs leading-relaxed text-center bg-gray-50 rounded-lg p-3 shadow">
                  <p className="font-semibold">3-р салбар:</p>
                  <p>Улаанбаатар хот, БЗД, 5-р хороо, Их засаг их сургуулиас зүүн тийш 100м Алтанбулаг хивс нэрийн барааны дэлгүүр</p>
                  <p>Мя - Ням 10:00 - 18:00 (Даваа - Амарна)</p>
                  <p>Утас: 94589894</p>
                </address>
              </div>
            </div>
            {/* ХЭСЭГ 2: Холбоо барих + Төлбөрийн хэсэг */}
            <div className="flex-shrink-0 flex flex-col gap-6">
              <div className="flex flex-row gap-8 items-start">
                {/* Холбоо барих */}
                <div>
                  <h4 className="font-bold text-gray-900 uppercase tracking-wider mb-4 text-xs">Холбоо барих</h4>
                  <div className="space-y-2 text-xs leading-relaxed">
                    <p>Утас: 70142556, 70142555</p>
                    <p>И-мэйл: info@ubcarpet.mn</p>
                    <p>Facebook: Улаанбаатар хивс</p>
                  </div>
                </div>
                {/* Төлбөрийн хэсэг */}
                <div>
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