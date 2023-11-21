interface CartProps {
  cartItems: string[];
}
const Cart: React.FC<CartProps> = ({ cartItems }) => {
  return (
  <>
  <h2>Cart</h2>
  </>
  );
};

export default Cart;