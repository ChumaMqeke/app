import React from 'react';
import figmaProfile from './images/aboutPicture.png';
import './About.css';

export default function About() {
  return (
    <div className='about-page'>
      <div className='about-container'>
      <div class="spinner">
    <div class="spinner1"> ,</div>
</div>
        <div className='left-box'>
        <div className='highlight-box'>
              <ul className='highlight-text'>
                <h4 className='heading'><span className='about-line'>Few</span> Highlights About <span className='text-style'>Me</span></h4>
                <p>
                Proficient in developing dynamic and responsive websites.
                </p>
                <p>
                Creates stunning and intuitive user interfaces using Figma.
                </p>
                <p>
                Expertise in utilizing React as a robust framework for web development.
                </p>
                <p>
                Continuous Learner and Tech Enthusiast
                 Passionate Problem Solver
                </p>
              </ul>
            </div>


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
