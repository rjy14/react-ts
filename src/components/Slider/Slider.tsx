import React, { useEffect, useState } from "react";
import Slider, { Settings } from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./Slider.css";
import jsonData from "../../constant/data.json";
import { Link } from "react-router-dom";
function Carousel() {



  //void means it does not return any values
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
  const [slidesToShow, setSlidesToShow] = useState<number>(0);

  useEffect(
    () => {
      const updateSlidesToShow = () => {
        if (window.innerWidth >= 1250) {
          setSlidesToShow(5);
        } else {
          setSlidesToShow(1);
        }
      };
      updateSlidesToShow();
      window.addEventListener("resize", updateSlidesToShow);
      return () => {
        window.removeEventListener("resize", updateSlidesToShow);
      }; //cleanup before re-rendering the component again
    },
    [] //to run only on the first render. Without [], it will keep rendering when the useEffect is called.
  );

  const settings: Settings = {
    infinite: true,
    speed: 700,
    slidesToShow: slidesToShow,
    centerMode: true,
    nextArrow: <NextArrow onClick={() => {}} />,
    prevArrow: <PrevArrow onClick={() => {}} />,
    beforeChange: (_current: any, next: number) => setImageIndex(next),
  };

  const sliderData = jsonData.filter(
    (product) => product.Product_id >= 90 && product.Product_id <= 1999
  );

  return (
    <div className="App">
      <Slider {...settings}>
        {sliderData.map((product, idx) => (
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