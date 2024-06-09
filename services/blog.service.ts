import { API_URL } from "@/constants/config"
import { BlogI } from "@/interface/blog"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/blog`,
  }),
  endpoints: (builder) => ({
    getBlogPosts: builder.query<BlogI[], { tags?: string }>({
      query: ({ tags }) => {
        return {
          url: "/",
          method: "GET",
          params: { tags },
        }
      },
      transformResponse: (res: { data: { blogPosts: BlogI[] } }) => {
        return res.data.blogPosts
      },
    }),
  }),
})

export const { useGetBlogPostsQuery } = blogApi
