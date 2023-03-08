import React, { useEffect, useState } from "react";
import CountPrice from "../ruler-count/CountPrice";
import "./beam.scss";

const Beam = ({
  ruler,
  measure,
}) => {
  const [shiningBeam, setShiningBeam] = useState(false);
  const [xx, setXX] = useState();
  const [yy, setYY] = useState();

  useEffect(() => {
    const beam = document.querySelector(".beam-ruler");
    let xx = 0;
    let yy = 0;

    document.onmousedown = (event) => {
      const target = event.target;

      if (
        ruler &&
        event.button === 0 &&
        measure &&
        target.className === "follow-cursor-gorizont"
      ) {
        beam.style.display = "block";
        beam.style.left = event.pageX + "px";
        beam.style.top = event.pageY + "px";
        beam.style.width = 0 + "px";

        xx = event.pageX;
        yy = event.pageY;

        setShiningBeam(true);

        setXX(xx);
        setYY(yy);
      } else {
        document.onmouseup = () => {
          beam.style.display = "none";
          setShiningBeam(false);
        };
      }
    };

    document.onmousemove = (event) => {
      let x = -xx + event.pageX;
      let y = -yy + event.pageY;

      function arcctg(x, y) {
        if ((x > 0 && y > 0) || (x < 0 && y > 0))
          return Math.PI / 2 - Math.atan(x / y);
        if (x < 0 && y < 0) return Math.PI + Math.atan(y / x);
        if (x > 0 && y < 0)
          return (3 * Math.PI) / 2 + Math.abs(Math.atan(x / y));
      }

      function lengthBeam(x, y) {
        return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
      }

      if (event.target.closest("#window__id") && event.target.className !== 'count-price') {
        beam.style.width = lengthBeam(x, y) + "px";
        beam.style.transform = "rotate(" + 57.2958 * arcctg(x, y) + "deg)";
      }

    };
  }, [measure]);

  return (
    <>
      {" "}
      <div className="beam-ruler" id="beam-ruler"></div>
      <CountPrice shiningBeam={shiningBeam} xx={xx} yy={yy} />
    </>
  );
};

export default Beam;
