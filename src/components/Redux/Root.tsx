import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from './CartReducer'; // Adjust the import path accordingly

const rootReducer = combineReducers({
  cart: cartReducer,
  // other reducers...
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;