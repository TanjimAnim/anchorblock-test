// listenerMiddleware.ts
import {
  createListenerMiddleware,
  addListener,
  isAnyOf,
} from "@reduxjs/toolkit";
import type { TypedStartListening, TypedAddListener } from "@reduxjs/toolkit";

import type { RootState, AppDispatch } from "./store";
import { login, logout } from "./slice/userSlice";

export const listenerMiddleware = createListenerMiddleware();

export type AppStartListening = TypedStartListening<RootState, AppDispatch>;

listenerMiddleware.startListening({
  matcher: isAnyOf(login, logout),
  effect: (_, listenerApi) => {
    localStorage.setItem(
      "user",
      JSON.stringify((listenerApi.getState() as RootState).user)
    );
  },
});

export const addAppListener = addListener as TypedAddListener<
  RootState,
  AppDispatch
>;
