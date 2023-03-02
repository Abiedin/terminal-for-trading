import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { dropDown } from "../slice/slice";
import "./form.scss";

export const InputField = () => {
  const [inputValue, setInputValue] = useState("");
  
  const dispatch = useDispatch();


  const searchCompany = () => {
    if (inputValue.length >= 1) {
      dispatch(dropDown(inputValue));
      setInputValue("");
    }
  };

  useEffect(() => {
    if (inputValue.length >= 1) {
      dispatch(dropDown(inputValue));
    }
  }, [inputValue]);

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        searchCompany();
      }}
    >
      <input
        type="text"
        placeholder={"Search company..."}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="form-input"
      />
    </form>
  );
};
