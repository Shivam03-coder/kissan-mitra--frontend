import { combineReducers } from "@reduxjs/toolkit";
import { Apiservices } from "./middlewares/apiservices";
import { userAuth } from "./states/userauthstate";
import { weatherdataSlice } from "./states/weatherdataSlice";
import { statedataSlice } from "./states/statedataSlice";
import { socketSlice } from "./states/socketSlice";
import { communitySlice } from "./states/communitySlice";

export const rootReducers = combineReducers({
  userauthstate: userAuth.reducer,
  weather: weatherdataSlice.reducer,
  stateData: statedataSlice.reducer,
  socket: socketSlice.reducer,
  community: communitySlice.reducer,
  [Apiservices.reducerPath]: Apiservices.reducer,
});
