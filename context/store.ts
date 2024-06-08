import { appointmentApi } from "@/services/appointment.service"
import { authApi } from "@/services/auth.service"
import { roleApi } from "@/services/role.service"
import { serviceApi } from "@/services/services.service"
import { configureStore } from "@reduxjs/toolkit"

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [roleApi.reducerPath]: roleApi.reducer,
    [serviceApi.reducerPath]: serviceApi.reducer,
    [appointmentApi.reducerPath]: appointmentApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      roleApi.middleware,
      serviceApi.middleware,
      appointmentApi.middleware
    ),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
