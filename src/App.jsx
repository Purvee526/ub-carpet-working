import React, { useState } from "react";
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import FeaturedBrands from './components/FeaturedBrands.jsx';
import FilterBar from './components/FilterBar.jsx';
import ProductList from './components/ProductList.jsx';
import Sidebar from './components/Sidebar.jsx';
import Footer from './components/Footer.jsx';
import t from './translations.js'; // default export-оор импорт

function App() {
  const [lang, setLang] = useState("mn");
  const tt = t[lang];

  return (
    <div>
      <Header lang={lang} setLang={setLang} t={tt} />
      <main>
        <Hero t={tt} />
        <FeaturedBrands t={tt} />
        <div className="container mx-auto px-4">
          <div className="catalog-section" style={{margin: '0 -12px'}}>
            <Sidebar t={tt} />
            <div className="product-area px-4">
              <div className="w-full max-w-[1400px] mx-auto">
                <FilterBar t={tt} />
                <ProductList t={tt} />
                <Footer lang={lang} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default App;