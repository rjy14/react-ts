import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from './CartReducer'; 

const rootReducer = combineReducers({
  cart: cartReducer,
  counter: cartReducer
  // other reducers...
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;