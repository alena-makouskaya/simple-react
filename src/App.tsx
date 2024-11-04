import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Accordion } from "./components/Accordion/Accordion";
import { Rating } from "./components/Rating/Rating";
import { OnOff } from "./components/OnOff/OnOff";
import { UncontrolledAccordion } from "./components/UncontrolledAccordion/UncontrolledAccordion";

function App() {
  return (
    <div className="App">
      <AppTitle title="This is App Title" />
      <Rating value={0} />
      <Accordion titleValue="Users uncollapsed" collapsed={false} />

      <UncontrolledAccordion titleValue="Uncontrolled Accordion" />
      <Rating value={2} />
      <OnOff />
      <OnOff />
      <OnOff />
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
