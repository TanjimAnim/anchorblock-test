import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token:
    JSON.parse(
      (typeof window !== "undefined" && localStorage.getItem("user")) || "{}"
    ).token || "",
  id:
    JSON.parse(
      (typeof window !== "undefined" && localStorage.getItem("user")) || "{}"
    ).id || "",
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
      state.id = action.payload.id ?? "";
    },
    logout: (state) => {
      state.token = "";
      state.id = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
// export const selectAuth = (state: RootState) => state.auth;
export default authSlice.reducer;
