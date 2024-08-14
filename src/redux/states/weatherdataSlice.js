import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ToDaysWeatherData: [],
  WeeklyWeatherData: [],
};

export const weatherdataSlice = createSlice({
  name: "weatherstate",
  initialState,
  reducers: {
    setToDaysWeatherData: (state, action) => {
      state.ToDaysWeatherData = action.payload;
    },
    setWeeklyWeatherData: (state, action) => {
      state.WeeklyWeatherData = action.payload;
    },
    clearWeatherData: (state) => {
      state.WeeklyWeatherData = [];
      state.ToDaysWeatherData = [];
    },
  },
});

export const { setToDaysWeatherData, setWeeklyWeatherData, clearWeatherData } =
  weatherdataSlice.actions;
