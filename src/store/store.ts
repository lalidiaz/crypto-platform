import { configureStore } from "@reduxjs/toolkit";
import coinsReducer from "./slices/coins";
import coinReducer from "./slices/coin";

export const store = configureStore({
  reducer: {
    coins: coinsReducer,
    coin: coinReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
