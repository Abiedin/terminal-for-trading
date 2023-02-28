import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'; 
import axios from 'axios';

export const apid_Call = createAsyncThunk(
  'exchange/apid_Call',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const KIY = '1QYXFTSSWV3XIPZP';
      const response = await axios.get(
        `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=1min&apikey=${KIY}`
      );

      if (!response) {
        throw new Error('Can/t delete post. Server error.');
      }

      console.log("asd", response.data);
      dispatch(stateCurrency(response.data))
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const setError = (state, action) => {
  console.log('rejected');
  state.status = 'rejected';
  state.error = action.payload;
};

const CurrencySlice = createSlice({
  name: 'exchange',
  initialState: {
    exchangeArr: [],
  },
  reducers: {
    stateCurrency: (state, action) => {
      state.exchangeArr = action.payload;
      console.log(state.exchangeArr)
    },
  },
});

export const { stateCurrency } = CurrencySlice.actions;

export default CurrencySlice.reducer;
