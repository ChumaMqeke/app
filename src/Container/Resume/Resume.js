import React, { useState } from 'react';
import './Resume.css';

function Resume() {
  const [selectedContent, setSelectedContent] = useState('about-me');

  const handleButtonClick = (content) => {
    setSelectedContent(content);
  };

  return (
    <div className="resume-page">
      <h3 className="title">
        <span className="about-line">Res</span>u<span className="name">me</span>
      </h3>
      <div className="page-container">
        <div className="side-bar">
          <div
            className={`sidebar-button ${selectedContent === 'about-me' ? 'active' : ''}`}
            onClick={() => handleButtonClick('about-me')}
          >
            <h5>About Me</h5>
          </div>
          <div
            className={`sidebar-button ${selectedContent === 'experience' ? 'active' : ''}`}
            onClick={() => handleButtonClick('experience')}
          >
            <h5>Experience</h5>
          </div>
          {/* Add similar blocks for other buttons */}
          <div
            className={`sidebar-button ${selectedContent === 'skills' ? 'active' : ''}`}
            onClick={() => handleButtonClick('skills')}
          >
            <h5>Skills</h5>
          </div>
          <div
            className={`sidebar-button ${selectedContent === 'education' ? 'active' : ''}`}
            onClick={() => handleButtonClick('education')}
          >
            <h5>Education</h5>
          </div>
          <div
            className={`sidebar-button ${selectedContent === 'references' ? 'active' : ''}`}
            onClick={() => handleButtonClick('references')}
          >
            <h5>References</h5>
          </div>
          <div
            className={`sidebar-button ${selectedContent === 'contacts' ? 'active' : ''}`}
            onClick={() => handleButtonClick('contacts')}
          >
            <h5>Contacts</h5>
          </div>
          <div className="download-button"></div>
        </div>

        <div className={`cv-content ${selectedContent === 'about-me' ? 'slide-out' : ''}`}>
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
          {/* Add similar blocks for other content */}
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
        </div>
      </div>
    </div>
  );
}

export default Resume;
