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
    saveUserData: (state, action) => {
      state.firstName = action.payload;
      state.lastName = action.payload;
      state.userImage = action.payload;
    },
    logIn: (state, action) => {
      state.isLogggedIn = true;
      state.firstName = action.payload;
      state.lastName = action.payload;
      state.userImage = action.payload;
    },
    logOut: (state) => {
      state.isLogggedIn = false;
      state.firstName = null;
      state.lastName = null;
      state.userImage = null;
    },
  },
});

export const { logIn, logOut, saveUserData } = authSlice.actions;
export default authSlice.reducer;
