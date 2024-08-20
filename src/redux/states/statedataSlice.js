import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedStateName: "",
  selectedDistrictName: "",
  selectedLocalMarketName: "",
  districtsNamesData: [],
  localMarketNamesData: [],
  marketPriceData: [],
};

export const statedataSlice = createSlice({
  name: "statedata",
  initialState,
  reducers: {
    setSelectedStateName: (state, action) => {
      state.selectedStateName = action.payload;
    },
    setSelectedDistrictName: (state, action) => {
      state.selectedDistrictName = action.payload;
    },
    setSelectedLocalMarketName: (state, action) => {
      state.selectedLocalMarketName = action.payload;
    },
    setDistrictsNamesData: (state, action) => {
      state.districtsNamesData = action.payload;
    },
    setLocalMarketNamesData: (state, action) => {
      state.localMarketNamesData = action.payload;
    },
    clearSelectedDistrictNamesData: (state) => {
      state.districtsNamesData = [];
    },
    clearSelelctedlocaLMarketNamesData: (state) => {
      state.localMarketNamesData = [];
    },
    setMarketPriceData: (state, action) => {
      state.marketPriceData = action.payload;
    },
  },
});

export const {
  setSelectedStateName,
  setSelectedDistrictName,
  setSelectedLocalMarketName,
  setDistrictsNamesData,
  setMarketPriceData,
  setLocalMarketNamesData,
  clearSelectedDistrictNamesData,
  clearSelelctedlocaLMarketNamesData,
} = statedataSlice.actions;
