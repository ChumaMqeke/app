
import React, { useState } from 'react';
import './Contacts.css'
import Telephone from './images/telephone.svg'



  const Contacts = () => {
    const [status, setStatus] = useState();
    
    const [user, setUser] = useState({
      FullName: '',
      Email: '',
      Message: ''
    });
    const storeMessageInFirebase = async (messageData) => {
      const firebaseOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(messageData)
      };
    
      try {
        const response = await fetch('https://react-form-bfafe-default-rtdb.firebaseio.com/', firebaseOptions);
        if (response.ok) {
          return true;
        } else {
          throw new Error('Error storing message in Firebase');
        }
      } catch (error) {
        console.error('Error storing message in Firebase:', error);
        return false;
      }
    };
    
    const sendEmailWithHeroTofu = async (messageData) => {
      const heroTofuOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(messageData)
      };
    
      try {
        const response = await fetch( heroTofuOptions);
        if (response.ok) {
          return true;
        } else {
          throw new Error('Error sending email with HeroTofu');
        }
      } catch (error) {
        console.error('Error sending email with HeroTofu:', error);
        return false;
      }
    };
    
    const handleSubmit = async (event) => {
      event.preventDefault();
    
      const messageData = {
        FullName: user.FullName,
        Email: user.Email,
        Message: user.Message
      };
    
      try {
        const [firebaseRes, heroTofuRes] = await Promise.all([
          storeMessageInFirebase(messageData),
          sendEmailWithHeroTofu(messageData)
        ]);
    
        if (firebaseRes && heroTofuRes) {
          alert('Message Stored and Email Sent');
        } else {
          throw new Error('Error Occurred');
        }
    
        // Clear form
        setUser({
          FullName: '',
          Email: '',
          Message: ''
        });
      } catch (error) {
        console.error('Error occurred:', error);
        alert('Error Occurred');
      }
    };

  return (
    <div className='contacts-page'>
        <div className='contacts-title'>
        <h2 id='contact-me'>Contact <span className='text-style'>Me </span><span className='about-line' id='in-touch-text'></span></h2>
        </div> 

      <div className='contacts-container'>
        <div className='contacts-left'>
           <div className='contacts-icons'>
        
              <div className='icons-form'>
              <i class="fa-brands fa-square-facebook"></i>
              <i class="fa-brands fa-square-instagram"></i>
              <i class="fa-brands fa-square-whatsapp"></i>
              <i class="fa-brands fa-linkedin"></i>
              </div>

           </div>
            
           <div className='contacts-picture'>
           <img className='telephone-image' src={Telephone} alt='Telephone image'/>
            <div className='picture-text'><h2 id='touch'>Get <span className='text-style'>In </span><span className='about-line' id='in-touch-text'> <br />Touch</span></h2></div>
            </div>
        </div>

        {/* <div className='contacts-right'>
            <h6 id='form-text'>Your Name:</h6>
          <div className='your-name'></div>
            <h6 id='form-text'>Your Email Address:</h6>
          <div className='your-email'></div>
            <h6 id='form-text'>Your Message:</h6>
          <div className='your-message'></div>
            
          <div className='send-button'>

          <div className="form-button">
                 <button>Send</button>
              </div> 
             
          </div>
        </div> */}


<form className='contacts-right' 
      onSubmit={handleSubmit}
      method="POST">
    <div>
        <h6 id='form-text'>Your Name:</h6>
        <div className='your-name'>
            <input type='text'  name="FullName" value={user.FullName} />  {/* // onChange={handleChange} */}
        </div>
    </div>

    <div>
        <h6 id='form-text'>Your Email Address:</h6>
        <div className='your-email'>
            <input type='email'  name="Email"  value={user.Email} />    {/* // onChange={handleChange} */}
        </div>
    </div>

    <div>
        <h6 id='form-text'>Your Message:</h6>
        <div className='your-message'>
            <textarea  name="Message"  value={user.Message}></textarea>    {/* // onChange={handleChange} */}
        </div>
    </div>

    <div className='send-button'>
        <div className="form-button">
            <button  type="submit">Send</button>
        </div>
    </div>
</form>


      </div>


      <div className='footer'>
        <div className='footer-icons'>
        <div className='icons-in-footer'>
        <i class="fa-brands fa-square-facebook"></i>
        <i class="fa-brands fa-square-instagram"></i>
        <i class="fa-brands fa-square-whatsapp"></i>
        <i class="fa-brands fa-linkedin"></i>
        </div>

        </div>
        <div className='copyrights'>Copyrights © 2024 Chuma Mqeke.All Rights reserved</div>
      </div>
    </div>
  )
}

export default Contacts;