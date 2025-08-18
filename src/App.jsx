

import React from 'react';
// Хуучин CSS файлууд байвал энд дуудна
import './App.css'; 

// Компонентуудыг ".jsx" өргөтгөлтэй нь хамт дуудна
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import FeaturedBrands from './components/FeaturedBrands.jsx';
import FilterBar from './components/FilterBar.jsx';
import ProductList from './components/ProductList.jsx';
import Sidebar from './components/Sidebar.jsx';
import Footer from './components/Footer.jsx';

import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
      <FeaturedBrands /> 

      <div className="container">
          <div className="catalog-section">
            <Sidebar />
            <div className="product-area">
              <FilterBar />
              <ProductList />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;