import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
