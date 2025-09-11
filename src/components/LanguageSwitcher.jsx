import React from "react";

const LanguageSwitcher = ({ lang, setLang }) => (
  <div
    style={{
      display: "flex",
      gap: "0.1rem",
      background: "rgba(255,255,255,0.8)",
      borderRadius: "10px",
      boxShadow: "0 2px 8px rgba(37,99,235,0.08)",
      border: "1px solid #dbeafe",
      padding: "1px 2px",
      alignItems: "center",
      marginRight: "10px",
    }}
  >
    <button
      onClick={() => setLang("mn")}
      style={{
        padding: "2px 4px",
        borderRadius: "9999px",
        border: "none",
        fontWeight: 600,
        fontSize: "10px",
        background: lang === "mn" ? "#2563eb" : "transparent",
        color: lang === "mn" ? "#fff" : "#2563eb",
        transition: "all 0.2s",
        cursor: "pointer",
      }}
    >
      MN
    </button>
    <button
      onClick={() => setLang("en")}
      style={{
        padding: "2px 4px",
        borderRadius: "9999px",
        border: "none",
        fontWeight: 600,
        fontSize: "10px",
        background: lang === "en" ? "#2563eb" : "transparent",
        color: lang === "en" ? "#fff" : "#2563eb",
        transition: "all 0.2s",
        cursor: "pointer",
      }}
    >
      EN
    </button>
  </div>
);

export default LanguageSwitcher;