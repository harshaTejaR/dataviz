import { Container } from "@mui/system";
import React from "react";
import "./App.css";
import { FaceApp } from "./Components/FaceApp";

function App() {
  return (
    <div className="App">
      <Container className="App" maxWidth="inherit">
        <h1>Hi Here We can place Header Laters</h1>
        <div>
          <FaceApp></FaceApp>
        </div>
      </Container>
    </div>
  );
}

export default App;
