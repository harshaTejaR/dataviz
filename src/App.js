import { Container } from "@mui/system";
import React from "react";
import "./App.css";
import { FaceApp } from "./Components/FaceApp";

function App() {
  return (
    <div className="App">
      <Container className="App" maxWidth="inherit">
        <h3>Hi! This an App To visualize SVG Smileys made using React and D3.js</h3>
        <h3>Features To be added like download SVG/PNG, sliders to change shapes and number of smilies</h3>
        <div>
          <FaceApp></FaceApp>
        </div>
      </Container>
    </div>
  );
}

export default App;
