import React from 'react'
import './Contacts.css'

export default function Contacts() {
  return (
    <div className='contacts-page'>
        <div className='contacts-title'>
          <h3>Contact Me</h3>
        </div> 

      <div className='contacts-container'>
        <div className='contacts-left'>
           <div className='contacts-icons'>Icons</div>
           <div className='contacts-picture'>Picture</div>
        </div>

        <div className='contacts-right'>
            <h6>Your Name</h6>
          <div className='your-name'>Your name</div>
            <h6>Your Email Address</h6>
          <div className='your-email'>Your email</div>
            <h6>Your Message</h6>
          <div className='your-message'>Your message</div>
            
          <div className='send-button'>Send button</div>
        </div>
      </div>


      <div className='footer'>
        <div className='footer-icons'></div>
        <div className='copyrights'></div>
      </div>

    </div>
  )
}
