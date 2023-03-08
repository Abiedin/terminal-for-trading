import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const api_CallTime = createAsyncThunk(
  "exchange/api_CallTime",
  async (time, { rejectWithValue, dispatch }) => {
    try {
      const KIY = "1QYXFTSSWV3XIPZP";
      const response = await axios.get(
        `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=${time}min&apikey=${KIY}`
      );

      if (!response) {
        throw new Error("Can/t delete post. Server error.");
      }

      dispatch(stateCurrency(response.data));

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const dropDownAPI = createAsyncThunk(
  "companyArr/dropDownAPI",
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
    dropList: [],
  },
  reducers: {
    stateCurrency: (state, action) => {
      state.exchangeArr = action.payload;
      console.log("exchangeArr", state.exchangeArr)
    },
    stateFieldInput: (state, action) => {
      state.dropList = action.payload;
    },
  },
});

export const { stateCurrency, stateFieldInput } = CurrencySlice.actions;

export default CurrencySlice.reducer;
