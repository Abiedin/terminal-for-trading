import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { api_CallTime } from "../../slice/slice";
import { chartDays } from "../../Config/date";
import SelectButton from "../buttons-period/SelectButton";

const GetApiTime = () => {
  const [time, setTme] = useState(60);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(api_CallTime(time));
  }, [time]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          marginTop: 10,
          marginBottom: 10,
          flex: "content",
          width: "100%",
        }}
      >
        {chartDays.map((item) => (
          <SelectButton
            key={item.value}
            onClick={() => setTme(item.value)}
            selected={item.value === time}
          >
            {item.label}
          </SelectButton>
        ))}
      </div>
    </div>
  );
};

export default GetApiTime;
