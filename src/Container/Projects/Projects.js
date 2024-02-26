import React from 'react';
import './Projects.css';
import projectsProfile from './image/project-profile.png';
import Project1 from './image/project1.png';
import Project2 from './image/project2.png';
import Portfolio from './image/portfolio.png';
import { v4 as uuidv4 } from "uuid";
import Card from "./Card";
import Carousel from "./Carousel";

export default function Projects() {

  let cards = [
    // {
    //   key: uuidv4(),
    //   content: (
    //     <Card imagen={projectsProfile} />
    //   )
    // },
    {
      key: uuidv4(),
      content: (
        <Card imagen={Portfolio} />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen={Project2} />
      )
    },
    {
      key: uuidv4(),
      content: (
        <div>
      <p>This is some additional text.</p>
      <Card imagen={Project1} />
    </div>
      )
    }
  ];
  
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
