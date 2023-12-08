// import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
// import CartReducer from "./CartReducer";

// export const store = configureStore({
//   reducer: {
//     cart: CartReducer
//   },
// });

// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
