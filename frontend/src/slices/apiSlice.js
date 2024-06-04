import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants";

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

// Custom baseQuery to include a delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
// eslint-disable-next-line no-unused-vars
const baseQueryWithDelay = async (args, api, extraOptions) => {
  // Simulate a 1-second delay (1000 ms)
  await delay(1000);
  // Call the original baseQuery
  return baseQuery(args, api, extraOptions);
};
// Custom baseQuery to include a delay

export const apiSlice = createApi({
  //   baseQuery: baseQueryWithDelay,
  baseQuery,
  tagTypes: ["Product", "User", "Order"],
  // eslint-disable-next-line no-unused-vars
  endpoints: (builder) => ({}),
});
