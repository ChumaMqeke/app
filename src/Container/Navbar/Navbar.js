import React, { Component } from 'react';
import myImage from './images/logo.svg';
import  Nav from './Nav.css';



 class Navbar extends Component {
  state = { clicked: false };
  handleClick = () =>{
    this.setState({clicked: 
      !this.state.clicked})
  }

  
  render() {
  return (
    <div>
      <nav>
        <img src={myImage} alt="Description of the image" />
     
      <div>
        <ul id="navbar" className={this.state.clicked ?
        "#navbar active" : "#navbar"}> {/**This checks if the side bar is open or not */}
            <li><a className='active' href='#'>Home</a></li>
            <li><a href='#'>About Me</a></li>
            <li><a href='#'>Projects</a></li>
            <li><a href='#'>Skills</a></li>
            <li><a href='#'>Tesimonials</a></li>
        </ul>
      </div>
     
          <div id="mobile" onClick={this.handleClick}> 
            <i id="bar" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}>
              </i>
          </div>

      </nav>

    </div>

  );
}
}

export default Navbar;