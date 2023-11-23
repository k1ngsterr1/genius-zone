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
    logIn: (state, action) => {
      state.isLogggedIn = true;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.userImage = action.payload.userImage;
    },
    logOut: (state) => {
      state.isLogggedIn = false;
      state.firstName = null;
      state.lastName = null;
      state.userImage = null;
    },
  },
});

export const { logIn, logOut } = authSlice.actions;
export default authSlice.reducer;
