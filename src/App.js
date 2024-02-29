import React from 'react';
import Navbar from "./Container/Navbar/Navbar";
import Profile from "./Container/Home/Profile";
import About from "./Container/About/About";
import Resume from "./Container/Resume/Resume";
import Skills from "./Container/Skills/Skills";
import Projects from "./Container/Projects/Projects";
import Testimonial from "./Container/Testimonials/Testimonial";
import Contacts from "./Container/Contacts/Contacts";
import Carousel from "./Container/Carousel/Carousel";
import "./App.css"

function App() {
  // Define your items array
  const items = [
    {
      icon: 'path/to/icon1.png',
      text: 'Lorem ipsum 1',
      headerImg: 'path/to/headerImg1.jpg',
      btnText: 'Read more',
      btnLink: 'https://example.com',
      btnIcon: 'path/to/btnIcon1.png',
    },
    // Add more items as needed
  ];

  // Define your sendInteraction function
  const sendInteraction = (interactionData) => {
    // Handle the interaction data, e.g., send it to analytics or perform some action
    console.log('Interaction data:', interactionData);
  };

  return (
    <div className="App">
      <Navbar />
      <Profile id="home" />
      <About id="about" />
      <Resume id="resume" />
      <Skills id="skills" />
      <Projects id="projects" />
      <Testimonial id="testimonials" />
      <Contacts id="contacts" />
      <Carousel items={items} sendInteraction={sendInteraction} />
    </div>
  );
}

export default App;
