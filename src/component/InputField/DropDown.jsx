import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./form.scss";

const DropDown = ({
  stateCompanys,
  setInputValue,
  FocusInputField,
  setFocusField,
  focusField,
}) => {
  const arrCompany = useSelector((state) => state.currency.dropList);

  useEffect(() => {
    document.addEventListener("mouseup", (e) => {
      if (e.target.className === "item__symbol") {
        setInputValue(e.target.innerHTML);
        document.querySelector(".drop-down-list").style.display = "none";
        setFocusField(true);
        FocusInputField();
      }

      if (
        e.target.className !== "item__symbol" &&
        e.target.className !==
          "MuiInputBase-input MuiOutlinedInput-input css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input"
      ) {
        setInputValue("");
      }
    });
  }, [focusField]);

  return (
    <div
      className="drop-down-list"
      style={{ display: stateCompanys ? "flex" : "none" }}
    >
      {stateCompanys
        ? arrCompany.bestMatches?.map((item, index) => (
            <div key={index} className="item__symbol" id="item__symbol">
              {item["1. symbol"]}
            </div>
          ))
        : ""}
    </div>
  );
};

export default DropDown;
