import ShoppingCart from "../components/CartPage/ShoppingCart";
import useLocalStorage from "../hooks/useLocalStorage";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
} from "react";
import {
  increaseQuantity,
  decreaseQuantity,
  removeAll,
  removeFromCart,
} from '../components/Redux/CartSlice';
import { useDispatch, useSelector } from "react-redux";

// TypeScript
type ShoppingCartProviderProps = {
  children: ReactNode;
};

// TypeScript
type CartItem = {
  id: number;
  quantity: number;
};

// TypeScript
type ShoppingCartContext = {
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  removeAll: (id: number) => void;
  cartQuantity: number;
  cartItems: CartItem[];
};

const Cart = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(Cart);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const cartItems = useSelector((state) => state.cart.counter.cartItems);
  const cartQuantity = cartItems.reduce((quantity: any, item: { quantity: any }) => item.quantity + quantity, 0);
  const dispatch = useDispatch();

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  const increaseCartQuantity = useCallback(
    (id: number) => {
      dispatch(increaseQuantity(id));
    },
    [dispatch]
  );

  const decreaseCartQuantity = useCallback(
    (id: number) => {
      dispatch(decreaseQuantity(id));
    },
    [dispatch]
  );

  const removeAllItems = useCallback((id: number) => {
    dispatch(removeAll(id));
  }, [dispatch]);

  const removeItem = useCallback(
    (id: number) => {
      dispatch(removeFromCart(id));
    },
    [dispatch]
  );

  return (
    <Cart.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart: removeItem,
        removeAll: removeAllItems,
        cartItems,
        cartQuantity,
      }}
    >
      {children}
      <ShoppingCart />
    </Cart.Provider>
  );
}