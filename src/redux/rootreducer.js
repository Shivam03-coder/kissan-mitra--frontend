import { combineReducers } from "@reduxjs/toolkit";
import { Apiservices } from "./middlewares/apiservices";
import { userAuth } from "./states/userauthstate";
import { weatherdataSlice } from "./states/weatherdataSlice";
import { statedataSlice } from "./states/statedataSlice";
import { socketSlice } from "./states/socketSlice";

export const rootReducers = combineReducers({
  userauthstate: userAuth.reducer,
  weather: weatherdataSlice.reducer,
  stateData: statedataSlice.reducer,
  socket: socketSlice.reducer,
  [Apiservices.reducerPath]: Apiservices.reducer,
});
