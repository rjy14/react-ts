import { Button, Stack } from "react-bootstrap"
import { useShoppingCart } from "../../context/CartContext"
import storeItems from "../../data/data.json"
// import { formatCurrency } from "../utilities/formatCurrency"
type CartItemProps = {
  id: number
  quantity: number
}
export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart()
  const item = storeItems.find(i => i.Product_id === id)
  if (item == null) return null
  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.Product_picture} alt=""
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
          {(item.Product_price)}
        </div>

          <div className="text-muted">
            Total {quantity}
          </div>

      </div>
  
      <div>{(item.Product_price) * quantity}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.Product_id)} 
      >
        &times;
      </Button>
    </Stack>
  )
}