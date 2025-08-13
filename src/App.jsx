// src/App.jsx (ЗӨВ ХУВИЛБАР)

import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedBrands from './components/FeaturedBrands'; 
import FilterBar from './components/FilterBar';
import ProductList from './components/ProductList';
import Sidebar from './components/Sidebar';

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
    </div>
  );
}

export default App;