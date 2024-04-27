import { blogApi } from "@/services/blog.service"
import { configureStore } from "@reduxjs/toolkit"
import { blogSlice } from "./blog.slice"

export const store = configureStore({
    reducer: {
        [blogApi.reducerPath]: blogApi.reducer,
        [blogSlice.reducerPath]: blogSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(blogApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
