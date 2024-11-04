// @flow
import * as React from "react";
type AccordionPropsType = {
  titleValue: string;
  // collapsed: boolean
};

export const UncontrolledAccordion = (props: AccordionPropsType) => {
  const [collapsed, setCollapsed] = React.useState(true);

  return (
    <div>
      <AccordionTitle title={props.titleValue} setCollapsed={() => setCollapsed(!collapsed)}/>
      {!collapsed && <AccordionBody />}
    </div>
  );
};

type AccordionTitlePropsType = {
  title: string;
  setCollapsed: () => void
};

const AccordionTitle = (props: AccordionTitlePropsType) => {
  return <h3 onClick={props.setCollapsed}>{props.title}</h3>;
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
