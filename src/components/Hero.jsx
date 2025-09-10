import React from 'react';

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
    <div className="bg-[url('/src/assets/intreir.jpg')] bg-cover bg-bottom bg-no-repeat py-10">
      <div className="container mx-auto px-2 sm:px-0 font-inter">
        <div className="text-center mt-20 mb-2">
          <h1 className="text-base sm:text-3xl font-bold mb-1 leading-tight text-white drop-shadow">
            Чамин тансаг хээгээр танд зориулан урлав.
          </h1>
          <p className="font-inter text-xs sm:text-base text-white drop-shadow">
            ЦЭВЭР ХОНИНЫ НООСОН ХИВС
          </p>
        </div>
        {/* Зэрэгцээ товчнууд: flex-row, gap-4, min-width, text-sm */}
        <div className="flex flex-row flex-wrap items-center justify-center gap-4 w-full px-1 mb-0.5 sm:px-0 mt-6">
          {heroButtons.map((buttonInfo) => (
            <button
              key={buttonInfo.text}
              className="
                bg-gray-100 
                hover:bg-white 
                hover:shadow-xl
                hover:-translate-y-1
                hover:scale-105
                opacity-95
                text-gray-800 font-medium
                px-3 py-2 rounded-lg shadow
                transition-all duration-200
                flex items-center justify-center 
                min-w-[150px] text-sm
              "
            >
              {buttonInfo.text}
              {buttonInfo.type === 'sort' && (
                <span className="ml-2 text-xs text-blue-500 flex items-center">
                  <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                    <path d="M7 14l3 3 3-3" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13 6l-3-3-3 3" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;