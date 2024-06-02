import { API_URL } from "@/constants/config"
import { UserI } from "@/interface/user"
import { LoginRequestI, LoginResponse, SignUpRequestI } from "@/interface/auth"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/auth`,
  }),
  endpoints: (builder) => ({
    signup: builder.mutation<LoginResponse, SignUpRequestI>({
      query: ({ email, password, fullname, roleId }) => {
        const [firstname, lastname] = fullname.split(" ")
        return {
          url: "/signup",
          method: "POST",
          body: {
            email,
            password,
            firstname,
            lastname,
            roleId,
          },
        }
      },
      transformResponse: (res: { data: LoginResponse }) => {
        return res.data
      },
    }),
    login: builder.mutation<LoginResponse, LoginRequestI>({
      query: ({ email, password }) => {
        return {
          url: "/login",
          method: "POST",
          body: { email, password },
        }
      },
      transformResponse: (res: { data: LoginResponse }) => {
        return res.data
      },
    }),
    getUserData: builder.query<UserI, { authToken: string }>({
      query({ authToken }) {
        return {
          url: "/user",
          method: "GET",
          headers: {
            authorization: `Bearer ${authToken}`,
          },
        }
      },
      transformResponse: (res: { data: { user: UserI } }) => {
        return res.data.user
      },
    }),
  }),
})

export const { useLoginMutation, useGetUserDataQuery, useSignupMutation } =
  authApi
