import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { ICoin } from "../../types";
import axios from "axios";

type CoinsState = {
  coins: ICoin[];
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
    setNextPage: (state) => {
      state.page = state.page + 1;
    },
    setPrevPage: (state) => {
      state.page = state.page + 1;
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
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export const coinsSelector = (state: RootState) => state.coins;

// export const allCoins = (state: { coins: ICoin[] }) => state.coins;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export const fetchCoins = createAsyncThunk<
  ICoin[],
  { page: number },
  { rejectValue: string }
>("coins/fetchCoins", async ({ page }, thunkAPI) => {
  try {
    const request = {
      method: "GET",
      url: `${import.meta.env.VITE_API_URL}/coins/markets`,
      params: { vs_currency: "usd", page: page, per_page: 5 },
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": import.meta.env.VITE_API_KEY,
      },
    };

    const response = await axios(request);

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Failed to fetch coins.");
  }
});

export const { setPage, setNextPage, setPrevPage } = coinsSlice.actions;

export default coinsSlice.reducer;
