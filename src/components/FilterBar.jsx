import React from 'react';
import './FilterBar.css'; 

const FilterBar = ({ t }) => {
  // Орчуулгын текстээ props-оор дамжуулж авна
  const title = t.filterBarTitle || "ХИВСНИЙ КАТАЛОГИ";
  const subtitle = t.filterBarSubtitle || "";

  return (
    <div className="filter-bar">
      <div className="filter-bar-title">
        <h2>{title}</h2>
        {/* <p>{subtitle}</p> */}
      </div>
    </div>
  );
};

export default FilterBar;