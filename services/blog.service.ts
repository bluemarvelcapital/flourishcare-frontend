import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { BlogI } from "@/types/blog"
import { API_URL } from "@/constants/config"

interface GetBlogPostsResponse {
    status: 'success',
    data: {
        blogPosts: (BlogI & { status: 'draft' | 'published' | 'hidden' })[]
    }
}
interface GetBlogPostResponse {
    status: 'success',
    data: {
        blogPost: (BlogI & { status: 'draft' | 'published' | 'hidden' })
    }
}

interface UpdateBlogPostResponse {
    status: 'success',
    data: {
        blogPost: BlogI & { status: 'draft' | 'published' | 'hidden' }
    }
}

const mappedKeys = {
    preview_image: 'previewImage',
    cover_image: 'coverImage',
}

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
