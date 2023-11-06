import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React, { useState } from 'react';
import "../../pages/FirstPage/firstpage.css"
//import "./firstpage.css"
import jsonData from '../../data.json';
import Pagination from '../../components/pagination/pagination';
import { Link} from 'react-router-dom';
// import Product from '../Products/products';
function ProjectsPage() {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const lastPage: number =20;
  const cardsPerPage: number = 12;
  const indexOfLastCard: number = currentPage * cardsPerPage;
  const indexOfFirstCard: number = indexOfLastCard - cardsPerPage;
  const currentCards = jsonData.slice(indexOfFirstCard, indexOfLastCard);
  // const handlePageChange = (page: number) => {
  //   setCurrentPage(page);
  // };
  const imageSize: React.CSSProperties = {
    width: '155px', // Set the width of the image
    objectFit: 'cover',  // Set the height of the image
     // Set the position of the
};
  function AddToCart() {
    console.log("Add to cart is called")
  }
  // return 
  //   <>
  //   <div className='scrollable-table'>
  //   <br></br>
  //   <Row xs={1} md={4} className="g-0 justify-content-center">
  //   {currentCards.map((Product, id) => (
  //       <Col key={id} className="p-2 d-flex justify-content-center">
  //          <Link to={`/Product/${id}`}>
  //         <Card>
  //           <div className="text-center">
  //             <Card.Img src={Product.Product_picture} style={imageSize} />
  //           </div>
  //         <Card.Body >
  //           <Card.Title>
  //             {Product.Product_name}
  //             </Card.Title>
  //             <Card.Text>
  //               {Product.Product_price}
  //             </Card.Text>
  //             <Card.Footer className="card-footer">
  //             <button className="button" onClick={AddToCart}>Add to cart</button>
  //             </Card.Footer>
  //           </Card.Body>
  //         </Card>
  //         </Link>
  //       </Col>
  //     ))}
  //   </Row>
  //   </div>
  //   <div>
  //   <Pagination currentPage={currentPage} 
  // lastPage={lastPage} 
  // maxLength={7} 
  // setCurrentPage={setCurrentPage}/> 
  //   </div>
  //   </>
  //   );
  return (
      <>
        <div className='scrollable-table'>
          <br></br>
          <Row xs={1} md={4} className="g-0 justify-content-center">
            {currentCards.map((Product, id) => (
              <Col key={id} className="p-2 d-flex justify-content-center">
                <Card>
                <Link to={`/product/${Product.Product_id}`}>
                  <div className="text-center">
               <Card.Img src={Product.Product_picture} style={imageSize} />
             </div>
           <Card.Body >
             <Card.Title>
               {Product.Product_name}
               </Card.Title>
               <Card.Text>
                 {Product.Product_price}
             </Card.Text>
            </Card.Body>
            </Link>
            <Card.Footer className="card-footer">
               <button className="button" onClick={AddToCart}>Add to cart</button>
             </Card.Footer>
             </Card>
              </Col>
            ))}
          </Row>
        </div>
        <div>
          <Pagination currentPage={currentPage} lastPage={lastPage} maxLength={7} setCurrentPage={setCurrentPage} />
        </div>
      </>
  );
}
export default ProjectsPage;