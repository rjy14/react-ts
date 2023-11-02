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
  console.log(props)
  let { id } = useParams();
  const project =jsonData.find((project) => project.Product_id =Number(id))
  console.log(project)
  console.log(id)
  return (
    <div>
      <h2>Product Details!</h2>
      <p>Name: {props.Product_name}</p>
      <p>Price: {props.Product_price}</p>
      <p>Info: {props.Product_info}</p>
      <p>Picture: {props.Product_picture}</p>
      <p>ID: {props.Product_id}</p>
      <p>Quantity: {props.Product_qty}</p>
    </div>
  );
}
export default Product;





