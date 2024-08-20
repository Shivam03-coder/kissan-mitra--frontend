import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedStateName: "",
  selectedDistrictName: "",
  districtsNamesData: [],
  localMarketName: "",
  localMarketNamesData: [],
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
    setLocalMarketName: (state, action) => {
      state.localMarketName = action.payload;
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
      state.localMarketName = [];
    },
  },
});

export const {
  setSelectedStateName,
  setSelectedDistrictName,
  setLocalMarketName,
  setDistrictsNamesData,
  setLocalMarketNamesData,
  clearSelectedDistrictNamesData,
  clearSelelctedlocaLMarketNamesData,
} = statedataSlice.actions;
