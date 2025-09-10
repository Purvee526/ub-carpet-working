import React, { useState } from "react";
import LanguageSwitcher from "./components/LanguageSwitcher.jsx";
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
  
  return (
    <div>
      <LanguageSwitcher lang={lang} setLang={setLang} />
      <Header lang={lang} setLang={setLang} translations={translations} />
      <main>
        <Hero lang={lang} translations={translations} />
        <FeaturedBrands lang={lang} setLang={setLang} translations={translations} />
        <div className="container">
          <div className="catalog-section">
            <Sidebar lang={lang} setLang={setLang} translations={translations} />
            <div className="product-area">
              <FilterBar lang={lang} setLang={setLang} translations={translations} />
              <ProductList lang={lang} setLang={setLang} translations={translations} />
            </div>
          </div>
        </div>
      </main>
      <Footer lang={lang} translations={translations} />
    </div>
  );
}
export default App;