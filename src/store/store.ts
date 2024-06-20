import { configureStore } from "@reduxjs/toolkit";
import coinsReducer from "./slices/coins";
import coinReducer from "./slices/coin";
import categoriesReducer from "./slices/categories";

export const store = configureStore({
  reducer: {
    coins: coinsReducer,
    coin: coinReducer,
    categories: categoriesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
