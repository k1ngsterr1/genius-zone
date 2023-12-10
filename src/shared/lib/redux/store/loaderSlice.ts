import { createSlice } from "@reduxjs/toolkit";

const loaderSlice = createSlice({
  name: "loader",
  initialState: {
    isLoading: true,
  },
  reducers: {
    turnOnLoader: (state) => {
      state.isLoading = true;
    },
    turnOffLoader: (state) => {
      state.isLoading = false;
    },
  },
});

export const { turnOnLoader, turnOffLoader } = loaderSlice.actions;
export default loaderSlice.reducer;
