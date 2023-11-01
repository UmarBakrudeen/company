import React from "react";
import "./App.scss";
import Header from "./Components/Header/Header";
import { Slider } from "./Components/Slider/Slider";
// Styles

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
    </div>
  );
}

export default App;
