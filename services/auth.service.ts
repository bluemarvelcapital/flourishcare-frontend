import { API_URL } from "@/constants/config"
import { UserI } from "@/interface/user"
import {
  GuestSignupI,
  GuestSignUpResponseI,
  LoginRequestI,
  LoginResponse,
  SignUpRequestI,
} from "@/interface/auth"
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

    verifyEmail: builder.mutation<
      { accessToken: string },
      { verificationCode: string; accessToken: string }
    >({
      query: ({ verificationCode, accessToken }) => {
        return {
          url: "/verifyemail",
          method: "POST",
          body: { verificationCode },
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        }
      },
      transformResponse: (res: { data: { accessToken: string } }) => {
        return res.data
      },
    }),

    guestSignup: builder.mutation<GuestSignUpResponseI, GuestSignupI>({
      query: ({ email, phone, firstname, lastname }) => {
        return {
          url: "/signup/guest",
          method: "POST",
          body: {
            email,
            firstname,
            lastname,
            phone,
          },
        }
      },
      transformResponse: (res: {
        data: { tempUser: GuestSignUpResponseI }
      }) => {
        return res.data.tempUser
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

    forgotPassword: builder.mutation<
      { message: string; data: { accessToken: string } },
      { email: string }
    >({
      query: ({ email }) => {
        return {
          url: "/forgot-password",
          method: "POST",
          body: { email },
        }
      },
    }),

    resetPassword: builder.mutation<
      { accessToken: string },
      { passwordResetCode: string; newPassword: string; accessToken: string }
    >({
      query: ({ passwordResetCode, newPassword, accessToken }) => {
        return {
          url: "/reset-password",
          method: "POST",
          body: { passwordResetCode, newPassword },
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        }
      },
      transformResponse: (res: { data: { accessToken: string } }) => {
        return res.data
      },
    }),

    getUserData: builder.query<UserI, { accessToken: string }>({
      query({ accessToken }) {
        return {
          url: "/user",
          method: "GET",
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

export const {
  useLoginMutation,
  useGetUserDataQuery,
  useSignupMutation,
  useVerifyEmailMutation,
  useGuestSignupMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
} = authApi
