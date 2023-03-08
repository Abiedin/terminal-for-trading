import React, { useEffect } from "react";

const SearchEnter = ({ searchCompanyData, inputValue }) => {
  useEffect(() => {
    document.addEventListener("mouseup", (e) => {
      if (e.target.className === "img_search-png") {
        searchCompanyData();
      }
    });
  }, [inputValue]);

  return (
    <div className="img__search">
      <div className="img_search-png" />
    </div>
  );
};

export default SearchEnter;
