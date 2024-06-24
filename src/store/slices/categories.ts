import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Category } from "../../types";
import axios from "axios";

type CategoriesState = {
  categories: Category[];
  loadingCategories: boolean;
  errorCategories: null | string;
};

const initialState: CategoriesState = {
  categories: [],
  loadingCategories: false,
  errorCategories: null,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loadingCategories = true;
        state.errorCategories = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loadingCategories = false;
        state.categories = action.payload.slice(0, 12);
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loadingCategories = false;
        state.errorCategories = action.error.message || "Something went wrong";
      });
  },
});

export const categoriesSelector = (state: RootState) => state.categories;

export const fetchCategories = createAsyncThunk<
  Category[],
  { rejectValue: string }
>("categories/fetchCategories", async (_, thunkAPI) => {
  try {
    const request = {
      method: "GET",
      url: "https://api.coingecko.com/api/v3/coins/categories",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": import.meta.env.VITE_API_KEY,
      },
    };
    const response = await axios(request);

    return response.data;
  } catch (error) {
    console.log("error fetchCategories", error);
    return thunkAPI.rejectWithValue("Failed to fetch coins.");
  }
});

export default categoriesSlice.reducer;
