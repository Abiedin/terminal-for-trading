import { configureStore } from "@reduxjs/toolkit";
import CurrencySlice from "../slice/slice";
import DataSlice from "../slice/DataIntraday";

export const store = configureStore({
  reducer: {
    currency: CurrencySlice,
    todayPrice: DataSlice,
  },
});
