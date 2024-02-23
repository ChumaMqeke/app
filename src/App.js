/*import logo from './logo.svg';*/
/*import './App.css';*/
import Navbar from "./Container/Navbar/Navbar";
import Profile from "./Container/Home/Profile";
import About from "./Container/About/About";
import Resume from "./Container/Resume/Resume";
import Skills from "./Container/Skills/Skills";
import Projects from "./Container/Projects/Projects";
import Testimonial from "./Container/Testimonials/Testimonial";
import Contacts from "./Container/Contacts/Contacts";
import "./App.css"


function App() {
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
    </div>
  );
}

export default App;
