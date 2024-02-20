import React, { useState } from 'react';
import { toast } from "react-toastify";
import emailjs from 'emailjs-com';
import './Contacts.css'
import Telephone from './images/telephone.svg'


const Contacts = () => {

    const [user, setUser] = useState({
      FullName: '',
      Email: '',
      Message: ''
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
}


const isFormValid = () => {
    return user.FullName.trim() !== '' && user.Email.trim() !== '' && user.Message.trim() !== '';
}

const getData = async (e) => {
    e.preventDefault();

    if (!isFormValid()) {
        toast.error('Please fill in all fields');
        return;
    }

    const { FullName, Email, Message } = user;

    try {
        await emailjs.sendForm('service_zv9hn9a', 'template_2oo3qwi', e.target, 'wSaoVe3DwwbqMEtrt');
        console.log("Email sent successfully");

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                FullName, Email, Message
            })
        };

        const res = await fetch('https://react-email-10666-default-rtdb.firebaseio.com//UserData.json', options); 
        if (res.ok) {
            toast.success('Message Sent Successfully');
            setUser({ FullName: '', Email: '', Message: '' }); // Clear form fields on success
        } else {
            throw new Error('Error Occurred');
        }
    } catch (error) {
        console.error(error);
        toast.error('Error Occurred');
    }
}

  return (
    <div className='contacts-page' >
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


  <form className='contacts-right' onSubmit={getData}
      
      method="POST">
    <div>
        <h6 id='form-text'>Your Name:</h6>
        <div className='your-name'>
            <input type='text'  name="FullName"  placeholder="Name"  value={user.FullName}  onChange={handleInputChange}  />  {/* // onChange={handleChange} */}
        </div>
    </div>

    <div>
        <h6 id='form-text'>Your Email Address:</h6>
        <div className='your-email'>
            <input type='email'  name="Email" placeholder="Email"  value={user.Email}  onChange={handleInputChange} />    {/* // onChange={handleChange} */}
        </div>
    </div>

    <div>
        <h6 id='form-text'>Your Message:</h6>
        <div className='your-message'>
            <textarea  name="Message" value={user.Message}  onChange={handleInputChange} ></textarea>    {/* // onChange={handleChange} */}
        </div>
    </div>

    <div className='send-button'>
        <div className="form-button">
            <button type='submit'>Send</button>
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
}; 

// service_xed8ry8

export default Contacts;