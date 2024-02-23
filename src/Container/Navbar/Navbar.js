import React, { Component } from 'react';
import myImage from './images/logo.svg';
import './Nav.css';

class Navbar extends Component {
  state = { clicked: false, isSticky: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const scrollY = window.scrollY;
    const isSticky = scrollY > 0; // Adjust the threshold as needed
    this.setState({ isSticky });
  };


  handleNavLinkClick = (id, event) => {
    event.preventDefault(); // Prevent the default behavior of anchor tag
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    this.setState({ clicked: false }); // Close the mobile menu after click
  };
  

  render() {
    return (
      <div>
        <nav className={this.state.isSticky ? 'sticky' : ''}>
          <img src={myImage} alt="Description of the image" id='logoImg' />
          <div className="container">
            <div id="mobile" onClick={this.handleClick}>
              <i id="bar" className={this.state.clicked ? 'fa fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul id="navbar" className={this.state.clicked ? 'navbar active' : 'navbar'}>
              <li><a className='active' onClick={(e) => this.handleNavLinkClick('home', e)} href='#'>Home</a></li>
<li><a onClick={(e) => this.handleNavLinkClick('about', e)} href='#'>About Me</a></li>
<li><a onClick={(e) => this.handleNavLinkClick('projects', e)} href='#'>Projects</a></li>
<li><a onClick={(e) => this.handleNavLinkClick('skills', e)} href='#'>Skills</a></li>
<li><a onClick={(e) => this.handleNavLinkClick('testimonials', e)} href='#'>Testimonials</a></li>

              <div className="button-header">
                <button>Get Resume</button>
              </div>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
