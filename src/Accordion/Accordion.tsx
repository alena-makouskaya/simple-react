// @flow
import * as React from "react";
type Props = {};
export const Accordion = (props: Props) => {
  return (
    <div>
      <AccordionTitle title="Menu"/>
      <AccordionBody />
    </div>
  );
};

type AccordionTitlePropsType = {
    title: string
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
  return <h2>{props.title}</h2>;
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
