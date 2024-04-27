import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { GetBlogPostResponse, GetBlogPostsResponse } from "@/types/blog"
import { API_URL } from "@/constants/config"

console.log({ API_URL })

export const blogApi = createApi({
    reducerPath: "createApi",
    baseQuery: fetchBaseQuery({ baseUrl: `${API_URL}/blog` }),
    endpoints: (builder) => {
        return {
            getBlogPosts: builder.query<GetBlogPostsResponse, undefined>({
                query: () => {
                    return {
                        url: "/",
                    }
                },
            }),
            getBlogPostById: builder.query<GetBlogPostResponse, string>({
                query: (id) => {
                    return {
                        url: `/info`,
                        params: { blogPostId: id }
                    }
                },
            }),
        }
    },
})

export const { useGetBlogPostsQuery, useGetBlogPostByIdQuery } = blogApi
