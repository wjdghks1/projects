import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {link} from "react-router-dom";
import WeatherApp from "./projects/WeatherApp";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
          </Routes>
          <Routes>{/* Whenever you make a link in projects you need to route here.. */}
            <Route path="/Projects" element={<Projects />}></Route>
            <Route path="/projects/WeatherApp" element={<WeatherApp/>}></Route>
          </Routes>
          <Routes>
            <Route path="/About" element={<About />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
