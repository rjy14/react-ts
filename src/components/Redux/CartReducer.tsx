import { createReducer } from '@reduxjs/toolkit';
import { increaseQuantity, decreaseQuantity, removeFromCart } from './Cart';

type CartItem = {
  id: number;
  quantity: number;
};

type CartState = {
  cart: CartItem[];
  // other state properties related to the cart...
};

const initialState: CartState = {
  cart: [],
  // other initial state properties...
};

const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increaseQuantity, (state, action) => {
      // handle increaseQuantity action
    })
    .addCase(decreaseQuantity, (state, action) => {
      // handle decreaseQuantity action
    })
    .addCase(removeFromCart, (state, action) => {
      // handle removeFromCart action
    });
});

export default cartReducer;