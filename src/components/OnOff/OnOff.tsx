// @flow
import * as React from "react";
type OnOffPropsType = {
//   on: boolean;
};

export const OnOff = (props: OnOffPropsType) => {
  const [on, setOn] = React.useState(true);

  const onStyle = {
    width: "30px",
    height: "20px",
    border: "1px solid black",
    display: "inline-block",
    backgroundColor: on ? "green" : "white",
  };
  const offStyle = {
    width: "30px",
    height: "20px",
    border: "1px solid black",
    display: "inline-block",
    marginLeft: "4px",
    backgroundColor: !on ? "red" : "white",
  };

  const indicatorStyle = {
    width: "10px",
    height: "10px",
    borderRadius: "5px",
    border: "1px solid black",
    display: "inline-block",
    marginLeft: "8px",
    backgroundColor: on ? "green" : "red",
  };

  const setOnHandler = () => {
    setOn(!on)
  }

  return (
    <div>
      <div style={onStyle} onClick={setOnHandler}>On</div>
      <div style={offStyle} onClick={setOnHandler}>Off</div>
      <div style={indicatorStyle}></div>
    </div>
  );
};
