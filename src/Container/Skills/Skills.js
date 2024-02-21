import React from 'react';
import './Skills.css';

export default function Skills() {
  return (
    <div className='skills-container'>
      <div className='skills-text'>
        <h2><span className='text-style'>My</span> S<span className='about-line'>kills</span></h2>
      </div>
      <div className='skills-cover'>

        <div className='rows'>
          <div className='square'>
            <div id="cont">
              <div id="box"><i className="fa-brands fa-html5">HTML5</i></div>
            </div>
            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: '80%' }}>
                <div className="progress-text">80%</div>
              </div>
            </div>
          </div>

          <div className='square'>
            <div id="cont">
              <div id="box"><i className="fa-brands fa-css3">    CSS</i></div>
            </div>
            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: '90%' }}>
                <div className="progress-text">90%</div>
              </div>
            </div>
          </div>
        </div>

        <div className='rows'>
          <div className='square'>
            <div id="cont">
              <div id="box"><i className="fa-brands fa-js">    JAVASCRIPT</i></div>
            </div>
            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: '75%' }}>
                <div className="progress-text">75%</div>
              </div>
            </div>
          </div>

          <div className='square'>
            <div id="cont">
              <div id="box"><i className="fa-brands fa-react">   REACT JS</i></div>
            </div>
            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: '60%' }}>
                <div className="progress-text">60%</div>
              </div>
            </div>
          </div>
        </div>

        <div className='rows'>
          <div className='square'>
            <div id="cont">
              <div id="box"><i className="fa-brands fa-java">   JAVA</i></div>
            </div>
            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: '50%' }}>
                <div className="progress-text">65%</div>
              </div>
            </div>
          </div>

          <div className='square'>
            <div id="cont">
              <div id="box"><i className="fa-brands fa-python">   PYTHON</i></div>
            </div>
            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: '50%' }}>
                <div className="progress-text">50%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
