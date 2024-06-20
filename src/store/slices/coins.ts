import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Coin } from "../../types";
import axios from "axios";

type CoinsState = {
  coins: Coin[];
  loading: boolean;
  error: string | null;
  page: number;
  totalPages: number;
};

const initialState: CoinsState = {
  coins: [],
  loading: false,
  error: null,
  page: 1,
  totalPages: 10,
};

export const coinsSlice = createSlice({
  name: "coins",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
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
        console.log("action.payload", action.payload);
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export const coinsSelector = (state: RootState) => state.coins;

export const fetchCoins = createAsyncThunk<
  Coin[],
  { currency?: string; page: number; order?: string },
  { rejectValue: string }
>(
  "coins/fetchCoins",
  async ({ currency = "usd", page, order = "market_cap_desc" }, thunkAPI) => {
    try {
      const request = {
        method: "GET",
        url: `${import.meta.env.VITE_API_URL}/coins/markets`,
        params: {
          vs_currency: currency,
          page: page,
          per_page: 5,
          order: order,
        },
        headers: {
          accept: "application/json",
          "x-cg-demo-api-key": import.meta.env.VITE_API_KEY,
        },
      };

      const response = await axios(request);

      return response.data;
    } catch (error) {
      console.log("error ===>", error);
      return thunkAPI.rejectWithValue("Failed to fetch coins.");
    }
  }
);

export const { setPage } = coinsSlice.actions;

export default coinsSlice.reducer;
