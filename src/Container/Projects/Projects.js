import React from 'react';
import { useState, useEffect } from "react";
import './Projects.css';
import projectsProfile from './image/project-profile.png';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AfroStyles from "./AfroStyles";

import projectsProfile1 from './image/project-profile.png';
import projectsProfile2 from './image/project-profile.png';
import projectsProfile3 from './image/project-profile.png';
import projectsProfile4 from './image/project-profile.png';
import projectsProfile5 from './image/project-profile.png';

export default function Projects() {

  const [nav1, setNav1] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slider1, setSlider1] = useState(null);
  
  useEffect(() => {
    setNav1(slider1);
  }, [slider1])

  const settings = {

    onReInit: () => setCurrentSlide(slider1?.innerSlider.state.currentSlide),
    lazyLoad: true,
    asNavFor: ".slider-nav",
    focusOnSelect: true,
  

    // dots: true,
    // speed: 500,
    // slidesToShow: 2,
    // slidesToScroll: 2,
    // infinite: true,
    // autoplay: true,
    // autoplaySpeed: 1000,
    // responsive: [
    //   {
    //     breakpoint: 600,
    //     settings: {
    //      slidesToShow: 1,
    //     }
    //    },
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //      slidesToShow: 2,
    //     }
    //   }
    // ]

    nextArrow: (
      <div>
        <div className="next-slick-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" stroke="black" height="24" viewBox="0 -960 960 960" width="24"><path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z"/></svg>
        </div>
      </div>
    ),

    prevArrow: (
      <div>
        <div className="next-slick-arrow rotate-180">
          <svg xmlns="http://www.w3.org/2000/svg" stroke="black" height="24" viewBox="0 -960 960 960" width="24"><path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z"/></svg>
        </div>
      </div>
    ),
  };

  return (
    <div className='projects-page'>
        <div className='projects-container'>

            <div className='projects-slide'>
              
            <div className="content">
      <h1 className="header">Afro Styles Fashion Store</h1>
      <div className="container">
        <Slider {...settings}>
          {AfroStyles.map((item) => (
            <div key={item.id}>
              <div className="img-body">
                <img src={item.src} alt={item.alt} />
              </div>
              <div> 
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>

            </div>
                <div className='project-links'></div>
            </div>

            <div className='my-picture'>
                <img className='my-side-picture' src={projectsProfile} alt='projects profile picture'></img>
            </div>

        </div>
  
  );
}
