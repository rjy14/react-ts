import "./App.css";
// import ProjectsPage from "./firstpage";
import "bootstrap/dist/css/bootstrap.min.css";
// import LoginForm from "./login";
import TopNavbar from "../components/Navbar/navbar";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Cart from "./Cart";
import ProjectsPage from "./FirstPage/firstpage";
import LoginForm from "./Login/login";
import Sale from "./Sales/sale";
import SignUpForm from "./Signup/signup";
import Product  from "../components/DetailedProductPage/products";
import AllProductsPage from "./AllProductsPage/AllProductsPage";
import { ShoppingCartProvider } from "../context/CartContext";
function App() {
  return (
    <>
      <ShoppingCartProvider>
    <TopNavbar/>
    <BrowserRouter> 
    <Routes>
          <Route path="/home" element={<ProjectsPage />} />
          <Route path="/Login" element={<LoginForm />} />
          <Route path="/Signup" element={<SignUpForm />} />
          <Route path="/Sale" element={<Sale />} />
          <Route path="/Cart" element={<Cart cartItems={[]} />} />
          <Route path="/product/:id" element={<Product/>}  /> 
          <Route path="/AllProducts" element={<AllProductsPage/>}/>          
    </Routes>
    </BrowserRouter>
    </ShoppingCartProvider>
    </>
  );
}
export default App;