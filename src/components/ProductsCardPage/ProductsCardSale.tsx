import React, { useCallback, useState} from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../../pages/HomePage/Homepage.css";
import jsonData from "../../constant/data.json";
import Pagination from "../Pagination/Index";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../../context/CartContext";

function ProductsCardSale() {

  const { increaseCartQuantity } = useShoppingCart();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const lastPage: number = 20;
  const cardsPerPage: number = 12;
  const indexOfLastCard: number = currentPage * cardsPerPage;
  const indexOfFirstCard: number = indexOfLastCard - cardsPerPage;

  const handleSearchChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      //targeting the input form below
      setSearchKeyword(event.target.value);
      setCurrentPage(1);
      console.log("search");
    },
    [setSearchKeyword, setCurrentPage]
  );

  const handleClearFilter = useCallback(() => {
    setSelectedFilter(null);
    setCurrentPage(1);
    console.log("clear");
  }, [setCurrentPage]);

  function handleFilterChange(event: { target: { value: any } }) {
    const newFilter = event.target.value;
    setSelectedFilter(newFilter);
    setCurrentPage(1);
    console.log("change");
  } //each time it renders, a function will render as a "new" function

  const imageSize: React.CSSProperties = {
    width: "155px",
    objectFit: "cover",
  };

  const filteredCards = jsonData
    .filter((product) =>
      product.Product_name.toLowerCase().includes(searchKeyword.toLowerCase())
    )
    .filter((product) =>
      selectedFilter ? product.cat === selectedFilter : true
    )
    .filter((product) => product.Product_id >= 2000);
  const currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);
  return (
    <>
      <h1>HighFashion</h1>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search..."
          value={searchKeyword}
          onChange={handleSearchChange}
          style={{
            borderRadius: "90px",
            border: "1px solid #ccc",
            width: "280px",
          }}
        />
      </div>

      <div className="all-contents">
        <div className="filtering-contents">
          <div className="filter">
            <div className="alignment">
              <u>
                <h3>Filters</h3>
              </u>

              <label className="sidebar-label-container">
                <input
                  type="radio"
                  value="Bags"
                  checked={selectedFilter === "Bags"}
                  onChange={handleFilterChange}
                />
                <span className="checkmark"></span>
                Bags
              </label>

              <label className="sidebar-label-container">
                <input
                  type="radio"
                  value="Shirts"
                  checked={selectedFilter === "Shirts"}
                  onChange={handleFilterChange}
                />
                <span className="checkmark"></span>
                Shirts
              </label>

              <label className="sidebar-label-container">
                <input
                  type="radio"
                  value="Sneakers"
                  checked={selectedFilter === "Sneakers"}
                  onChange={handleFilterChange}
                />
                <span className="checkmark"></span>
                Sneakers
              </label>

              <label className="sidebar-label-container">
                <input
                  type="radio"
                  value="New"
                  checked={selectedFilter === "New"}
                  onChange={handleFilterChange}
                />
                <span className="checkmark"></span>
                New
              </label>
            </div>

            <center>
              <button onClick={handleClearFilter}>Clear</button>
            </center>
          </div>
        </div>

        <div className="product-contents">
          <div className="scrollable-table">
            <Row xs={1} md={4} className="g-0 justify-content-center">
              {currentCards.map((Product, id) => (
                <Col key={id} className="p-2 d-flex justify-content-center">
                  <Card>
                    <Link
                      to={`/product/${Product.Product_id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <div className="text-center">
                        <Card.Img
                          src={Product.Product_picture}
                          style={imageSize}
                        />
                      </div>
                      <Card.Body>
                        <Card.Title style={{ color: "black" }}>
                          {Product.Product_name}
                        </Card.Title>
                        <div style={{ display: "flex", color: "black" }}>
                          <Card.Text
                            style={{
                              color: "black",
                              marginRight: "10px",
                              textDecorationLine: "line-through",
                              textDecorationStyle: "solid",
                            }}
                          >
                            ${Product.Product_oprice}
                          </Card.Text>
                          <Card.Text style={{ color: "black" }}>
                            ${Product.Product_price}
                          </Card.Text>
                        </div>
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
        </div>
      </div>
    </>
  );
}
export default ProductsCardSale;

