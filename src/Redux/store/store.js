/* eslint-disable import/prefer-default-export */
import { configureStore } from "@reduxjs/toolkit";
import ButtonReducer from "../features/Button/ButtonSlice";
import { apiSlice } from "../features/api/apiSlice";
import authSliceReducer from "../features/auth/authSlice";

export const makeStore = () => {
  return configureStore({
    [apiSlice.reducerPath]: apiSlice.reducer,
    reducer: {
      Button: ButtonReducer,
      auth: authSliceReducer,
    },

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),

    devTools: process.env.NODE_ENV !== "production",
  });
};
