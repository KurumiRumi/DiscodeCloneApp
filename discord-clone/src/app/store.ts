import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../features/userSlice";

export const store = configureStore({
  reducer: userReducer,
});

// 現在のストアの状態のDispatch
export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
