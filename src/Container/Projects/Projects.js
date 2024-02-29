import React from 'react';
import './Projects.css';
import projectsProfile from './image/project-profile.png';
import Project1 from './image/project1.png';
import Project2 from './image/project2.png';
import Portfolio from './image/portfolio.png';
import { v4 as uuidv4 } from "uuid";
import Card from "./Card";
import Carousel from "./Carousel";
import Slider from 'react-slick';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Projects() {

  let cards = [
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={Portfolio}
          title="Portfolio Project"
          description="I built this site using React.js, blending creativity and technology. Explore my projects and skills as I push boundaries in web development."
          demoLink="https://chuma-mqeke.netlify.app/"
          githubLink="https://github.com/ChumaMqeke/My-Personal-Portfolio-"
        />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={Project2}
          title="Typing Game"
          description="A fun way to boost your keyboard skills! 🎮👩‍💻 Enjoy the challenge and improve your typing effortlessly.—a fun way to boost your keyboard skills! 🎮👩‍💻 Enjoy the challenge and improve your typing effortlessly."
          demoLink="https://rainbow-fudge-46fcab.netlify.app/#"
          githubLink="https://github.com/ChumaMqeke/HTML-CSS-and-JS-Website"
        />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={Project1}
          title="Bank App"
          description="Meet my Python bank app: your financial command center! 💰💻 Enjoy secure transactions and seamless control, making banking a breeze. 🌐🏦"
          demoLink="https://project1-demo.com"
          githubLink="https://github.com/ChumaMqeke/Banking-App-with-password-generator-"
        />
      )
    }
  ];
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className='projects' id='projects'>

      <div className='heading text-center'>
        <h4>My Works</h4>
        <h1>Projects</h1>
      </div>

      <div className='projects-page' >
        <div className='projects-container'>
          <div className='projects-slide'>
            <div className="">
              <Carousel
                cards={cards}
                height="500px"
                width="100%"
                margin="0 auto"
                offset={200}
                showArrows={false}
              />
            </div>       
          </div>       
        </div>
        <div className='my-picture'>
          <img className='my-side-picture' src={projectsProfile} alt='projects profile picture'></img>
        </div>
      </div>
    </div> 
  );
}
