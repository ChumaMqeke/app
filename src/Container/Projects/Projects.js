import React, { useState } from "react";
import Slider from "react-slick";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import "./ImageSlider.css";
import './Projects.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import myProfile from './image/project-profile.png';

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

const Slide = ({ image, isActive }) => (
  <div className={isActive ? "activeSlide" : "slide"}>
    <div className="slideCard">
      <img src={image.src} alt={image.alt} />
      <div className="cardContent">
        <h3 className="imageTitle">{image.title}</h3>
        <p className="imageDescription">{image.description}</p>
        <div className="buttonContainer">
        <a href={image.linkGit} className="slideButton">GitHup</a>
        <a href={image.link} className="slideButton">Demo</a>
        </div>
      </div>
    </div>
  </div>
);

const Projects = ({ images, slidesToShow = 2 }) => {
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

  return (
    <div className='projects' id='projects'>
      <div className='heading text-center'>
        <h4>My Works</h4>
        <h1>Projects</h1>
      </div>

      <div className='projects-page'>
        <div className='projects-container'>
          <div className='projects-slide'>
            <Slider {...settings}>
              {images.map((image, idx) => (
                <Slide key={image.id} image={image} isActive={idx === imageIndex} />
              ))}
            </Slider>
          </div>
          <div className='my-picture'>
            <img className='my-side-picture' src={myProfile} alt='projects profile picture' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
