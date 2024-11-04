import "./App.css";
import { Accordion } from "./components/Accordion/Accordion";
import { Rating, RatingValueType } from "./components/Rating/Rating";
import { OnOff } from "./components/OnOff/OnOff";
import { UncontrolledAccordion } from "./components/UncontrolledAccordion/UncontrolledAccordion";
import { UncontrolledRating } from "./components/UncontrolledRating/UncontrolledRating";
import { useState } from "react";

function App() {
  let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true);

  return (
    <div className="App">
      <OnOff />
      <UncontrolledAccordion titleValue="Uncontrolled Accordion" />
      <Accordion titleValue="Accordion title" collapsed={accordionCollapsed} onClick={setAccordionCollapsed}/>

      <UncontrolledRating />
      <Rating value={ratingValue} onClick={setRatingValue} />
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
