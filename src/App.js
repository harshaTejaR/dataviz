import { Container } from "@mui/system";
import "./App.css";
import { ButtonComp } from "./Components/Button";
import { FaceApp } from "./Components/FaceApp";
import { Greet } from "./Components/Greet";

function App() {
  return (
    <div className="App">
      <Container className="App" maxWidth="inherit">
        <h3>
          Hi! This an App To visualize SVG Smileys made using React and D3.js
        </h3>
        <h3>
          Features To be added like download SVG/PNG, sliders to change shapes
          and number of smilies
        </h3>
        <div>
          <FaceApp />
          <ButtonComp />
          <Greet name="Harsha" heroName="super">
            <p>This is a Child</p>
          </Greet>
          <Greet name="Teja" heroName="Thunder" />
          <Greet name="Runjala" heroName="Thunder" />
        </div>
      </Container>
    </div>
  );
}

export default App;
