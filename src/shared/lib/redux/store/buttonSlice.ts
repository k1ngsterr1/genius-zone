import { createSlice } from "@reduxjs/toolkit";

interface ButtonState {
  active: "active" | "inactive";
}

const initialState: ButtonState = {
  active: "inactive",
};

const buttonSlice = createSlice({
  name: "button",
  initialState,
  reducers: {
    toggleButton(state) {
      state.active = state.active === "active" ? "inactive" : "active";
    },
  },
});

export const { toggleButton } = buttonSlice.actions;

export default buttonSlice.reducer;
