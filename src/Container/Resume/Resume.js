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
      <div className='heading text-center'>
            <h4>My Resume</h4>
            <h1>Chuma Mqeke</h1>
          </div>
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
              <h6 id='job-title'>full-stack developer intern</h6>
              <p id='small-size'>UVU Africa (Capacity Tech Career Accelerator )</p>
              <ul id='list-text'>
                <li>Web Development using HTML CSS and JavaScript. </li>
                <li>Manage and track changes in codebase using version control - Git </li>
                <li>Work with server-side languages (Node.js) to develop server-side logic. </li>
                <li>Develop RESTful APIs to facilitate communication between front-end and back-end. </li>
                <li>Development of applications using Java and Python. </li>
                <li>Design and implement database structure using SQL and PostgresSQL for efficient data storage and retrieval. </li>
              </ul>
            </div>
          )}
          {selectedContent === 'skills' && (
            <div className="skills-content">
               <h5 id='skil'>Skills</h5>
              <ul id='list-text'>
                <li>HTML and CSS</li>
                <li>JavaScript</li>
                <li>React js </li>
                <li>SQL</li>
                <li>Python </li>
                <li>Figma UI/UX</li>
                <li>Problem-Solving</li>
                <li>Technical skills</li>
                <li>Communication skills</li>
              </ul>
            </div>
          )}
          {selectedContent === 'education' && (
            <div className="education-content">
              <h5>Education</h5>
              <h6 id='job-title'>Advance Diploma: ICT in Applications Development</h6>
              <p id='small-size'>Walter Sisulu University</p>
              <ul id='list-text'>
                <li>2021 - 2022</li>
                
              </ul>
              <h6 id='job-title'>National Diploma in Information Technology (Software Development)</h6>
              <p id='small-size'>Walter Sisulu University</p>
              <ul id='list-text'>
                <li>2018 - 2020</li>
                
              </ul>
              <h6 id='job-title'>Metric (National Senior Certificate)</h6>
              <p id='small-size'>Gwadana Senior Secondary School</p>
              <ul id='list-text'>
                <li>2015 - 2017</li>
                
              </ul>
            </div>
          )}
          {selectedContent === 'contacts' && (
            <div className="contacts-content">
              <h5>Contacts</h5>
              <h6 id='job-title'>Cell Number</h6>
              <p id='small-size'>060 7616 425</p>
              <ul id='list-text'>
                {/* <li> +27 78 692 2178</li> */}
                
              </ul>
              <h6 id='job-title'>Email</h6>
              <p id='small-size'>mqekec3@gmail.com</p>
              <ul id='list-text'>
                {/* <li>+27 79 077 1591</li> */}
                
              </ul>
              <h6 id='job-title'>Address</h6>
              <p id='small-size'></p>
              <ul id='list-text'>
                <li>10 Afadjato Street, Delft, Cape Town, 7100</li>
                
              </ul>
            </div>
          )}
          {selectedContent === 'references' && (
            <div className="references-content">
             <h5>References</h5>
              <h6 id='job-title'>Afika Maliwa</h6>
              <p id='small-size'>Capacity: candidate manager</p>
              <ul id='list-text'>
                <li> +27 78 692 2178</li>
                
              </ul>
              <h6 id='job-title'>Gilbert Makinana</h6>
              <p id='small-size'>Afrocentric IP: supervisor</p>
              <ul id='list-text'>
                <li>+27 79 077 1591</li>
                
              </ul>
              <h6 id='job-title'>Miss. N. Rhwayi</h6>
              <p id='small-size'>Department of Education: EMIS Coordinator</p>
              <ul id='list-text'>
                <li>+27 84 555 4559</li>
                
              </ul>
            </div>
          )}
        </div>
      </div>
      {/* <h3 className="">
        <span className="about-line">chum</span>a<span className="name"> Mqeke</span>
      </h3> */}
    </div>
  );
}

export default Resume;
