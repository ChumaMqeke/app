import React from 'react';
import figmaProfile from './images/figmaProfile.png';
import './Profile.css';
import cvFile from './resume/Chuma-Mqeke-resume.pdf';

const Profile = () => {
  const handleHireMeClick = () => {
    const contactSection = document.getElementById('contacts');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
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
    <div className='home' id='home'>
      <div className='home-container'>
        <div className='home-content'>
          <img src={figmaProfile} id='home-profile' alt="Description of the image" />
          <div className="hello-text">
            <h1> Hello!</h1>
            <h3>
              My Name is Chuma <span className='name'>Mqeke</span>
            </h3>
            <p>
              I am a junior software developer specializing in front-end and back-end <br /> development,
               with a keen eye for crafting user-friendly interfaces.
                <br /> Let's turn ideas into interactive experiences together!
            </p>

            <div className='button-container'>
              <div className="button">
                <button onClick={handleGetResumeClick}>Get Resume</button>
              </div>
              <div className="button-hire">
                <button onClick={handleHireMeClick}>Hire Me</button>
              </div>
            </div>

            <div className='icons'>
            <a href="https://facebook.com/chuma-mqeke" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-square-facebook"></i>
        </a>
        <a href="https://instagram.com/chuma-mqeke" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-square-instagram"></i>
        </a>
        <a href="https://wa.me/0781554750" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-square-whatsapp"></i>
        </a>
        <a href="https://linkedin.com/in/chuma-mqeke" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-linkedin"></i>
        </a>
            </div>

          </div>
        </div>
      </div>
      <div className='Line'></div>
    </div>
  );
}

export default Profile;
