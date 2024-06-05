import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { ICoin } from "../../types";
import axios from "axios";

interface CoinsState {
  coins: ICoin[];
  loading: boolean;
  error: string | null;
}
//  status: "idle" || "loading" || "succeeded" || "failed",

const initialState: CoinsState = {
  coins: [],
  loading: false,
  error: null,
};

export const coinsSlice = createSlice({
  name: "coins",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoins.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCoins.fulfilled, (state, action) => {
        state.loading = false;
        state.coins = action.payload;
      })
      .addCase(fetchCoins.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

// export const { fetchCoins } = coinsSlice.actions;

export const coinsSelector = (state: RootState) => state.coins;

// export const allCoins = (state: { coins: ICoin[] }) => state.coins;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default coinsSlice.reducer;

export const fetchCoins = createAsyncThunk<
  ICoin[],
  void,
  { rejectValue: string }
>("coins/fetchCoins", async (_, thunkAPI) => {
  try {
    const request = {
      method: "GET",
      url: `${import.meta.env.VITE_API_URL}/coins/markets`,
      params: { vs_currency: "usd", per_page: "50" },
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": import.meta.env.VITE_API_KEY,
      },
    };
    const response = await axios(request);

    console.log("response.data --->", response.data);

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Failed to fetch coins.");
  }
});
