import { Counter } from "../../components/Redux/Counter";
import "./Sale.css";
// import ProductsCardSale from "../../components/ProductsCardPage/ProductsCardSale";

interface SaleProps {}
const Sale: React.FC<SaleProps> = () => {
  return (
    <>
      {/* <ProductsCardSale /> */}
      <Counter />
    </>
  );
};

export default Sale;
