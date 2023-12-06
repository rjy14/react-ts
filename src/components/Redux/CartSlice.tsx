import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: number;
  quantity: number;
}

interface CartState {
  cartItems: CartItem[];
}

const initialState: CartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increaseQuantity: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const existingItem = state.cartItems.find(item => item.id === id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ id, quantity: 1 });
      }
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const existingItem = state.cartItems.find(item => item.id === id);

      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.cartItems = state.cartItems.filter(item => item.id !== id);
        } else {
          existingItem.quantity -= 1;
        }
      }
    },

    removeAll: (state, action: PayloadAction<number>) => {
      const id = action.payload;
     state.cartItems = state.cartItems.filter(item => item.id !== id);
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      state.cartItems = state.cartItems.filter(item => item.id !== id);
    },
  },
});

export const { increaseQuantity, decreaseQuantity, removeFromCart, removeAll } = cartSlice.actions;
export default cartSlice.reducer;