import { configureStore } from "@reduxjs/toolkit";

import { cryptoRapidApi } from "../services/cryptoRapidApi";

export default configureStore({
  reducer: {
    [cryptoRapidApi.reducerPath]: cryptoRapidApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoRapidApi.middleware),
});
