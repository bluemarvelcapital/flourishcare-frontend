import { API_URL } from "@/constants/config"
import { RoleI } from "@/interface/role"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const profilesApi = createApi({
  reducerPath: "profilesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/profile`,
  }),
  endpoints: (builder) => ({
    getProfiles: builder.query<RoleI[], { accessToken: string }>({
      query: ({ accessToken }) => {
        return {
          url: "/",
          method: "GET",
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        }
      },
      transformResponse: (res: { data: { roles: RoleI[] } }) => {
        return res.data.roles
      },
    }),
  }),
})

export const { useGetProfilesQuery } = profilesApi
