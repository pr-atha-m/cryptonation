import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Key": "551e91c84emsh3b4dd17542a30d5p16cfbajsn9391eb805065",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({
  url,
  headers: cryptoApiHeaders,
});

export const cryptoRapidApi = createApi({
  reducerPath: "cryptoRapidApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCoins: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),

    getCoinDetails: builder.query({
      query: (coinID) => createRequest(`/coin/${coinID}`),
    }),

    getCoinHistory: builder.query({
      query: ({ coinID, timePeriod }) =>
        createRequest(`/coin/${coinID}/history?timePeriod=${timePeriod}`),
    }),
  }),
});

export const {
  useGetCoinsQuery,
  useGetCoinDetailsQuery,
  useGetCoinHistoryQuery,
} = cryptoRapidApi;
