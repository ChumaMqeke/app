import React from 'react';
import './Skills.css';

export default function Skills() {
  return (
    <div className='skills-container' id='skills'>
      <div className='heading text-center'>
            <h4>Expertise Highlights</h4>
            <h1>Skills</h1>
          </div>
      <div className='skills-cover'>
        <div className='rows'>
          <div className='square'>
            <div className="icon-container html">
              <i className="fab fa-html5"></i>
            </div>
            <div className="text-container">
              <h3>HTML5</h3>
              <p>Proficient</p>
            </div>
            <div className="progress-bar-container">
              <div className="progress-bar html" style={{ width: '80%' }}>
                <div className="progress-text">80%</div>
              </div>
            </div>
          </div>

          <div className='square'>
            <div className="icon-container css">
              <i className="fab fa-css3-alt"></i>
            </div>
            <div className="text-container">
              <h3>CSS3</h3>
              <p>Expert</p>
            </div>
            <div className="progress-bar-container">
              <div className="progress-bar css" style={{ width: '90%' }}>
                <div className="progress-text">90%</div>
              </div>
            </div>
          </div>

          <div className='square'>
            <div className="icon-container js">
              <i className="fab fa-js"></i>
            </div>
            <div className="text-container">
              <h3>JavaScript</h3>
              <p>Intermediate</p>
            </div>
            <div className="progress-bar-container">
              <div className="progress-bar js" style={{ width: '75%' }}>
                <div className="progress-text">75%</div>
              </div>
            </div>
          </div>
        </div>

        <div className='rows'>
          <div className='square'>
            <div className="icon-container react">
              <i className="fab fa-react"></i>
            </div>
            <div className="text-container">
              <h3>React JS</h3>
              <p>Intermediate</p>
            </div>
            <div className="progress-bar-container">
              <div className="progress-bar react" style={{ width: '60%' }}>
                <div className="progress-text">60%</div>
              </div>
            </div>
          </div>

          <div className='square'>
            <div className="icon-container java">
              <i className="fab fa-java"></i>
            </div>
            <div className="text-container">
              <h3>Java</h3>
              <p>Beginner</p>
            </div>
            <div className="progress-bar-container">
              <div className="progress-bar java" style={{ width: '50%' }}>
                <div className="progress-text">50%</div>
              </div>
            </div>
          </div>

          <div className='square'>
            <div className="icon-container python">
              <i className="fab fa-python"></i>
            </div>
            <div className="text-container">
              <h3>Python</h3>
              <p>Beginner</p>
            </div>
            <div className="progress-bar-container">
              <div className="progress-bar python" style={{ width: '50%' }}>
                <div className="progress-text">50%</div>
              </div>
            </div>
          </div>
        </div>

        {/* Add more rows and squares for additional skills */}
        
      </div>
    </div>
  );
}
