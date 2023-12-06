import { createReducer } from "@reduxjs/toolkit";
// import { decreaseQuantity, increaseQuantity, removeFromCart } from "./Cart";
import { createAction } from "@reduxjs/toolkit";

const increaseQuantity = createAction(
  "cart/increaseQuantity",
  function prepare(id: number) {
    return { payload: { id } };
  }
);

const decreaseQuantity = createAction(
  "cart/decreaseQuantity",
  function prepare(id: number) {
    return { payload: { id } };
  }
);

const removeFromCart = createAction(
  "cart/removeFromCart",
  function prepare(id: number) {
    return { payload: { id } };
  }
);

type CartItem = {
  id: number;
  quantity: number;
};

// Define the CartState type
type CartState = {
  cart: CartItem[];
  // other state properties related to the cart...
};

// Define the initial state
const initialState: CartState = {
  cart: [],
  // other initial state properties...
};

const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increaseQuantity, (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex !== -1) {
        // Increase the quantity of the existing item
        state.cart[itemIndex] = {
          ...state.cart[itemIndex],
          quantity: state.cart[itemIndex].quantity + 1,
        };
        console.log("added");
      } else {
        // Add a new item to the cart
        state.cart.push({ id: action.payload.id, quantity: 1 });
        console.log("added new");
      }
    })
    .addCase(decreaseQuantity, (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex !== -1 && state.cart[itemIndex].quantity > 1) {
        // Decrease the quantity of the existing item
        state.cart[itemIndex] = {
          ...state.cart[itemIndex],
          quantity: state.cart[itemIndex].quantity - 1,
        };
      } else {
        // Remove the item from the cart
        state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      }
    })
    .addCase(removeFromCart, (state, action) => {
      // Remove the item from the cart
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    });
});

export default cartReducer;
