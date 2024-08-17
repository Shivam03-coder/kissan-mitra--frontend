import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ToDaysWeatherData: [],
  WeeklyWeatherData: [],
  ThreeHoursWeatherData: [],
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
    setThreeHoursWeatherData: (state, action) => {
      state.ThreeHoursWeatherData = action.payload;
    },
    clearWeatherData: (state) => {
      state.WeeklyWeatherData = [];
      state.ToDaysWeatherData = [];
    },
  },
});

export const {
  setToDaysWeatherData,
  setWeeklyWeatherData,
  setThreeHoursWeatherData,
  clearWeatherData,
} = weatherdataSlice.actions;
