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
    <div className="bg-[url('/src/assets/intreir.jpg')] bg-cover bg-bottom bg-no-repeat py-6 sm:py-30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-base sm:text-3xl font-bold mb-2 leading-tight text-white drop-shadow">
            Чамин тансаг хээгээр танд зориулан урлав.
          </h1>
          <p className="text-xs sm:text-base text-white drop-shadow">
            ЦЭВЭР ХОНИНЫ НООСОН ХИВС
          </p>
        </div>
  <div className="flex flex-row flex-wrap items-center justify-center gap-2 sm:gap-6 w-full px-2 sm:px-0">
          {heroButtons.map((buttonInfo) => (
            <button
              key={buttonInfo.text}
              className="bg-gray-100 hover:bg-blue-150 text-gray-800 font-medium px-4 py-2 rounded-lg shadow transition-all flex items-center justify-center min-w-[120px] sm:min-w-[180px] text-sm mb-2 sm:mb-0"
            >
              {buttonInfo.text}
              {buttonInfo.type === 'sort' && (
                <span className="ml-2 text-xs text-blue-500 flex items-center">
                  <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M7 14l3 3 3-3" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M13 6l-3-3-3 3" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
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