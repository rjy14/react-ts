import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useShoppingCart } from "../../context/CartContext";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.css";
import { Button } from "react-bootstrap";

function TopNavbar() {
  const { openCart, cartQuantity } = useShoppingCart();

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="/home"
              style={{ fontSize: "20px", marginLeft: "30px" }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="/Sale"
              style={{ fontSize: "20px", marginLeft: "30px" }}
            >
              Sale
            </Nav.Link>
            <Nav.Link
              href="/AllProducts"
              style={{ fontSize: "20px", marginLeft: "30px" }}
            >
              Products
            </Nav.Link>
          </Nav>
          <Nav>
            {cartQuantity > 0 && (
              <Button
                onClick={openCart}
                style={{
                  width: "3rem",
                  height: "3rem",
                  position: "relative",
                  backgroundColor: "black",
                }}
                className="rounded-circle"
              >
                <FontAwesomeIcon icon={faShoppingCart} className="cart-link" />
                <div
                  className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                  style={{
                    color: "white",
                    width: "1.5rem",
                    height: "1.5rem",
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    transform: "translate(25%, 25%)",
                  }}
                >
                  {cartQuantity}
                </div>
              </Button>
            )}
            <Nav.Link
              href="/Login"
              style={{ fontSize: "20px", marginRight: "30px" }}
            >
              Login
            </Nav.Link>
            <Nav.Link
              href="/Signup"
              style={{ fontSize: "20px", marginRight: "60px" }}
            >
              Signup
            </Nav.Link>
          </Nav>
          <h5>Dark</h5>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default TopNavbar;
