import React from 'react';

const Hero = ({ t }) => {
  const heroButtons = t.heroButtons || [];

  return (
    <div className="bg-[url('/src/assets/intreir.jpg')] bg-cover 
    bg-bottom bg-no-repeat margin-0-auto pt-10 py-0.5">
      <div className="container mx-auto px-2 sm:px-0 mb-5 font-inter margin-0-auto">
        <div className="text-center mt-20 mb-2">
          <h1 className="text-base sm:text-3xl font-bold mb-1 leading-tight text-white drop-shadow">
            {t.heroTitle}
          </h1>
          <p className="font-inter text-xs sm:text-base text-white drop-shadow">
            {t.heroSubtitle}
          </p>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center gap-4 w-full px-1 mb-1 mt-30">
          {heroButtons.map((btn, i) => (
            <button key={i} className="
              bg-gray-100 
              hover:bg-white 
              hover:shadow-xl
              hover:-translate-y-1
              hover:scale-105
              opacity-90 hover:opacity-100
              text-gray-800 font-medium
              px-3 py-2 rounded-lg shadow
              transition-all duration-200
              flex items-center justify-center 
              min-w-[50px] text-xs sm:text-xs
            ">
              {btn.text}
              {btn.type === 'sort' && (
                <span className="ml-1 text-xs text-blue-500 flex items-center">
                  <svg width="15" height="15" fill="none" viewBox="0 0 20 20">
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