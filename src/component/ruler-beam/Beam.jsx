import React, { useEffect, useState } from "react";
import CountPrice from "../ruler-count/CountPrice";
import "./beam.scss";

const Beam = ({
  ruler,
  measure,
  heighthWindow,
  widthWindow,
  layerXX,
  layerYY,
}) => {
  const [shiningBeam, setShiningBeam] = useState(false);
  const [coord, seCoord] = useState(0);

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
      } else {
        document.onmouseup = () => {
          beam.style.display = "none";
          setShiningBeam(false);
        };
        event.target.style.cursor = "default";
      }
    };

    document.onmousemove = (event) => {
      let x = -xx + event.pageX;
      let y = -yy + event.pageY;
      let negativeX = 0;
      let negativeY = 0;

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

      console.log("---------------");
      console.log("layerXX", layerXX);
      console.log("layerYY", layerYY);

      if (x < 0 && y < 0) {
        negativeX = Math.abs(x);
        negativeY = Math.abs(y);

        if (negativeX <= layerXX && negativeY <= layerYY) {
          beam.style.width = lengthBeam(x, y) + "px";
          beam.style.transform = "rotate(" + 57.2958 * arcctg(x, y) + "deg)";
        }
      } else if (x > 0 && y > 0) {
        if (layerXX + x <= widthWindow && layerYY + y <= heighthWindow) {
          beam.style.width = lengthBeam(x, y) + "px";
          beam.style.transform = "rotate(" + 57.2958 * arcctg(x, y) + "deg)";
        }
      } else if (x < 0 && y > 0) {
        negativeX = Math.abs(x);

        if (negativeX <= layerXX && layerYY + y <= heighthWindow) {
          beam.style.width = lengthBeam(x, y) + "px";
          beam.style.transform = "rotate(" + 57.2958 * arcctg(x, y) + "deg)";
        }
      } else if (x > 0 && y < 0) {
        negativeY = Math.abs(y);

        if (layerXX + x <= widthWindow && negativeY <= layerYY) {
          beam.style.width = lengthBeam(x, y) + "px";
          beam.style.transform = "rotate(" + 57.2958 * arcctg(x, y) + "deg)";
        }
      }
    };
  }, [measure]);

  return (
    <>
      {" "}
      <div className="beam-ruler" id="beam-ruler"></div>
      <CountPrice shiningBeam={shiningBeam} />
    </>
  );
};

export default Beam;
