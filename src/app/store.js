import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { spot, spots, search } from "./SpotSearch/store";

const createReducer = () =>
  combineReducers({
    spot,
    spots,
    search
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
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(middlewares),
  devTools: process.env.NODE_ENV === "development"
});

export default store;
