import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { dropDownAPI } from "../slice/slice";
import { getData } from "../slice/DataIntraday";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchEnter from "./SearchEnter";
import './form.scss'
import DropDown from "./DropDown";

export const InputField = () => {
  const [inputValue, setInputValue] = useState("");
  const [stateCompanys, setStateCompanys] = useState(false);
  const [focusField, setFocusField] = useState(false);

  const dispatch = useDispatch();

  const searchCompanyData = () => {
    if (inputValue.length >= 1) {
      dispatch(getData(inputValue));
      setInputValue("");
      setStateCompanys(false);
      setFocusField(false);
      document.getElementById("outlined-basic").blur();
    }
  };

  useEffect(() => {
    if (inputValue.length > 1) {
      dispatch(dropDownAPI(inputValue));
      setStateCompanys(true);
    } else {
      setStateCompanys(false);
      dispatch(dropDownAPI());
    }
  }, [inputValue, dispatch]);

 
  const FocusInputField = () => {
    document.getElementById("outlined-basic").focus();
  };

  /*useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (
        e.target.className !==
        "MuiInputBase-input MuiOutlinedInput-input css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input"
      ) {
        setInputValue("");
        document.getElementById("outlined-basic").focus();
      }
    });
  });*/

  return (
    <div className="form" id="form">
      <div>
        <Box
          className="input-drop"
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={(e) => {
            e.preventDefault();
            searchCompanyData();
          }}
        >
          <TextField
            value={inputValue}
            className="textfield__labell"
            onChange={(e) => setInputValue(e.target.value)}
            id="outlined-basic"
            label="Serch company ..."
            sx={{
              "& > :not(style)": { height: "30px" },
            }}
          />
          <SearchEnter searchCompanyData={searchCompanyData} inputValue={inputValue} />
        </Box>
        <DropDown
          stateCompanys={stateCompanys}
          setInputValue={setInputValue}
          setFocusField={setFocusField}
          FocusInputField={FocusInputField}
          focusField={focusField}
        />
      </div>
    </div>
  );
};
