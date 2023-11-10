import React, { useState } from "react";
import Slider, { Settings } from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./Slider.css";
import jsonData from "../../constant/data.json";
import { Link } from "react-router-dom";
// interface Product {
//   Product_id: number;
//   Product_name: string;
//   Product_price: string;
//   Product_info: string;
//   Product_picture: string;
//   Product_qty: number;
// }
function Carousel() {
  const NextArrow: React.FC<{ onClick: () => void }> = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow: React.FC<{ onClick: () => void }> = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState<number>(0);

  const settings: Settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 5,
    centerMode: true,
    nextArrow: <NextArrow onClick={() => {}} />,
    prevArrow: <PrevArrow onClick={() => {}} />,
    beforeChange: (_current: any, next: number) => setImageIndex(next),
  };

  // Filter jsonData to include only items with Product_id less than or equal to 10
  const limitedData = jsonData.filter((product) => product.Product_id >=90 );

  return (
    <div className="App">
      <Slider {...settings}>
        {limitedData.map((product, idx) => (
          <div
            className={idx === imageIndex ? "slide activeSlide" : "slide"}
            key={idx}
          >
            <Link to={`/product/${product.Product_id}`}>
              <img src={product.Product_picture} alt={`Product ${idx}`} />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}
export default Carousel;
