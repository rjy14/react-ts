import React, { useCallback, useEffect, useMemo, useState } from "react";
import Slider, { Settings } from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./Slider.css";
import jsonData from "../../constant/data.json";
import { Link } from "react-router-dom";

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
  const [slidesToShow, setSlidesToShow] = useState<number>(
    window.innerWidth >= 1250 ? 5 : 1
  );

  const sliderData = useMemo(
    () =>
      jsonData.filter(
        (product) => product.Product_id >= 90 && product.Product_id <= 1999
      ),
    []
  );

  const updateSlidesToShow = useCallback(() => {
    setSlidesToShow(window.innerWidth >= 1250 ? 5 : 1);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      updateSlidesToShow();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("unmounts");
    };
  }, [updateSlidesToShow]);

  useEffect(() => {
    console.log("mounted");
    updateSlidesToShow(); // Initial update when the component renders
  }, [updateSlidesToShow]); // Only re-run when updateSlidesToShow changes

  const settings: Settings = useMemo(
    () => ({
      // infinite: true,
      speed: 700,
      slidesToShow: Math.min(slidesToShow, sliderData.length), // Ensure finite value
      centerMode: true,
      nextArrow: <NextArrow onClick={() => {}} />,
      prevArrow: <PrevArrow onClick={() => {}} />,
      beforeChange: (_current: any, next: number) => setImageIndex(next),
    }),
    [slidesToShow, sliderData.length]
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
