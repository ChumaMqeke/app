import React, { useState } from 'react';
import { toast } from 'react-toastify';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';
import './Contacts.css';
import Telephone from './images/telephone.svg';

const Contacts = () => {
  const [user, setUser] = useState({
    FullName: '',
    Email: '',
    Message: ''
  });

  const [recaptchaValue, setRecaptchaValue] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const isFormValid = () => {
    return user.FullName.trim() !== '' && user.Email.trim() !== '' && user.Message.trim() !== '' && recaptchaValue !== null;
  };

  const getData = async (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      toast.error('Please fill in all fields and complete the reCAPTCHA');
      return;
    }

    const { FullName, Email, Message } = user;

    try {
      await emailjs.sendForm('service_ggy6xvg', 'template_tk5c2sa', e.target, 'rN0OSt-EKYxnSsyGU');
      console.log('Email sent successfully');

      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          FullName,
          Email,
          Message
        })
      };

      const res = await fetch('https://react-email-10666-default-rtdb.firebaseio.com//UserData.json', options);
      if (res.ok) {
        alert('Message Sent Successfully');
        setUser({ FullName: '', Email: '', Message: '' }); // Clear form fields on success
      } else {
        throw new Error('Error Occurred');
      }
    } catch (error) {
      console.error(error);
      alert('Error Occurred');
    }
  };

  return (
    <div className="contacts-page" id="contacts">
      <div className="contacts-title">
        <h2 id="contact-me">
          Contact <span className="text-style">Me </span>
          <span className="about-line" id="in-touch-text"></span>
        </h2>
      </div>

      <div className="contacts-container">
        <div className="contacts-left">
          <div className="contacts-icons">
          <div className="icons-form">
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

          <div className="contacts-picture">
            <img className="telephone-image" src={Telephone} alt="Telephone image" />
            <div className="picture-text">
              <h2 id="touch">
                Get <span className="text-style">In </span>
                <span className="about-line" id="in-touch-text">
                  <br />
                  Touch
                </span>
              </h2>
            </div>
          </div>
        </div>

        <form
          className="contacts-right"
          onSubmit={getData}
          method="POST"
        >
          <div>
            <h6 id="form-text">Your Name:</h6>
            <div className="your-name">
              <input
                type="text"
                name="FullName"
                placeholder="Name"
                value={user.FullName}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div>
            <h6 id="form-text">Your Email Address:</h6>
            <div className="your-email">
              <input
                type="email"
                name="Email"
                placeholder="Email"
                value={user.Email}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div>
            <h6 id="form-text">Your Message:</h6>
            <div className="your-message">
              <textarea
                name="Message"
                value={user.Message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
          </div>

          <div className="recaptcha-container"> 
            <ReCAPTCHA
              sitekey="6LcaGKUpAAAAAAfVcxctQ4RDQO74vB4DMFA3N7Qq" // 6LeuXX0pAAAAAOkExvnJvOtbazNLW0KMcUJ9-dpT
              onChange={(value) => setRecaptchaValue(value)}
            />
          </div>

          <div className="send-button">
            <div className="form-button">
              <button type="submit">Send</button>
            </div>
          </div>
        </form>
      </div>

      <div className="footer">
        <div className="footer-icons">
          <div className="icons-in-footer">
          <a href="https://www.facebook.com/" target="_blank"><i className="fa-brands fa-square-facebook"></i></a>
<a href="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-square-instagram"></i></a>
<a href="https://wa.me/" target="_blank"><i className="fa-brands fa-square-whatsapp"></i></a>
<a href="https://www.linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>

          </div>
        </div>
        <div className="copyrights">Copyrights © 2024 Chuma Mqeke. All Rights reserved</div>
      </div>
    </div>
  );
};

export default Contacts;
