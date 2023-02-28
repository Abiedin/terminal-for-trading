import React from "react";
import { useDispatch } from "react-redux";
import {apid_Call} from "../../slice/slice";

const GetApi = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(apid_Call())}>Api</button>
    </div>
  );
};

export default GetApi;
