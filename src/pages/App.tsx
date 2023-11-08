import "./App.css";
// import ProjectsPage from "./firstpage";
import "bootstrap/dist/css/bootstrap.min.css";
// import LoginForm from "./login";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import AllProductsPage from "./AllProductsPage/AllProductsPage";
import { ShoppingCartProvider } from "../context/CartContext";
import TopNavbar from "../components/Navbar/Navbar";
import Product from "../components/DetailedProductPage/Products";
import ProjectsPage from "./FirstPage/Firstpage";
import LoginForm from "./Login/Login";
import SignUpForm from "./Signup/Signup";
import Sale from "./Sales/Sale";
import Cart from "./Cart/Index";
function App() {
  return (
    <>
      <ShoppingCartProvider>
        <TopNavbar />
        <BrowserRouter>
          <Routes>
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
