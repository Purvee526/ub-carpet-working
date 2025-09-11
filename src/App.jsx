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
        <div className="container">
          <div className="catalog-section">
            <Sidebar t={tt} />
            <div className="product-area">
              <FilterBar t={tt} />
              <ProductList t={tt} />
            </div>
          </div>
        </div>
      </main>
      <Footer t={tt} />
    </div>
  );
}
export default App;