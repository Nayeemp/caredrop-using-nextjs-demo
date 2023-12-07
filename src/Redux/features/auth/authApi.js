'use client';

import { apiSlice } from '../api/apiSlice';
import { userLoggedIn, userLoggedOut } from './authSlice';

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: '/auth/login/',
        method: 'POST',
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          console.log('inside authApi arg = ', arg);
          const result = await queryFulfilled;
          // console.log("inside authApi  result = ", result);

          // console.log('inside authApi  result.data.access_token = ', result.data.access_token);
          // dispatch(
          //   userLoggedIn({
          //     access_token: result.data.access_token,
          //   })
          // );

          // localStorage.setItem(
          //   "auth",
          //   JSON.stringify({
          //     access_token: result.data.access_token,
          //   })
          // );
        } catch (error) {
          //
          console.log('yoo');
        }
      },
    }),
  }),
});

export const { useLoginMutation } = authApi;
