// src/components/Header.jsx

import React from 'react';
import './Header.css'; // Header-т зориулсан CSS файл

import logo from "../assets/logoqr.jpg";
// import heartIcon from "../assets/heart.svg";
// import searchIcon from "../assets/search.svg";

const Header = () => {
  return (
    <header className="site-header">
      <div className="container">
        <div className="logo-container">
          <img src={logo} alt="Компанийн лого" className="logo" />
        </div>
        {/* <div className="actions-container">
          <div className="search-bar">
            <img src={searchIcon} alt="Хайлт" className="icon" />
            <input type="text" placeholder="Хайх..." />
          </div>
          <a href="#" className="action-link">
            <img src={heartIcon} alt="Хадгалсан" className="icon" />
          </a>
          <a href="#" className="action-link login-link">
            Login
          </a>
        </div> */}
      </div>
    </header>
  );
};

export default Header;