import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllProductsPage from "./AllProductsPage/AllProductsPage";
import { ShoppingCartProvider } from "../context/CartContext";
import TopNavbar from "../components/Navbar/Navbar";
import ProjectsPage from "./HomePage/Homepage";
import Sale from "./Sales/Sale";
import Cart from "./Cart/Index";
import LoginForm from "./Login/Login";
import CheckOut from "./CheckOut/CheckOut";
import Product from "../components/DetailedProductPage/Products";
import SignUpForm from "./Signup/SignUp";
import { ThemeProvider } from "react-bootstrap";

function App() {
  return (
    <>
      <ThemeProvider>
        <ShoppingCartProvider>
          <TopNavbar /> {/*  made available for all screens */}
          <BrowserRouter>
            <Routes>
              <Route path="/CheckOut" element={<CheckOut />} />
              <Route path="/home" element={<ProjectsPage />} />
              <Route path="/Login" element={<LoginForm />} />
              <Route path="/Signup" element={<SignUpForm />} />
              <Route path="/Sale" element={<Sale />} />
              <Route path="/Cart" element={<Cart cartItems={[]} />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/AllProducts" element={<AllProductsPage />} />
            </Routes>
          </BrowserRouter>
        </ShoppingCartProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
