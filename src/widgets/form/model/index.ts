// store/buttonSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the initial state type
interface ButtonState {
  active: "active" | "inactive";
}

// Initial state for the button slice
const initialState: ButtonState = {
  active: "inactive",
};

const buttonSlice = createSlice({
  name: "button",
  initialState,
  reducers: {
    // Action to toggle the active state
    toggleButton(state) {
      state.active = state.active === "active" ? "inactive" : "active";
    },
  },
});

// Export the action creator
export const { toggleButton } = buttonSlice.actions;

export default buttonSlice.reducer;
