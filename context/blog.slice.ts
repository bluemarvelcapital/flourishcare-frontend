import { BlogI } from "@/types/blog"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface BlogState {
    posts: BlogI[],
    total: number,
    published: number,
    draft: number,
    hidden: number,
    views: number,
    postToShow?: BlogI
}

const initialState: BlogState = {
    posts: [],
    total: 0,
    published: 0,
    draft: 0,
    hidden: 0,
    views: 0
}

export const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        setPosts: (state, action: PayloadAction<BlogI[]>) => {
            state.posts = action.payload
            state.total = action.payload.length
            state.published = state.posts.filter(post => post.status === 'published').length
            state.draft = state.posts.filter(post => post.status === 'draft').length
            state.hidden = state.posts.filter(post => post.status === 'hidden').length
        },
        addPosts: (state, action: PayloadAction<BlogI[]>) => {
            state.posts = [...state.posts, ...action.payload]
            state.total = state.total + 1

            state.published = state.posts.filter(post => post.status === 'published').length
            state.draft = state.posts.filter(post => post.status === 'draft').length
            state.hidden = state.posts.filter(post => post.status === 'hidden').length
        },
        updatePost: (state, action: PayloadAction<BlogI>) => {
            const index = state.posts.findIndex(post => post.id === action.payload.id)
            state.posts[index] = action.payload

            state.published = state.posts.filter(post => post.status === 'published').length
            state.draft = state.posts.filter(post => post.status === 'draft').length
            state.hidden = state.posts.filter(post => post.status === 'hidden').length
        },
        setPostToShow: (state, action: PayloadAction<BlogI>) => {
            state.postToShow = action.payload
        }
    }
})

export const { setPosts, addPosts, updatePost, setPostToShow } = blogSlice.actions