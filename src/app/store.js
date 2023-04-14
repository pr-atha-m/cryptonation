import { configureStore } from "@reduxjs/toolkit";

import { cryptoRapidApi } from "../services/cryptoRapidApi";
import { cryptoNewsApi } from "../services/cryptoNewsApi";

export default configureStore({
  reducer: {
    [cryptoRapidApi.reducerPath]: cryptoRapidApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(cryptoRapidApi.middleware)
      .concat(cryptoNewsApi.middleware),
});
