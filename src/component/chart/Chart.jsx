import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Chart = () => {
  const arrData = useSelector((state) => state.todayPrice.dataTrading);

  useEffect(() => {
    console.log("222", arrData);
  });

  return <div>asd</div>;
};

export default Chart;
