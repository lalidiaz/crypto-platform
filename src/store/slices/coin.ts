import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { CoinDetails, Currency, History } from "../../types";
import axios from "axios";

type CoinState = {
  coin: CoinDetails;
  loading: boolean;
  error: string | null;
  currency: Currency;
  historyChart: {
    loadingHistoryChart: boolean;
    dataHistoryChart: [number, number][] | [];
    errorHistoryChart: string | null;
  };
  history: {
    loadingHistory: boolean;
    dataHistory: History | null;
    errorHistory: string | null;
  };
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
    links: {
      homepage: "",
      whitepaper: "",
      repos_url: { github: "", bitbucket: "" },
    },
    developer_data: {
      forks: null,
      stars: null,
      subscribers: null,
    },
    community_data: {
      twitter_followers: null,
      reddit_average_posts_48h: null,
      facebook_likes: null,
    },
    image: { thumb: "", small: "", large: "" },
    watchlist_portfolio_users: null,
    market_cap_rank: null,
    market_data: {
      atl_change_percentage: null,
      ath_change_percentage: null,
      currencies: {
        current_price: null,
        atl: null,
        market_cap: null,
        total_volume: null,
        high_24h: null,
        low_24h: null,
        price_change_24h_in_currency: null,
        market_cap_change_24h_in_currency: null,
      },
      numbers: { market_cap_change_24h: null, price_change_24h: null },
      dates: {
        ath_date: null,
        atl_date: null,
      },
      percentages: {
        price_change_percentage_24h: null,
        price_change_percentage_7d: null,
        price_change_percentage_14d: null,
        price_change_percentage_30d: null,
        price_change_percentage_60d: null,
        price_change_percentage_200d: null,
        price_change_percentage_1y: null,
        market_cap_change_percentage_24h: null,
      },
      percentages_currency: {
        price_change_percentage_1h_in_currency: null,
        price_change_percentage_24h_in_currency: null,
        price_change_percentage_7d_in_currency: null,
        price_change_percentage_14d_in_currency: null,
        price_change_percentage_30d_in_currency: null,
        price_change_percentage_60d_in_currency: null,
        price_change_percentage_200d_in_currency: null,
        price_change_percentage_1y_in_currency: null,
        market_cap_change_percentage_24h_in_currency: null,
      },
      ath: {
        btc: null,
        eth: null,
        usd: null,
      },
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
  historyChart: {
    loadingHistoryChart: false,
    errorHistoryChart: null,
    dataHistoryChart: [],
  },
  history: {
    loadingHistory: false,
    dataHistory: null,
    errorHistory: null,
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

        state.coin.image = action.payload.image;

        state.coin.market_cap_rank = action.payload.market_cap_rank;

        state.coin.image = action.payload.image;

        state.coin.market_cap_rank = action.payload.market_cap_rank;

        state.coin.watchlist_portfolio_users =
          action.payload.watchlist_portfolio_users;

        state.coin.market_data.ath = action.payload.market_data.ath;

        state.coin.market_data.currencies.current_price =
          action.payload.market_data.current_price;

        state.coin.market_data.ath_change_percentage =
          action.payload.market_data.ath_change_percentage;

        state.coin.market_data.dates.ath_date =
          action.payload.market_data.ath_date;

        state.coin.market_data.currencies.atl = action.payload.market_data.atl;

        state.coin.market_data.atl_change_percentage =
          action.payload.market_data.atl_change_percentage;

        state.coin.market_data.dates.atl_date =
          action.payload.market_data.atl_date;

        state.coin.market_data.currencies.market_cap =
          action.payload.market_data.market_cap;

        state.coin.market_data.currencies.total_volume =
          action.payload.market_data.total_volume;

        state.coin.market_data.currencies.high_24h =
          action.payload.market_data.high_24h;

        state.coin.market_data.currencies.low_24h =
          action.payload.market_data.low_24h;

        state.coin.market_data.numbers.price_change_24h =
          action.payload.market_data.price_change_24h;

        state.coin.market_data.percentages.price_change_percentage_24h =
          action.payload.market_data.price_change_percentage_24h;

        state.coin.market_data.percentages.price_change_percentage_7d =
          action.payload.market_data.price_change_percentage_7d;

        state.coin.market_data.percentages.price_change_percentage_14d =
          action.payload.market_dataprice_change_percentage_14d;

        state.coin.market_data.percentages.price_change_percentage_30d =
          action.payload.market_data.price_change_percentage_30d;

        state.coin.market_data.percentages.price_change_percentage_60d =
          action.payload.market_data.price_change_percentage_60d;

        state.coin.market_data.percentages.price_change_percentage_200d =
          action.payload.market_data.price_change_percentage_200d;

        state.coin.market_data.percentages.price_change_percentage_1y =
          action.payload.market_data.price_change_percentage_1y;

        state.coin.market_data.percentages.market_cap_change_24h =
          action.payload.market_data.market_cap_change_24h;

        state.coin.market_data.percentages.market_cap_change_percentage_24h =
          action.payload.market_data.market_cap_change_percentage_24h;

        state.coin.market_data.currencies.price_change_24h_in_currency =
          action.payload.market_data.price_change_24h_in_currency;

        state.coin.market_data.percentages_currency.price_change_percentage_1h_in_currency =
          action.payload.market_data.price_change_percentage_1h_in_currency;

        state.coin.market_data.percentages_currency.price_change_percentage_24h_in_currency =
          action.payload.market_data.price_change_percentage_24h_in_currency;

        state.coin.market_data.percentages_currency.price_change_percentage_7d_in_currency =
          action.payload.market_data.price_change_percentage_7d_in_currency;

        state.coin.market_data.percentages_currency.price_change_percentage_14d_in_currency =
          action.payload.market_data.price_change_percentage_14d_in_currency;

        state.coin.market_data.percentages_currency.price_change_percentage_30d_in_currency =
          action.payload.market_data.price_change_percentage_30d_in_currency;

        state.coin.market_data.percentages_currency.price_change_percentage_60d_in_currency =
          action.payload.market_data.price_change_percentage_60d_in_currency;

        state.coin.market_data.percentages_currency.price_change_percentage_200d_in_currency =
          action.payload.market_data.price_change_percentage_200d_in_currency;

        state.coin.market_data.percentages_currency.price_change_percentage_1y_in_currency =
          action.payload.market_data.price_change_percentage_1y_in_currency;

        state.coin.market_data.currencies.market_cap_change_24h_in_currency =
          action.payload.market_data.market_cap_change_24h_in_currency;

        state.coin.market_data.percentages_currency.market_cap_change_percentage_24h_in_currency =
          action.payload.market_data.market_cap_change_percentage_24h_in_currency;

        state.coin.last_updated = action.payload.last_updated;

        state.coin.links.homepage = action.payload.links.homepage[0];

        state.coin.links.whitepaper = action.payload.links.whitepaper;
        state.coin.links.repos_url.github =
          action.payload.links.repos_url.github[0];
        state.coin.links.repos_url.bitbucket =
          action.payload.links.repos_url.bitbucket[0];
        state.coin.developer_data.forks = action.payload.developer_data.forks;
        state.coin.developer_data.stars = action.payload.developer_data.stars;
        state.coin.developer_data.subscribers =
          action.payload.developer_data.subscribers;

        state.coin.community_data.twitter_followers =
          action.payload.community_data.twitter_followers;
        state.coin.community_data.reddit_average_posts_48h =
          action.payload.community_data.reddit_average_posts_48h;
        state.coin.community_data.facebook_likes =
          action.payload.community_data.facebook_likes;
      })
      .addCase(fetchCoinDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      })
      .addCase(fetchCoinHistoryChart.pending, (state) => {
        state.historyChart.loadingHistoryChart = true;
        state.historyChart.errorHistoryChart = null;
      })
      .addCase(fetchCoinHistoryChart.fulfilled, (state, action) => {
        state.historyChart.loadingHistoryChart = false;
        state.historyChart.dataHistoryChart = action.payload.prices;
      })
      .addCase(fetchCoinHistoryChart.rejected, (state, action) => {
        state.historyChart.loadingHistoryChart = false;
        state.historyChart.errorHistoryChart =
          action.error.message || "Something went wrong";
      });
  },
});

export const coinSelector = (state: RootState) => state.coin;

export const fetchCoinDetails = createAsyncThunk<
  CoinDetails,
  { id: string | undefined },
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
export const fetchCoinHistoryChart = createAsyncThunk<
  [number, number],
  { id: string; days: number; currency: string },
  { rejectValue: string }
>(
  "coin/fetchCoinHistoryChart",
  async ({ id, days = 365, currency }, thunkAPI) => {
    try {
      const request = {
        method: "GET",
        url: `https://api.coingecko.com/api/v3/coins/${id}/market_chart`,
        params: { vs_currency: currency, days: days, interval: "daily" },
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
  }
);

export const fetchCoinHistory = createAsyncThunk<
  History,
  { id: string },
  { rejectValue: string }
>("coin/fetchCoinHistory", async ({ id }, thunkAPI) => {
  try {
    const request = {
      method: "GET",
      url: `https://api.coingecko.com/api/v3/coins/${id}/history`,

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

export const { setCurrency } = coinsSlice.actions;

export default coinsSlice.reducer;
