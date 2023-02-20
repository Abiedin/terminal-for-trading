import React, { useEffect, useState } from "react";
import "./count-ruler.scss";

const CountPrice = ({ shiningBeam }) => {
  const [coord, seCoord] = useState(0);

  useEffect(() => {
    const count = document.querySelector(".count-price");

    console.log("---------------");

    if (shiningBeam) {
      count.style.display = "block";

      document.addEventListener("mousedown", (event) => {
        count.style.left = event.clientX + "px";
        count.style.top = event.clientY + "px";
        
      });
      document.addEventListener("mousemove", (event) => {
        count.style.left = event.clientX + "px";
        count.style.top = event.clientY + "px";

        seCoord(event.clientX);
      });
    } else {
     
      count.style.display = "none";
    }
  }, [shiningBeam]);

  return <div className="count-price">{coord}</div>;
};

export default CountPrice;
