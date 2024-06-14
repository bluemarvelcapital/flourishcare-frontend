import { API_URL } from "@/constants/config"
import {
  PreferenceI,
  UpdateUserPreferenceI,
  UserPreferenceI,
} from "@/interface/preference"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const preferenceApi = createApi({
  reducerPath: "preferenceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/preference`,
  }),
  endpoints: (builder) => ({
    getUserPreferences: builder.query<
      UserPreferenceI[],
      { accessToken: string }
    >({
      query({ accessToken }) {
        return {
          url: "/user",
          method: "GET",
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        }
      },
      transformResponse: (res: {
        data: { userPreferences: UserPreferenceI[] }
      }) => {
        return res.data.userPreferences
      },
    }),
    getPreferences: builder.query<PreferenceI[], { accessToken: string }>({
      query({ accessToken }) {
        return {
          url: "/",
          method: "GET",
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        }
      },
      transformResponse: (res: { data: { preferences: PreferenceI[] } }) => {
        return res.data.preferences
      },
    }),
    updateUserPreference: builder.mutation<
      UserPreferenceI,
      UpdateUserPreferenceI
    >({
      query: ({ accessToken, ...data }) => {
        return {
          url: "/user",
          method: "PATCH",
          body: data,
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        }
      },
    }),
  }),
})

export const {
  useUpdateUserPreferenceMutation,
  useGetUserPreferencesQuery,
  useGetPreferencesQuery,
} = preferenceApi
