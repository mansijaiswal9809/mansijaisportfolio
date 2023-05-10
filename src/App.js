import "./App.css";
import { Navbar } from "./Components/Navbar";
import { About } from "./Sections/About";
import { Education } from "./Sections/Education";
import { Introduction } from "./Sections/Introduction";
import { TechStack } from "./Sections/TechStack";
import { Projects } from "./Sections/Projects";
import { GetInTouch } from "./Sections/GetInTouch";
import Background from "./Components/Background";

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <div className="background"></div>
       */}
       <Background/>
      <Introduction />
      <About />
      <Education />
      <TechStack />
      <Projects/>
      <GetInTouch/>
    </div>
  );
}

export default App;