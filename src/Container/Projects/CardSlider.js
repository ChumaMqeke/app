import React from "react";
import Slider from "react-slick";
import Card from "./Card";

const CardSlider = ({ cards }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Adjust as needed
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...sliderSettings}>
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </Slider>
  );
};

export default CardSlider;
