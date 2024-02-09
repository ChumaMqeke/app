import React from 'react';
import figmaProfile from './images/aboutPicture.png';
import './About.css';

export default function About() {
  return (
    <div className='about-page'>
      <div className='about-container'>
        <div className='left-box'>
          <div className='about-text'>
            <h2><span className='about-line'>About</span> <span className='text-style'>Me</span></h2>
          </div>
          <div className='top-text'>
            <img className='profile-picture' src={figmaProfile} alt="Description of the image" />
            <div className='rectangle-box'>
              <p className='text'>
                I am a junior software developer with a focus on front-end and back-end development,
                dedicated to creating seamless and engaging user interfaces. Passionate about transforming ideas into functional, user-friendly experiences, I bring creativity and precision to every project. Let's collaborate and build innovative solutions together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
