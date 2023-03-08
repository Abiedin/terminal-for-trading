import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getData = createAsyncThunk(
  "keepData/getData",
  async (inputValue, { rejectWithValue, dispatch }) => {
    try {
      const KIY = "1QYXFTSSWV3XIPZP";
      const response = await axios.get(
        `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${inputValue}&interval=60min&apikey=${KIY}`
      );

      if (!response) {
        throw new Error("Can/t delete post. Server error.");
      }

      dispatch(stateData(response.data));

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const DataSlice = createSlice({
  name: "keepData",
  initialState: {
    dataTrading : [],
    
  },
  reducers: {
    stateData: (state, action) => {
      state.dataTrading = action.payload;
      console.log("11", state.dataTrading)
    },
    
  },
});

export const { stateData } = DataSlice.actions;

export default DataSlice.reducer;
