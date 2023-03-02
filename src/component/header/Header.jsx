import React from "react";
import GetApi from "../buttons/get-api/GetApi";
import { InputField } from "../InputField/InputField";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <InputField />
      <GetApi />
    </div>
  );
};

export default Header;
