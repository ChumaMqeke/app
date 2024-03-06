// src/components/ImageSlider.js

import React, { useState } from "react";
import Slider from "react-slick";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import "./ImageSlider.css";

const NextArrow = ({ onClick }) => {
  return (
    <div className='nextArrow' onClick={onClick}>
      <BsChevronRight />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className='prevArrow' onClick={onClick}>
      <BsChevronLeft />
    </div>
  );
};

const ImageSlider = ({ images, slidesToShow = 3 }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    centerMode: true,
    infinite: true,
    dots: false,
    speed: 300,
    slidesToShow: slidesToShow,
    centerPadding: "0",
    swipeToSlide: true,
    focusOnSelect: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 1490,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const templateImages = images.map((image, idx) => {
  // Assuming your IMAGES data now includes a title for each image
  return (
    <div className={idx === imageIndex ? "activeSlide" : "slide"} key={image.id}>
      <div className="slideCard">
        <img src={image.src} alt={image.alt} />
        <div className="cardContent">
          <h3 className="imageTitle">{image.title}</h3>
          <p className="imageDescription">{image.description}</p>
          <div className="buttonContainer">
            <button className="slideButton">Learn More</button>
            <button className="slideButton">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
});
  return <Slider {...settings}>{templateImages}</Slider>;
};

export default ImageSlider;
