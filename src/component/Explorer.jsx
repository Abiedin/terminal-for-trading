import React, { useEffect, useState } from "react";
import Header from "./header/Header";
import "./explorer.scss";
import Beam from "./ruler-beam/Beam";
import Mouse from "./mouse/Mouse";
import CountPrice from "./ruler-count/CountPrice";
import Chart from "./chart/Chart";

const Explorer = () => {
  const [ruler, setRuler] = useState(false);
  const [widthWindow, setWidthWindow] = useState();
  const [heighthWindow, setHeighthWindow] = useState();
  const [measure, setMeasure] = useState(false);
  const [layerXX, setLayerXX] = useState(0);
  const [layerYY, setLayerYY] = useState(0);

  useEffect(() => {
    const block = document.getElementById("window__id");
    const vertical = document.querySelector(".follow-cursor-vertical");
    const gorizont = document.querySelector(".follow-cursor-gorizont");

    block.oncontextmenu = () => {
      return false;
    };

    block.addEventListener("mousedown", (event) => {
      if (event.button === 1) {
        setRuler(true);
        setLayerXX(event.layerX);
        setLayerYY(event.layerY);
      } else {
        setRuler(false);
        setLayerXX(event.layerX);
        setLayerYY(event.layerY);
      }
    });

    block.onmouseup = (event) => {
      if (ruler) {
        vertical.style.display = "block";
        gorizont.style.display = "block";
        vertical.style.left = event.clientX + "px";
        gorizont.style.top = event.clientY + "px";
        setMeasure(true);
      } else {
        vertical.style.display = "none";
        gorizont.style.display = "none";
        setMeasure(false);
      }
    };

    block.onmousemove = (event) => {
      if (ruler) {
        vertical.style.left = event.clientX + "px";
        gorizont.style.top = event.clientY + "px";
      }
    };
  }, [ruler]);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        setWidthWindow(entry.contentRect.width);
        setHeighthWindow(entry.contentRect.height);
      });
    });
    observer.observe(document.getElementById("window__id"));
  });

  return (
    <div className="explorer">
      <Header />
      <div className="window" id="window__id">4
      <Chart />
        <Beam
          ruler={ruler}
          measure={measure}
          heighthWindow={heighthWindow}
          widthWindow={widthWindow}
          layerXX={layerXX}
          layerYY={layerYY}
        />
        <div
          className="follow-cursor-vertical"
          style={{ height: heighthWindow }}
        ></div>
        <div
          className="follow-cursor-gorizont"
          style={{ width: widthWindow }}
        ></div>
        <Mouse />
        <CountPrice
          heighthWindow={heighthWindow}
          widthWindow={widthWindow}
          layerXX={layerXX}
          layerYY={layerYY}
        />
      </div>
    </div>
  );
};

export default Explorer;
