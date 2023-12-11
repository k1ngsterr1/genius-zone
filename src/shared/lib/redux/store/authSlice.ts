import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLogggedIn: false,
    firstName: null,
    lastName: null,
    userImage: null,
  },
  reducers: {
    logIn: (state) => {
      state.isLogggedIn = true;
    },
    logOut: (state) => {
      state.isLogggedIn = false;
      console.log("logged out");
    },
  },
});

export const { logIn, logOut } = authSlice.actions;
export default authSlice.reducer;
