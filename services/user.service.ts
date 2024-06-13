import { API_URL } from "@/constants/config"
import { UpdateProfileI, UserI } from "@/interface/user"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/user`,
  }),
  endpoints: (builder) => ({
    updateUser: builder.mutation<UserI, UpdateProfileI>({
      query: ({ accessToken, ...data }) => {
        return {
          url: "/",
          method: "PATCH",
          body: data,
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        }
      },
      transformResponse: (res: { data: { user: UserI } }) => {
        return res.data.user
      },
    }),
  }),
})

export const { useUpdateUserMutation } = userApi
