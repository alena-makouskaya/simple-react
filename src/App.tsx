import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Accordion } from "./Accordion/Accordion";
import { Rating } from "./Rating/Rating";

function App() {
  return (
    <div className="App">
      <AppTitle title="This is App Title"/>
      <Rating value={0}/>
      <Accordion titleValue="Menu collapsed" collapsed={true}/>
      <Accordion titleValue="Users uncollapsed" collapsed={false}/>
      <Rating value={2}/>
    </div>
  );
}

type AppTitlePropsType = {
  title: string
}


function AppTitle(props: AppTitlePropsType) {
  return <h2>{props.title}</h2>;
}

export default App;
