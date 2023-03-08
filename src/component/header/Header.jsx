import React from "react";
import GetApiTime from "../buttons/get-api/GetApi";
import { InputField } from "../InputField/InputField";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <GetApiTime />
      <InputField />
    </div>
  );
};

export default Header;
