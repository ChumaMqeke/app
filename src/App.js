/*import logo from './logo.svg';*/
/*import './App.css';*/
import Navbar from "./Container/Navbar/Navbar";
import Profile from "./Container/Home/Profile";
import About from "./Container/About/About";

function App() {
  return (
    <div className="App">
     <Navbar />
     <Profile />
     <About />
    </div>
  );
}

export default App;
