import React, { Component } from 'react';
import myImage from './images/logo.svg';
import  Nav from './Nav.css';



class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <div>
        <nav>
          <img src={myImage} alt="Description of the image" />

          <div className="container">
            <div id="mobile" onClick={this.handleClick}>
              <i id="bar" className={this.state.clicked ? "fa fa-times" : "fas fa-bars"}></i>
            </div>

            <ul id="navbar" className={this.state.clicked ? "navbar active" : "navbar"}>
              <li><a className='active' href='#'>Home</a></li>
              <li><a href='#'>About Me</a></li>
              <li><a href='#'>Projects</a></li>
              <li><a href='#'>Skills</a></li>
              <li><a href='#'>Tesimonials</a></li>

              <div className="button-header">
                <button>Get Resume</button>
              </div>
            </ul>

            <div className="search-container">
                <i id="icon" className="fas fa-search"></i>
                <input type="text" placeholder="" />
              </div>

          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
