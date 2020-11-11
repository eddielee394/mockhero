import { configureStore, combineReducers } from "@reduxjs/toolkit";
import spot from "./components/spot/store/spotSlice";
import spots from "./components/spots/spotsSlice";
import search from "./components/search/searchSlice";
import checkout from "./components/checkout/checkoutSlice";

const createReducer = () =>
  combineReducers({
    spot,
    spots,
    search,
    checkout,
  });

if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept(createReducer, () => {
    store.replaceReducer(createReducer());
  });
}

const middlewares = [];

if (process.env.NODE_ENV === "development") {
  const { logger } = require(`redux-logger`);

  middlewares.push(logger);
}

const store = configureStore({
  reducer: createReducer(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
  devTools: process.env.NODE_ENV === "development",
});

export default store;
