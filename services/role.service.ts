import { API_URL } from "@/constants/config"
import { RoleI } from "@/interface/role"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const roleApi = createApi({
  reducerPath: "roleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/role`,
  }),
  endpoints: (builder) => ({
    getRoles: builder.query<RoleI[], null>({
      query: () => {
        return {
          url: "/",
          method: "GET",
        }
      },
      transformResponse: (res: { data: { roles: RoleI[] } }) => {
        return res.data.roles
      },
    }),
  }),
})

export const { useGetRolesQuery } = roleApi
