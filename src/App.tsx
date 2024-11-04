import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Accordion } from "./components/Accordion/Accordion";
import { Rating } from "./components/Rating/Rating";
import { OnOff } from "./components/OnOff/OnOff";
import { UncontrolledAccordion } from "./components/UncontrolledAccordion/UncontrolledAccordion";
import { UncontrolledRating } from "./components/UncontrolledRating/UncontrolledRating";

function App() {
  return (
    <div className="App">
      <OnOff />
      <UncontrolledAccordion titleValue="Uncontrolled Accordion" />
      <Accordion titleValue="Accordion title" collapsed={false}/>

      <UncontrolledRating />
      <Rating value={3} />
    </div>
  );
}

type AppTitlePropsType = {
  title: string;
};

function AppTitle(props: AppTitlePropsType) {
  return <h2>{props.title}</h2>;
}

export default App;
