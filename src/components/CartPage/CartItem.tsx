import { Button, Stack } from "react-bootstrap";
import storeItems from "../../constant/data.json";
import { RootState } from "../Redux/Root";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../Redux/Cart";
//TypeScript
type CartItemProps = {
  id: number;
  quantity: number;
};

const CartItem: React.FC<CartItemProps> = ({ id }) => {
  const dispatch = useDispatch();

  // Using useSelector to get the quantity and item details from the Redux store
  const { quantity, item } = useSelector((state: RootState) => {
    const cartItem = state.cart.cart.find((cartItem) => cartItem.id === id);
    const item = storeItems.find((i) => i.Product_id === id);

    return {
      quantity: cartItem ? cartItem.quantity : 0,
      item,
    };
  });

  const handleIncrease = () => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = () => {
    dispatch(decreaseQuantity(id));
  };

  const handleRemove = () => {
    dispatch(removeFromCart(id));
  };

  if (!item) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.Product_picture}
        alt=""
        style={{ width: "155px", height: "95px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.Product_name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              {/* x{quantity} */}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          ${item.Product_price}
        </div>
        <div className="text-muted">
          Total Quantity:
          <div className="quantity">
            <Button
              className="w-30"
              style={{ backgroundColor: "grey", border: "1px solid #ccc" }}
              // onClick={() => decreaseCartQuantity(id)}
              onClick={handleDecrease}
            >
              -
            </Button>
            {quantity}
            <Button
              className="w-30"
              style={{ backgroundColor: "grey", border: "1px solid #ccc" }}
              // onClick={() => increaseCartQuantity(id)}
              onClick={handleIncrease}
            >
              +
            </Button>
          </div>
        </div>
      </div>
      <div>${item.Product_price * quantity}</div>

      <Button
        variant="outline-danger"
        size="sm"
        // onClick={() => removeFromCart(item.Product_id)}
        onClick={handleRemove}
      >
        &times;
      </Button>
    </Stack>
  );
};


export default CartItem;
