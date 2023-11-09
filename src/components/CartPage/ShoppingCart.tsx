import { Nav, Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../../context/CartContext";
// import { formatCurrency } from "../utilities/formatCurrency"
import { CartItem } from "./CartItem";
import storeItems from "../../data/data.json";
type ShoppingCartProps = {
  isOpen: boolean;
};
function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Your shopping Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total:{" $"}
            {cartItems.reduce((total, cartItem) => {
              const item = storeItems.find((i) => i.Product_id === cartItem.id);
              return total + (item?.Product_price || 0) * cartItem.quantity;
            }, 0)}
          </div>
          <div className="text-center">
            <Nav.Link href="/CheckOut">Checkout!</Nav.Link>
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
export default ShoppingCart;
