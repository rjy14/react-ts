import React, { useCallback, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../../pages/HomePage/Homepage.css";
import jsonData from "../../constant/data.json";
import Pagination from "../Pagination/Index";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../../context/CartContext";
import Search from "../Search/Search";

function ProjectsPage() {
  const { increaseCartQuantity } = useShoppingCart();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const lastPage: number = 12; //number of pagination pages
  const cardsPerPage: number = 12; //number of cards
  const indexOfLastCard: number = currentPage * cardsPerPage;
  const indexOfFirstCard: number = indexOfLastCard - cardsPerPage;
  //^ variables

  const handleSearchChange = useCallback(
    (text: string) => {
      setSearchKeyword(text);
      setCurrentPage(1);
    },
   []
  );

  const handleClearFilter = useCallback(() => {
    setSelectedFilter(null);
    setCurrentPage(1);
    console.log("cleared");
  }, []);

  function handleFilterChange(event: { target: { value: any } }) {
    const newFilter = event.target.value;
    setSelectedFilter(newFilter);
    setCurrentPage(1);
  }
  const handleClearAll = useCallback(() => {
    handleClearFilter();
  }, [handleClearFilter]);

  const imageSize: React.CSSProperties = {
    width: "155px",
    objectFit: "cover",
  };

  var filteredCards = jsonData
    .filter((product) =>
      product.Product_name.toLowerCase().includes(searchKeyword.toLowerCase())
    )
    .filter((product) =>
      selectedFilter ? product.cat === selectedFilter : true
    );

  const currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);

  return (
    <>
      <h1>HighFashion</h1>
      <div>
        <Search onChange={handleSearchChange} />
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
                  checked={selectedFilter === "Bags"} //check the state of the filter
                  onChange={handleFilterChange} //call the function, to show cat of bags
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
              <button onClick={handleClearAll}>Clear</button>
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
                        <Card.Text style={{ color: "black" }}>
                          ${Product.Product_price}
                        </Card.Text>
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

export default ProjectsPage;
