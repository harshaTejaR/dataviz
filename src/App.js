import { Container } from "@mui/system";
import React from "react";
import "./App.css";
import { Face } from "./Components/Face";

function App() {
  return (
    <div className="App">
      <Container className="App" maxWidth = "inherit">
        <h1>Hi Here We can place Header Laters</h1>
        <div>
          <Container>
            <Face margin = "inherit"></Face>
          </Container>
        </div>
      </Container>
    </div>
  );
}

export default App;
