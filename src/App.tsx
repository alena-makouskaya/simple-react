import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      This is APP component
      <Rating />
      <Accordion />
    </div>
  );
}

function Rating() {
  return (
    <div>
      <div>Star</div>
      <div>Star</div>
      <div>Star</div>
      <div>Star</div>
      <div>Star</div>
    </div>
  );
}

function Accordion() {
  return (
    <div>
      <h2>Menu</h2>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  );
}

export default App;
