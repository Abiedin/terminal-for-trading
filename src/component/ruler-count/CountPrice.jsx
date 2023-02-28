import React, { useEffect, useState } from "react";
import "./count-ruler.scss";

const CountPrice = ({ shiningBeam, xx, yy, widthWindow, layerXX }) => {
  const [coord, setCoord] = useState(0);

  useEffect(() => {
    const count = document.querySelector(".count-price");

    if (shiningBeam) {
      count.style.display = "block";
      count.style.left = xx + "px";
      count.style.top = yy + "px";

      document.addEventListener("mousemove", (event) => {
        if (
          event.target.closest("#window__id") &&
          event.target.className !== "count-price"
        ) {
          count.style.left = event.clientX + "px";
          count.style.top = event.clientY + "px";

          setCoord(event.clientX);
        }
      });
    } else {
      count.style.display = "none";
    }
  }, [shiningBeam, xx, yy]);

  return <div className="count-price">{coord}</div>;
};

export default CountPrice;
