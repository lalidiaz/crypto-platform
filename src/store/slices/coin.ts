import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { ICoinDetails, IHistoricalChart, ICurrency } from "../../types";
import axios from "axios";

type CoinState = {
  coin: ICoinDetails;
  loading: boolean;
  error: string | null;
  currency: ICurrency;
  historicalChart: {
    loadingHistoryChart: boolean;
    historicalData: IHistoricalChart | [];
    errorHistoryChart: string | null;
  };
};

const CurrencyInitialState = {
  aed: "",
  usd: "",
  ars: "",
};

const initialState: CoinState = {
  coin: {
    id: "",
    symbol: "",
    name: "",
    web_slug: "",
    categories: [],
    localization: {},
    description: {},
    whitepaper: "",
    image: { thumb: "", small: "", large: "" },
    watchlist_portfolio_users: null,
    market_cap_rank: null,
    market_data: {
      current_price: CurrencyInitialState,
      ath: { btc: null, eth: null, usd: null },
      ath_change_percentage: CurrencyInitialState,
      ath_date: CurrencyInitialState,
      atl: CurrencyInitialState,
      atl_change_percentage: CurrencyInitialState,
      atl_date: CurrencyInitialState,
      market_cap: CurrencyInitialState,
      total_volume: CurrencyInitialState,
      high_24h: CurrencyInitialState,
      low_24h: CurrencyInitialState,
      price_change_24h: null,
      price_change_percentage_24h: null,
      price_change_percentage_7d: null,
      price_change_percentage_14d: null,
      price_change_percentage_30d: null,
      price_change_percentage_60d: null,
      price_change_percentage_200d: null,
      price_change_percentage_1y: null,
      market_cap_change_24h: null,
      market_cap_change_percentage_24h: null,
      price_change_24h_in_currency: CurrencyInitialState,
      price_change_percentage_1h_in_currency: CurrencyInitialState,
      price_change_percentage_24h_in_currency: CurrencyInitialState,
      price_change_percentage_7d_in_currency: CurrencyInitialState,
      price_change_percentage_14d_in_currency: CurrencyInitialState,
      price_change_percentage_30d_in_currency: CurrencyInitialState,
      price_change_percentage_60d_in_currency: CurrencyInitialState,
      price_change_percentage_200d_in_currency: CurrencyInitialState,
      price_change_percentage_1y_in_currency: CurrencyInitialState,
      market_cap_change_24h_in_currency: CurrencyInitialState,
      market_cap_change_percentage_24h_in_currency: CurrencyInitialState,
    },
    last_updated: "",
  },
  loading: false,
  error: null,
  currency: {
    label: "USD",
    format: "en-US",
    currency: "usd",
  },
  historicalChart: {
    loadingHistoryChart: false,
    errorHistoryChart: null,
    historicalData: [],
  },
};

export const coinsSlice = createSlice({
  name: "coin",
  initialState,
  reducers: {
    setCurrency: (state, action) => {
      state.currency.format = action.payload.format;
      state.currency.currency = action.payload.value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoinDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCoinDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.coin.id = action.payload.id;
        state.coin.symbol = action.payload.symbol;
        state.coin.name = action.payload.name;
        state.coin.web_slug = action.payload.web_slug;
        state.coin.categories = action.payload.categories;
        state.coin.localization = action.payload.localization;
        state.coin.description = action.payload.description;
        state.coin.whitepaper = action.payload.whitepaper;
        state.coin.image = action.payload.image;
        state.coin.market_cap_rank = action.payload.market_cap_rank;
        state.coin.image = action.payload.image;
        state.coin.market_cap_rank = action.payload.market_cap_rank;
        state.coin.market_data.current_price =
          action.payload.market_data.current_price;
        state.coin.watchlist_portfolio_users =
          action.payload.watchlist_portfolio_users;

        state.coin.market_data.ath = action.payload.market_data.ath;
        state.coin.market_data.ath_change_percentage =
          action.payload.market_data.ath_change_percentage;
        state.coin.market_data.ath_date = action.payload.market_data.ath_date;
        state.coin.market_data.atl = action.payload.market_data.atl;
        state.coin.market_data.atl_change_percentage =
          action.payload.market_data.atl_change_percentage;
        state.coin.market_data.atl_date = action.payload.market_data.atl_date;
        state.coin.market_data.market_cap =
          action.payload.market_data.market_cap;
        state.coin.market_data.total_volume =
          action.payload.market_data.total_volume;
        state.coin.market_data.high_24h = action.payload.market_data.high_24h;
        state.coin.market_data.low_24h = action.payload.market_data.low_24h;

        state.coin.market_data.price_change_24h =
          action.payload.market_data.price_change_24h;
        state.coin.market_data.price_change_percentage_24h =
          action.payload.market_data.price_change_percentage_24h;
        state.coin.market_data.price_change_percentage_7d =
          action.payload.market_data.price_change_percentage_7d;
        state.coin.market_data.price_change_percentage_14d =
          action.payload.market_data.price_change_percentage_14d;
        state.coin.market_data.price_change_percentage_30d =
          action.payload.market_data.price_change_percentage_30d;
        state.coin.market_data.price_change_percentage_60d =
          action.payload.market_data.price_change_percentage_60d;
        state.coin.market_data.price_change_percentage_200d =
          action.payload.market_data.price_change_percentage_200d;
        state.coin.market_data.price_change_percentage_1y =
          action.payload.market_data.price_change_percentage_1y;
        state.coin.market_data.market_cap_change_24h =
          action.payload.market_data.market_cap_change_24h;
        state.coin.market_data.market_cap_change_percentage_24h =
          action.payload.market_data.market_cap_change_percentage_24h;
        state.coin.market_data.price_change_24h_in_currency =
          action.payload.market_data.price_change_24h_in_currency;
        state.coin.market_data.price_change_percentage_1h_in_currency =
          action.payload.market_data.price_change_percentage_1h_in_currency;
        state.coin.market_data.price_change_percentage_24h_in_currency =
          action.payload.market_data.price_change_percentage_24h_in_currency;
        state.coin.market_data.price_change_percentage_7d_in_currency =
          action.payload.market_data.price_change_percentage_7d_in_currency;

        state.coin.market_data.price_change_percentage_14d_in_currency =
          action.payload.market_data.price_change_percentage_14d_in_currency;

        state.coin.market_data.price_change_percentage_30d_in_currency =
          action.payload.market_data.price_change_percentage_30d_in_currency;

        state.coin.market_data.price_change_percentage_60d_in_currency =
          action.payload.market_data.price_change_percentage_60d_in_currency;

        state.coin.market_data.price_change_percentage_200d_in_currency =
          action.payload.market_data.price_change_percentage_200d_in_currency;

        state.coin.market_data.price_change_percentage_1y_in_currency =
          action.payload.market_data.price_change_percentage_1y_in_currency;

        state.coin.market_data.market_cap_change_24h_in_currency =
          action.payload.market_data.market_cap_change_24h_in_currency;

        state.coin.market_data.market_cap_change_percentage_24h_in_currency =
          action.payload.market_data.market_cap_change_percentage_24h_in_currency;

        state.coin.last_updated = action.payload.last_updated;
      })
      .addCase(fetchCoinDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      })
      .addCase(fetchCoinHistoricalChart.pending, (state) => {
        state.historicalChart.loadingHistoryChart = true;
        state.historicalChart.errorHistoryChart = null;
      })
      .addCase(fetchCoinHistoricalChart.fulfilled, (state, action) => {
        state.historicalChart.loadingHistoryChart = false;
        state.historicalChart.historicalData = action.payload.prices;
      })
      .addCase(fetchCoinHistoricalChart.rejected, (state, action) => {
        state.historicalChart.loadingHistoryChart = false;
        state.historicalChart.errorHistoryChart =
          action.error.message || "Something went wrong";
      });
  },
});

export const coinSelector = (state: RootState) => state.coin;

export const fetchCoinDetails = createAsyncThunk<
  ICoinDetails,
  { id: string },
  { rejectValue: string }
>("coin/fetchCoinDetails", async ({ id }, thunkAPI) => {
  try {
    const request = {
      method: "GET",
      url: `https://api.coingecko.com/api/v3/coins/${id}`,
      params: { vs_currency: "usd", per_page: "50" },
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

// Coin Historical Chart Data within Time Range by ID
export const fetchCoinHistoricalChart = createAsyncThunk<
  IHistoricalChart,
  { id: string; days: number; currency: string },
  { rejectValue: string }
>(
  "coin/fetchCoinHistoricalChart",
  async ({ id, days = 365, currency }, thunkAPI) => {
    try {
      const request = {
        method: "GET",
        url: `https://api.coingecko.com/api/v3/coins/${id}/market_chart`,
        params: { vs_currency: currency, days: days },
        headers: {
          accept: "application/json",
          "x-cg-demo-api-key": import.meta.env.VITE_API_KEY,
        },
      };
      const response = await axios(request);

      console.log("----- response fetchCoinHistoricalChart-----", response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to fetch coins.");
    }
  }
);

export const { setCurrency } = coinsSlice.actions;

export default coinsSlice.reducer;
