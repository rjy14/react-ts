import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "./CartReducer";
import CartReducer from "./CartSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: CartReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
