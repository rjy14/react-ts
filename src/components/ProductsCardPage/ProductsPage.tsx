import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import React, { useState } from "react";
import "../../pages/FirstPage/Firstpage.css";
import jsonData from "../../data/data.json";
import Pagination from "../Pagination/Pagination";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../../context/CartContext";
function ProjectsPage() {
  const {
    increaseCartQuantity,
    // decreaseCartQuantity,
    // removeFromCart,
  } = useShoppingCart();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const lastPage: number = 20;
  const cardsPerPage: number = 12;
  const indexOfLastCard: number = currentPage * cardsPerPage;
  const indexOfFirstCard: number = indexOfLastCard - cardsPerPage;
  const currentCards = jsonData.slice(indexOfFirstCard, indexOfLastCard);
  // const handlePageChange = (page: number) => {
  //   setCurrentPage(page);
  // };
  const imageSize: React.CSSProperties = {
    width: "155px", // Set the width of the image
    objectFit: "cover", // Set the height of the image
    // Set the position of the
  };
  return (
    <>
      <div className="scrollable-table">
        <br></br>
        <Row xs={1} md={4} className="g-0 justify-content-center">
          {currentCards.map((Product, id) => (
            <Col key={id} className="p-2 d-flex justify-content-center">
              <Card>
                <Link to={`/product/${Product.Product_id}`}>
                  <div className="text-center">
                    <Card.Img src={Product.Product_picture} style={imageSize} />
                  </div>
                  <Card.Body>
                    <Card.Title>{Product.Product_name}</Card.Title>
                    <Card.Text>{Product.Product_price}</Card.Text>
                  </Card.Body>
                </Link>
                <Card.Footer className="card-footer">
                  <button
                    className="button"
                    onClick={() => increaseCartQuantity(Product.Product_id)}
                  >
                    Add to cart
                  </button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <div>
        <Pagination
          currentPage={currentPage}
          lastPage={lastPage}
          maxLength={7}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
}
export default ProjectsPage;
