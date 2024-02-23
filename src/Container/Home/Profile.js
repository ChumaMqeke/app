import React from 'react';
import figmaProfile from './images/figmaProfile.png';
import './Profile.css';

export default function Profile() {
  const handleHireMeClick = () => {
    const contactSection = document.getElementById('contacts');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className='home' id='home'>
      <div className='home-container'>
        <div className='home-content'>
          <img src={figmaProfile} alt="Description of the image" />
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
                <button>Get Resume</button>
              </div>
              <div className="button-hire">
                <button onClick={handleHireMeClick}>Hire Me</button>
              </div>
            </div>

            <div className='icons'>
              <i className="fa-brands fa-square-facebook"></i>
              <i className="fa-brands fa-square-instagram"></i>
              <i className="fa-brands fa-square-whatsapp"></i>
              <i className="fa-brands fa-linkedin"></i>
            </div>

          </div>

        </div>
      </div>
      <div className='Line'></div>
    </div>
  );
}
