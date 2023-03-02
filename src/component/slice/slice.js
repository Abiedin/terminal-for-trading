import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const apid_Call = createAsyncThunk(
  "exchange/apid_Call",
  async (time, { rejectWithValue, dispatch }) => {
    try {
      const KIY = "1QYXFTSSWV3XIPZP";
      const response = await axios.get(
        `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=${time}min&apikey=${KIY}`
      );

      if (!response) {
        throw new Error("Can/t delete post. Server error.");
      }

      console.log(response.data);
      dispatch(stateCurrency(response.data));

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const dropDown = createAsyncThunk(
  "exchange/dropDown",
  async (shortName, { rejectWithValue, dispatch }) => {
    try {
      const KIY = "1QYXFTSSWV3XIPZP";
      const response = await axios.get(
        `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${shortName}&apikey=${KIY}`
      );

      if (!response) {
        throw new Error("Server error.");
      }

      dispatch(stateFieldInput(response.data));
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const CurrencySlice = createSlice({
  name: "exchange",
  initialState: {
    exchangeArr: [],
    input: "",
    dropList: [],
  },
  reducers: {
    stateCurrency: (state, action) => {
      state.exchangeArr = action.payload;
    },
    stateFieldInput: (state, action) => {
      state.dropList = action.payload;
      console.log("111", action.payload);
    },
  },
});

export const { stateCurrency, stateFieldInput } = CurrencySlice.actions;

export default CurrencySlice.reducer;
