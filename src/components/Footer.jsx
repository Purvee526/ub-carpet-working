import React from 'react';
import t from '../translations';

function Footer({ lang = "mn" }) {
  const dict = t[lang] || t["mn"];

  return (
    <div className="border-t border-gray-200 mt-12">
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between gap-10 text-sm text-gray-700">
            {/* Салбаруудын байршил */}
            <div className="flex-grow">
              <h4 className="font-bold text-gray-900 uppercase tracking-wider mb-4 text-xs">
                {dict.footerTitle}
              </h4>
              <div className="grid grid-cols-3 sm:grid-cols-3 gap-8">
                <address className="not-italic text-xs leading-relaxed text-center bg-gray-50 rounded-lg p-3 shadow">
                  {dict.branch1.split('\n').map((line, i) => <p key={i}>{line}</p>)}
                </address>
                <address className="not-italic text-xs leading-relaxed text-center bg-gray-50 rounded-lg p-3 shadow">
                  {dict.branch2.split('\n').map((line, i) => <p key={i}>{line}</p>)}
                </address>
                <address className="not-italic text-xs leading-relaxed text-center bg-gray-50 rounded-lg p-3 shadow">
                  {dict.branch3.split('\n').map((line, i) => <p key={i}>{line}</p>)}
                </address>
              </div>
            </div>
            {/* Холбоо барих + Төлбөрийн хэсэг */}
            <div className="flex-shrink-0 flex flex-col gap-6">
              <div className="flex flex-row gap-8 items-start">
                <div>
                  <h4 className="font-bold text-gray-900 uppercase tracking-wider mb-4 text-xs">
                    {dict.contactTitle}
                  </h4>
                  <div className="space-y-2 text-xs leading-relaxed">
                    <p>{dict.contactPhone}</p>
                    <p>{dict.contactEmail}</p>
                    <p>{dict.contactFacebook}</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 uppercase tracking-wider mb-4 text-xs">
                    {dict.paymentTitle}
                  </h4>
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
      <div className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white text-xs">UBCARPET. Бүх эрх хуулиар хамгаалагдсан.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;