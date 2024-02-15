import React from 'react';
import './Projects.css';
import projectsProfile from './image/project-profile.png';

import { v4 as uuidv4 } from "uuid";
import Card from "./Card";
import Carousel from "./Carousel";

export default function Projects() {

  let cards = [
    {
      key: uuidv4(),
      content: (
        <Card imagen={projectsProfile} />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen={projectsProfile} />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen={projectsProfile} />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen={projectsProfile} />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen={projectsProfile} />
      )
    }
  ];
  
  return (
    <div className='projects-page'>
      {/* <div className='projects'>
      <h3 id='project-title'>
        <span className="about-line">chum</span>a<span className="name"> Mqeke</span>
      </h3> */}
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
       
  );
}
