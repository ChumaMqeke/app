import React, { useState } from 'react';
import './Resume.css';
import cvFile from './resume/Chuma-Mqeke-resume.pdf';

function Resume() {
  const [selectedContent, setSelectedContent] = useState('about-me');

  const handleButtonClick = (content) => {
    setSelectedContent(content);
  };

  const handleGetResumeClick = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = cvFile;
    downloadLink.download = 'Chuma-Mqeke-resume.pdf'; 
    downloadLink.style.display = 'none';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="resume-page" id='resume'>
      <div className='resume-cover'>
      
      <div className="resume-page-container">
    
        <div className='side-bar-container'>
        <h4 className="side-title">
        <span className="about-line">Res</span>ume
      </h4>
        <div className="side-bar">
          <div
            className={`sidebar-button ${selectedContent === 'about-me' ? 'active' : ''}`}
            onClick={() => handleButtonClick('about-me')}
          >
            <i class="fa-solid fa-user"></i>
            <h5>About Me</h5>
          </div>
          <div
            className={`sidebar-button ${selectedContent === 'experience' ? 'active' : ''}`}
            onClick={() => handleButtonClick('experience')}
          >
            <i class="fa-solid fa-briefcase"></i>
            <h5>Experience</h5>
          </div>


         
          <div
            className={`sidebar-button ${selectedContent === 'skills' ? 'active' : ''}`}
            onClick={() => handleButtonClick('skills')}
          >
            <i class="fa-solid fa-gear"></i>
            <h5>Skills</h5>
          </div>
          <div
            className={`sidebar-button ${selectedContent === 'education' ? 'active' : ''}`}
            onClick={() => handleButtonClick('education')}
          >
           <i class="fa-solid fa-user-graduate"></i>
            <h5>Education</h5>
          </div>
          <div
            className={`sidebar-button ${selectedContent === 'references' ? 'active' : ''}`}
            onClick={() => handleButtonClick('references')}
          >
            <i class="fa-solid fa-users"></i>
            <h5>References</h5>
          </div>
          <div
            className={`sidebar-button ${selectedContent === 'contacts' ? 'active' : ''}`}
            onClick={() => handleButtonClick('contacts')}
          >
            <i class="fa-solid fa-address-book"></i>
            <h5>Contacts</h5>
          </div>
          <div className="download-button">
          <button onClick={handleGetResumeClick}>Get Resume</button>
          </div>
        </div>
        </div>
        </div>

        <div className={`cv-content ${selectedContent === 'about-me' ? 'slide-out' : ''} 
        ${selectedContent === 'experience' ? 'slide-out' : ''} 
        ${selectedContent === 'skills' ? 'slide-out' : ''} 
        ${selectedContent === 'education' ? 'slide-out' : ''} 
        ${selectedContent === 'references' ? 'slide-out' : ''} 
        ${selectedContent === 'contacts' ? 'slide-out' : ''}`}>

          {selectedContent === 'about-me' && (
            <div className="about-me-content">
              <h5>About Me</h5>
              <p className="">
                I am a junior software developer with a focus on front-end and back-end development,
                dedicated to creating seamless and engaging user interfaces. Passionate about
                transforming ideas into functional, user-friendly experiences, I bring creativity
                and precision to every project. Let's collaborate and build innovative solutions
                together!
              </p>
            </div>
          )}
          
          {selectedContent === 'experience' && (
            <div className="experience-content">
              <h5>My Experience</h5>
              <p className="">
                I am a junior software developer with a focus on front-end and back-end development,
                dedicated to creating seamless and engaging user interfaces. Passionate about
                transforming ideas into functional, user-friendly experiences, I bring creativity
                and precision to every project. Let's collaborate and build innovative solutions
                together!
              </p>
            </div>
          )}
          {selectedContent === 'skills' && (
            <div className="skills-content">
              <h5>Skills</h5>
              <p className="">
                I am a junior software developer with a focus on front-end and back-end development,
                dedicated to creating seamless and engaging user interfaces. Passionate about
                transforming ideas into functional, user-friendly experiences, I bring creativity
                and precision to every project. Let's collaborate and build innovative solutions
                together!
              </p>
            </div>
          )}
          {selectedContent === 'education' && (
            <div className="education-content">
              <h5>Education</h5>
              <p className="">
                I am a junior software developer with a focus on front-end and back-end development,
                dedicated to creating seamless and engaging user interfaces. Passionate about
                transforming ideas into functional, user-friendly experiences, I bring creativity
                and precision to every project. Let's collaborate and build innovative solutions
                together!
              </p>
            </div>
          )}
          {selectedContent === 'contacts' && (
            <div className="contacts-content">
              <h5>Contacts</h5>
              <p className="">
                I am a junior software developer with a focus on front-end and back-end development,
                dedicated to creating seamless and engaging user interfaces. Passionate about
                transforming ideas into functional, user-friendly experiences, I bring creativity
                and precision to every project. Let's collaborate and build innovative solutions
                together!
              </p>
            </div>
          )}
          {selectedContent === 'references' && (
            <div className="references-content">
              <h5>Contacts</h5>
              <p className="">
                I am a junior software developer with a focus on front-end and back-end development,
                dedicated to creating seamless and engaging user interfaces. Passionate about
                transforming ideas into functional, user-friendly experiences, I bring creativity
                and precision to every project. Let's collaborate and build innovative solutions
                together!
              </p>
            </div>
          )}
        </div>
      </div>
      <h3 className="about-title">
        <span className="about-line">chum</span>a<span className="name"> Mqeke</span>
      </h3>
    </div>
  );
}

export default Resume;
