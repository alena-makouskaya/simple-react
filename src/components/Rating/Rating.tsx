// @flow
import * as React from "react";

type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

type RatingPropsType = {
  value: RatingValueType;
};

export const Rating = (props: RatingPropsType) => {
  return (
    <div>
      <Star selected={props.value >= 1} /><button>1</button>
      <Star selected={props.value >= 2} /><button>2</button>
      <Star selected={props.value >= 3} /><button>3</button>
      <Star selected={props.value >= 4} /><button>4</button>
      <Star selected={props.value >= 5} /><button>5</button>
    </div>
  );
};

type StarPropsType = {
  selected: boolean;
};

export const Star = (props: StarPropsType) => {
  return <span> {props.selected ? <b>Star</b> : "Star"} </span>;
};
