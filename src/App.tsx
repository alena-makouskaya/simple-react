import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AppTitle />
      <Rating />
      <Accordion />
      <Rating />
    </div>
  );
}

function Rating() {
  return (
    <div>
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </div>
  );
}

function Star() {
  return <div>Star</div>;
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

function AppTitle() {
  return <h2>This is App Title</h2>;
}

export default App;
