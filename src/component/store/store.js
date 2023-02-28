import { configureStore } from "@reduxjs/toolkit";
import CurrencySlice from "../slice/slice";

export const store = configureStore({
  reducer: {
    cur: CurrencySlice,
  },
});
