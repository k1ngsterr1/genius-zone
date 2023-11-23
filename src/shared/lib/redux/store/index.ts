import { configureStore } from "@reduxjs/toolkit";
import buttonReducer from "./buttonSlice";
import emailReducer from "./emailSlice";
import menuReducer from "./menuSlice";
import authReducer from "./authSlice";

const store = configureStore({
  reducer: {
    button: buttonReducer,
    emailReducer: emailReducer,
    menu: menuReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
