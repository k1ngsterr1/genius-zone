import { configureStore } from "@reduxjs/toolkit";
import buttonReducer from "./buttonSlice";
import emailReducer from "./emailSlice";
import menuReducer from "./menuSlice";
import authReducer from "./authSlice";
import loadReducer from "./loaderSlice";
import modalImageReducer from "./modalImageSlice";

const store = configureStore({
  reducer: {
    button: buttonReducer,
    emailReducer: emailReducer,
    menu: menuReducer,
    auth: authReducer,
    loader: loadReducer,
    imageModal: modalImageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
