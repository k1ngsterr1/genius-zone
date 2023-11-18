import { configureStore } from "@reduxjs/toolkit";
import buttonReducer from "./buttonSlice";
import emailReducer from "./emailSlice";
import menuReducer from "./menuSlice";

const store = configureStore({
  reducer: {
    button: buttonReducer,
    emailReducer: emailReducer,
    menu: menuReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
