/*import logo from './logo.svg';*/
/*import './App.css';*/
import Navbar from "./Container/Navbar/Navbar";
import Profile from "./Container/Home/Profile";
import About from "./Container/About/About";
import Resume from "./Container/Resume/Resume";
import Skills from "./Container/Skills/Skills";
import Projects from "./Container/Projects/Projects";
import Testimonials from "./Container/Testimonials/Testimonials";
import Contacts from "./Container/Contacts/Contacts";
import "./App.css"


function App() {
  return (
    <div className="App">
     <Navbar />
     <Profile />
     <About />
     <Resume /> 
     <Skills /> 
     <Projects />
     <Testimonials />
     <Contacts />
    </div>
  );
}

export default App;
