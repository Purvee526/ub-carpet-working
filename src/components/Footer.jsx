import React from 'react';
import t from '../translations';

function Footer({ lang = "mn" }) {
  const dict = t[lang] || t["mn"];

  return (
    <div className="border-t border-gray-400 mt-12">
      <footer className="bg-[#f7f7f7] w-full">
        {/* 2 талын зайг desktop дээр тулгаж дүүргэхийн тулд max-w-7xl, mx-auto-г хасаж, w-full ашиглана */}
        <div className="w-full py-4 px-2 lg:px-0">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 text-sm text-gray-800 items-stretch w-full">
            {/* 1-р салбар */}
            <div className="flex-1 min-w-0 px-2">
              <h4 className="font-bold text-gray-900 uppercase tracking-wider mb-2 text-xs">
                {dict.footerTitle}
              </h4>
              <div className="not-italic text-xs leading-relaxed text-left">
                {dict.branch1.split('\n').map((line, i) => <p key={i}>{line}</p>)}
              </div>
            </div>
            {/* 2-р салбар */}
            <div className="flex-1 min-w-0 px-2">
              <div className="not-italic text-xs leading-relaxed text-left">
                {dict.branch2.split('\n').map((line, i) => <p key={i}>{line}</p>)}
              </div>
            </div>
            {/* 3-р салбар */}
            <div className="flex-1 min-w-0 px-2">
              <div className="not-italic text-xs leading-relaxed text-left">
                {dict.branch3.split('\n').map((line, i) => <p key={i}>{line}</p>)}
              </div>
            </div>
            {/* Холбоо барих */}
            <div className="flex-1 min-w-0 px-2">
              <h4 className="font-bold text-gray-900 uppercase tracking-wider mb-2 text-xs">
                {dict.contactTitle}
              </h4>
              <div className="space-y-1 text-xs leading-relaxed">
                <p>{dict.contactPhone}</p>
                <p>{dict.contactEmail}</p>
                <p>{dict.contactFacebook}</p>
              </div>
            </div>
            {/* Төлбөрийн хэсэг */}
            <div className="flex-1 min-w-0 px-2">
              <h4 className="font-bold text-gray-900 uppercase tracking-wider mb-2 text-xs">
                {dict.paymentTitle}
              </h4>
              <div className="flex flex-wrap gap-2 items-center mt-2">
                <img src="/image/banks/haan.jpg" alt="Khaan Bank" className="h-7 object-contain" />
                <img src="/image/banks/has.jpg" alt="Xac Bank" className="h-7 object-contain" />
                <img src="/image/banks/pocet.png" alt="Pocket" className="h-7 object-contain" />
                <img src="/image/banks/storypay.jpg" alt="StorePay" className="h-7 object-contain" />
                <img src="/image/banks/simple.png" alt="Simple" className="h-7 object-contain" />
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-gray-800 w-full">
        <div className="w-full py-2 px-2 lg:px-8 text-center">
          <p className="text-white text-xs">UBCARPET. Бүх эрх хуулиар хамгаалагдсан.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;