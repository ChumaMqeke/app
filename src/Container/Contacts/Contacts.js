import React from 'react'
import './Contacts.css'
import Telephone from './images/telephone.svg'

export default function Contacts() {
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

        <div className='contacts-right'>
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
        </div>
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
