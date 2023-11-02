// import React from 'react'
import { useParams } from "react-router-dom";
import jsonData from '../../data.json';
// import ProjectsPage from "../FirstPage/firstpage";
interface ProductProps{
  Product_id: number;
  Product_name: string;
  Product_price: number;
  Product_info: string;
  Product_picture: string;
  Product_qty: number;
}
function Product(props: ProductProps) {
  let { id } = useParams();
  const project =jsonData.find((project) => project.Product_id === Number(id))
  console.log(id)
  return (
    <div>
      <h2>Product Details!</h2>
      <p>Name: {project?.Product_name}</p>
      <p>Price: {project?.Product_price}</p>
      <p>Info: {project?.Product_info}</p>
      <p>Picture: {project?.Product_picture}</p>
      <p>ID: {project?.Product_id}</p>
      <p>Quantity: {project?.Product_qty}</p>
    </div>
  );
}
export default Product;





