import React, { useState } from "react";
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import FeaturedBrands from './components/FeaturedBrands.jsx';
import FilterBar from './components/FilterBar.jsx';
import ProductList from './components/ProductList.jsx';
import Sidebar from './components/Sidebar.jsx';
import Footer from './components/Footer.jsx';
import translations from "./translations.js";

function App() {
  const [lang, setLang] = useState("mn");
  const t = translations[lang];

  return (
    <div>
      <Header lang={lang} setLang={setLang} t={t} />
      <main>
        <Hero t={t} />
        <FeaturedBrands t={t} />
        <div className="container">
          <div className="catalog-section">
            <Sidebar t={t} />
            <div className="product-area">
              <FilterBar t={t} />
              <ProductList t={t} />
            </div>
          </div>
        </div>
      </main>
      <Footer t={t} />
    </div>
  );
}
export default App;