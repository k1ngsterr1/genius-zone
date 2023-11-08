import { configureStore } from "@reduxjs/toolkit";
import buttonReducer from "./buttonSlice";

const store = configureStore({
  reducer: {
    button: buttonReducer,
  },
});

// Type for RootState
export type RootState = ReturnType<typeof store.getState>;

export default store;
