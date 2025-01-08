import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  error: false,
  countries: [{}, {}, {}, {}, {}],
};

export const getCountries = createAsyncThunk(
  "countries/getCountries",
  async (region) => {
    const response = await axios.get(
      `https://restcountries.com/v2/${region}?fields=name,region,flag`
    );

    return response.data;
  }
);

export const countrySlice = createSlice({
  name: "countries",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getCountries.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getCountries.fulfilled, (state, action) => {
      state.isLoading = false;
      state.countries = action.payload;
    });
    builder.addCase(getCountries.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default countrySlice.reducer;
