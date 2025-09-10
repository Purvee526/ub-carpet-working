import React from "react";

const LanguageSwitcher = ({ lang, setLang }) => (
  <div style={{
    position: "absolute",
    top: "1rem",  // top-4
      right: "1rem", // right-4
      zIndex: 10,
    }}>
      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          background: "rgba(255,255,255,0.8)",
          borderRadius: "20px",
          boxShadow: "0 2px 8px rgba(37,99,235,0.08)",
          border: "1px solid #dbeafe",
          padding: "4px 10px",
        }}
      >
        <button
          onClick={() => setLang("mn")}
          style={{
            padding: "4px 14px",
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
            padding: "4px 14px",
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
    </div>
  );
export default LanguageSwitcher; 