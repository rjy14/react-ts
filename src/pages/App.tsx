import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllProductsPage from "./AllProductsPage/AllProductsPage";
import { ShoppingCartProvider } from "../context/CartContext";
import TopNavbar from "../components/Navbar/Navbar";
import ProjectsPage from "./HomePage/Homepage";
import SignUpForm from "./Signup/Signup";
import Sale from "./Sales/Sale";
import Cart from "./Cart/Index";
<<<<<<< HEAD
import CheckOut from "./CheckOut/CheckOut";
import LoginForm from "./Login/login";
import Product from "../components/DetailedProductPage/products";
=======


import LoginForm from "./Login/Login";
import CheckOut from "./CheckOut/CheckOut";
import Product from "../components/DetailedProductPage/products";

>>>>>>> 0284c556f625f26f7612d64641213c66ac9cd35f
function App() {
  return (
    <>
      <ShoppingCartProvider>
        <TopNavbar />
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
    </>
  );
}
export default App;
