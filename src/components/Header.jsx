import React from "react";
import logo from "../assets/logoqr.jpg";
import LanguageSwitcher from "./LanguageSwitcher";
import "./Header.css";

const Header = ({ lang, setLang }) => (
  <header className="site-header">
    <div className="container">
      <div className="logo-container">
        <img src={logo} alt="Компанийн лого" className="logo" />
      </div>
      <LanguageSwitcher lang={lang} setLang={setLang} />
    </div>
  </header>
);

export default Header;