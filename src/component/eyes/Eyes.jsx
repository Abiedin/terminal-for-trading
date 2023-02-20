import React, { useEffect } from "react";
import "./eyes.scss";

const Eyes = () => {
  useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      let x = event.x - 35;
      let y = event.y - 35;

      document.querySelector(".eye-left").style.transform =
        "rotate(" + 57.2958 * arcctg(x, y) + "deg)";
      document.querySelector(".eye-right").style.transform =
        "rotate(" + 57.2958 * arcctg(x - 70, y) + "deg)";
    });

    function arcctg(x, y) {
      if ((x > 0 && y > 0) || (x < 0 && y > 0))
        return Math.PI / 2 - Math.atan(x / y);
      if (x < 0 && y < 0) return Math.PI + Math.atan(y / x);
      if (x > 0 && y < 0) return (3 * Math.PI) / 2 + Math.abs(Math.atan(x / y));
    }
  });

  return (
    <div className="eyes">
      <div className="eye-left">
        <div className="eye-pupil-l"></div>
      </div>
      <div className="eye-right">
        <div className="eye-pupil-r"></div>
      </div>
    </div>
  );
};

export default Eyes;
