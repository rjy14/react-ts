import { useParams } from "react-router-dom";
import jsonData from "../../constant/data.json";
import { Card } from "react-bootstrap";
import "./Products.css";
import { useShoppingCart } from "../../context/CartContext";
import { useState } from "react";
import React from "react";
//TypeScript
type Product = {
  Product_id: number;
  Product_name: string;
  Product_price: number;
  Product_oprice?: number;
  Product_info: string;
  Product_picture: string;
  cat: string;
  Product_qty: number;
};

function Products() {
  const { increaseCartQuantity } = useShoppingCart();
  const [productData, setProductData] = useState(jsonData as Product[]);
  //^ declaring a state variable
  //^ useState to manage state of product qty changes
  let { id } = useParams();
  const project = productData.find(
    (project) => project.Product_id === Number(id)
  );
  //^ to get the id to show the selected product
  const handleAddToCart = () => {
    if (
      project?.Product_id !== undefined &&
      // -project.Product_qty &&-
      project.Product_qty > 0
    ) {
      increaseCartQuantity(project.Product_id);
      //^ Update the qty in shopping cart
      const updatedData = productData.map((item) =>
        item.Product_id === project.Product_id
          ? {
              ...item,
              Product_qty: item.Product_qty && project.Product_qty - 1,
            }
          : item
      );
      setProductData(updatedData);
      //^ update state of qty after adding item to cart
    }
  };

  const imageSize: React.CSSProperties = {
    width: "255px",
    height: "255px",
  };

  return (
    <div>
      <div className="card-container">
        <Card>
          <div className="card-1">
            <Card.Img src={project?.Product_picture} style={imageSize} />
          </div>
        </Card>
      </div>
      <h1>{project?.Product_name}</h1>
      <div className="card-info">
        <Card style={{ width: "400px", height: "400px" }}>
          <Card.Body>
            <Card.Title>{project?.Product_name}</Card.Title>
            <Card.Text className="custom-text">
              {project?.Product_info}
            </Card.Text>
            <Card.Text className="custom-text">
              Price: ${project?.Product_price}
            </Card.Text>
            <Card.Text>Quantity: {project?.Product_qty} left!</Card.Text>
          </Card.Body>
          <Card.Footer className="card-footer">
            <button className="button" onClick={handleAddToCart}>
              Add to cart
            </button>
          </Card.Footer>
        </Card>
      </div>
    </div>
  );
}

export default Products;
