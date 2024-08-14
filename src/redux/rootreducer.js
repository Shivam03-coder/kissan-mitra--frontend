import { combineReducers } from "@reduxjs/toolkit";
import { Apiservices } from "./middlewares/apiservices";
import { userAuth } from "./states/userauthstate";
import { weatherdataSlice } from "./states/weatherdataSlice";

export const rootReducers = combineReducers({
  userauthstate: userAuth.reducer,
  weather: weatherdataSlice.reducer,
  [Apiservices.reducerPath]: Apiservices.reducer,
});
  // const { ToDaysWeatherData, WeeklyWeatherData } = useSelector(
  //   (state) => state.weather
  // );
