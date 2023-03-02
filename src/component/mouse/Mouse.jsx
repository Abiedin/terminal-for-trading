import React, { useEffect, useState } from "react";
import "./mouse.scss";

const Mouse = () => {
  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      if (e.target.className === "window") {
        e.target.style.cursor = "crosshair";
      }
    });
  });
};

export default Mouse;
