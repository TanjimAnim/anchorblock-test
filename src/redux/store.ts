import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slice/userSlice";
import { listenerMiddleware } from "./middleware";
import { usersListApi } from "./services/user";
// ...

export const store = configureStore({
  reducer: {
    user: authSlice.reducer,
    [usersListApi.reducerPath]: usersListApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      listenerMiddleware.middleware,
      usersListApi.middleware
    ),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
