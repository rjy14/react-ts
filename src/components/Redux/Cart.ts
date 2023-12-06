import { createAction } from '@reduxjs/toolkit';

export const increaseQuantity = createAction<number>('cart/increaseQuantity');
export const decreaseQuantity = createAction<number>('cart/decreaseQuantity');
export const removeFromCart = createAction<number>('cart/removeFromCart');