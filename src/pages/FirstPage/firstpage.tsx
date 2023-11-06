import "./firstpage.css"
import ProductsPage from '../../components/ProductsCardPage/ProductsPage';
function ProjectsPage() {
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
          <br></br>
               <ProductsPage/>
      </>
  );
}
export default ProjectsPage;
//Home in  navbar