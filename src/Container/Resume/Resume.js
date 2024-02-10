import React from 'react';
import "./Resume.css";

function Resume() {
    return (
        <div className='resume-page'>
            <h3 className='title'>
                    <span className='about-line'>Res</span>u<span className='name'>me</span>
                </h3>
            <div className='page-container'>
                
                <div className='side-bar'>
                   <div className='about-me-button'><h5>About Me</h5></div>
                   <div className='experience-button'><h5>Experience</h5></div>
                   <div className='skills-button'><h5>skills</h5></div>
                   <div className='education-button'><h5>Education</h5></div>
                   <div className='references-button'><h5>References</h5></div>
                   <div className='contacts-button'><h5>Contacts</h5></div>

                   <div className='download-button'>
                       
                   </div>
                </div>


                <div className='cv-content'>
                   <div className='about-me-content'><h5>About Me</h5></div>
                   <div className='experience-content'><h5></h5></div>
                   <div className='skills-content'></div>
                   <div className='education-content'></div>
                   <div className='references-content'></div>
                   <div className='contacts-content'></div>
                </div>

            </div>

        </div>
    )
}

export default Resume
