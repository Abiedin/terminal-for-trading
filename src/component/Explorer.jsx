import React, { useEffect, useState } from "react";
import Header from "./header/Header";
import "./explorer.scss";

const Explorer = () => {
  const [ruler, setRuler] = useState(false);
  const [widthWindow, setWidthWindow] = useState();
  const [heighthWindow, setHeighthWindow] = useState();
  const [measure, setMeasure] = useState(false);

  useEffect(() => {
    const block = document.getElementById("window__id");
    const vertical = document.querySelector(".follow-cursor-vertical");
    const gorizont = document.querySelector(".follow-cursor-gorizont");

    block.oncontextmenu  = () => {
      return false;
    };   

    block.onmousedown = (event) => {   
      {event.button === 1 ? setRuler(true) : setRuler(false)}

      if (ruler) {


        console.log("we")
      }
    }

    block.onmouseup = (event) => {
      if (ruler) {
        vertical.style.display = 'block';
        gorizont.style.display = 'block';
        vertical.style.left = event.clientX  + 'px';
        gorizont.style.top = event.clientY  + 'px';
      } else {
        vertical.style.display = 'none';
        gorizont.style.display = 'none';
      }
    }

    block.onmousemove = (event) => {
      if (ruler) {
        vertical.style.left = event.clientX  + 'px';
        gorizont.style.top = event.clientY  + 'px';
      }
    }
  },[ruler]);

  useEffect(() => {
    const observer = new ResizeObserver(entries => {
      entries.forEach(entry => {
        setWidthWindow(entry.contentRect.width)
        setHeighthWindow(entry.contentRect.height)
      })
    })
    observer.observe(document.getElementById("window__id"))
  })


  return (
    <div className="explorer">
      <Header />
      <div className="window" id="window__id">       
        <div className="follow-cursor-vertical" style={{ height: heighthWindow }}></div>
        <div className="follow-cursor-gorizont" style={{ width: widthWindow }}></div>
      </div>
    </div>
  );
};

export default Explorer;
