import React, { useState } from 'react';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';


import mouse from '../images/mouse.JPG';
import mouse2 from '../../images/mouse.JPG';
import mouse3 from '../../images/mouse.JPG';
import mouse5 from '../../images/mouse.JPG';

const images = [mouse, mouse2, mouse3, mouse5];

interface AppProps {}

function Welcome(props: AppProps) {
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

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow onClick={function (): void {
        throw new Error('Function not implemented.');
    } } />,
    prevArrow: <PrevArrow onClick={function (): void {
        throw new Error('Function not implemented.');
    } } />,
    beforeChange: (current: number, next: number) => setImageIndex(next),
  };

  return (
    <div className="App">
      <Slider>
        {images.map((img, idx) => (
          <div
            className={idx === imageIndex ? "slide activeSlide" : "slide"}
            key={idx}
          >
            <img src={img} alt={img} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Welcome;