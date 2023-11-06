// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import {BrowserRouter as Routes,Route} from "react-router-dom";
// import LoginForm from '../../pages/Login/login';
// import ProjectsPage from '../../pages/FirstPage/firstpage';
// import SignUpForm from '../../pages/Signup/signup';
// import Sale from '../../pages/Sales/sale';
// import Cart from '../../pages/Cart';
import { useShoppingCart } from "../../context/CartContext"
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./navbar.css";
import { Button } from 'react-bootstrap';
function TopNavbar() {
  const { openCart, cartQuantity } = useShoppingCart()
  return (
    <>
    <Navbar bg="dark"  data-bs-theme="dark" style={{ height: '70px'}}>
      {/* <Container> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="/home" style={{ fontSize:'20px', marginLeft: '30px' }} >Home</Nav.Link>
          <Nav.Link href="/Sale" style={{ fontSize:'20px', marginLeft: '60px' }}>Sale</Nav.Link>
          <Nav.Link href="/AllProducts" style={{ fontSize:'20px', marginLeft: '90px'}}>Products</Nav.Link>
          </Nav>
          <Nav>
          {/* <Nav.Link href="/Cart" style={{ fontSize: '20px', marginRight: '60px', marginTop:'6px', position:'relative' }}>
            <FontAwesomeIcon icon={faShoppingCart} className='cart-link' />

          </Nav.Link> */}
          {cartQuantity > 0 && (
          <Button
            onClick={openCart}
            style={{ width: "3rem", height: "3rem", position: "relative" }}
            variant="outline-primary"
            className="rounded-circle"
          >
             <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              fill="currentColor"
            ></svg>
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
          <Nav.Link href="/Login" style={{ fontSize:'20px', marginRight: '30px' }} >Login</Nav.Link>
          <Nav.Link href="/Signup"style={{ fontSize:'20px', marginRight: '60px' }} >Signup</Nav.Link>
          </Nav>
          </Navbar.Collapse>
    </Navbar>
    </>
  );
}
export default TopNavbar;