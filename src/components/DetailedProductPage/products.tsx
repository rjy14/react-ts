// import React from 'react'
import {  useParams } from "react-router-dom";
import jsonData from '../../constant/data.json';
import { Card } from "react-bootstrap";
import "./Products.css"
import { useShoppingCart } from "../../context/CartContext";
// import ProjectsPage from "../FirstPage/firstpage";
// interface ProductProps{
//   Product_id: number;
//   Product_name: string;
//   Product_price: number;
//   Product_info: string;
//   Product_picture: string;
//   Product_qty: number;
// }

// function AddToCart() {
  
//   console.log("Add to cart is called")
// }
function Product() {

  const {
    increaseCartQuantity
    // decreaseCartQuantity,
    // removeFromCart,
  } = useShoppingCart()
  const imageSize: React.CSSProperties = {
    width: '255px', // Set the width of the image
    height: '255px',  // Set the height of the image
     // Set the position of the
};
  let { id } = useParams();
  
  const project =jsonData.find((project) => project.Product_id === Number(id))
  return (
    <div>
      {/* <h2>Product Details!</h2>
      <p>Name: {project?.Product_name}</p>
      <p>Price: {project?.Product_price}</p>
      <p>Info: {project?.Product_info}</p>
      <p>Picture: {project?.Product_picture}</p>
      <p>ID: {project?.Product_id}</p>
      <p>Quantity: {project?.Product_qty}</p> */}
        <div className="card-container">
        <Card>
        <div className="card-1">
              <Card.Img src={project?.Product_picture} style={imageSize} />
             </div>
        </Card>
    </div>
    <h1> {project?.Product_name}</h1>

    <div className="card-info">
      <Card style={{ width: '400px', height: '400px' }}>
     <Card.Body >
             <Card.Title>
             {project?.Product_name}
               </Card.Title>
               <Card.Text className="custom-text">
               {project?.Product_info}
             </Card.Text >
               <Card.Text className="custom-text">
               Price: {project?.Product_price}
             </Card.Text>
             <Card.Text >
              quantity: {project?.Product_qty} left!
             </Card.Text>
            </Card.Body>
            <Card.Footer className="card-footer">
            <button className="button" 
        onClick={() => {
          if (project?.Product_id !== undefined) {
            increaseCartQuantity(project.Product_id);
          }
        }}> Add to cart
</button>
        </Card.Footer>
        </Card>
        </div>
    </div>
  );
}
export default Product;





