import { combineReducers } from "@reduxjs/toolkit";
import { Apiservices } from "./middlewares/apiservices";
import { userAuth } from "./states/userauthstate";

export const rootReducers = combineReducers({
  userauthstate: userAuth.reducer,
  [Apiservices.reducerPath]: Apiservices.reducer,
});
