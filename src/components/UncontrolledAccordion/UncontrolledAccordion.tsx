// @flow
import * as React from "react";
type AccordionPropsType = {
    titleValue: string
    // collapsed: boolean
};

export const UncontrolledAccordion = (props: AccordionPropsType) => {

  const collapsed = true

  return (
    <div>
      <AccordionTitle title={props.titleValue}/> <button> Toggle </button>
      {
        !collapsed && <AccordionBody />
      }
      
    </div>
  );
};

type AccordionTitlePropsType = {
    title: string
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
  return <h3>{props.title}</h3>;
};

const AccordionBody = () => {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
};
