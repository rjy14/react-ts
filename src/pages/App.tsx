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
import Product  from "../components/Products/products";
function App() {
  return (
    <>
    <TopNavbar/>
    <BrowserRouter> 
    <Routes>
          <Route path="/home" element={<ProjectsPage />} />
          <Route path="/Login" element={<LoginForm />} />
          <Route path="/Signup" element={<SignUpForm />} />
          <Route path="/Sale" element={<Sale />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/product/:id" element={<Product Product_id={0} 
          Product_name={""} Product_price={0} 
          Product_info={""} Product_picture={""} 
          Product_qty={0}/>}  /> 
    </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;

