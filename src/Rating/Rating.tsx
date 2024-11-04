// @flow
import * as React from "react";

type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

type RatingPropsType = {
  value: RatingValueType;
};

export const Rating = (props: RatingPropsType) => {
  return (
    <div>
      <Star selected={props.value >= 1} />
      <Star selected={props.value >= 2} />
      <Star selected={props.value >= 3} />
      <Star selected={props.value >= 4} />
      <Star selected={props.value >= 5} />
    </div>
  );
};

type StarPropsType = {
  selected: boolean;
};

export const Star = (props: StarPropsType) => {
  return <div>{props.selected ? <b>Star</b> : "Star"}</div>;
};
