// @flow
import * as React from "react";

type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

type RatingPropsType = {
  // value: RatingValueType;
};

export const UncontrolledRating = (props: RatingPropsType) => {
  const [value, setValue] = React.useState<RatingValueType>(0);

  const setValueHandler = (value: RatingValueType) => {
    setValue(value);
  };

  return (
    <div>
      <Star selected={value >= 1} /><button onClick={() => setValueHandler(1)}>1</button>
      <Star selected={value >= 2} /><button onClick={() => setValueHandler(2)}>2</button>
      <Star selected={value >= 3} /><button onClick={() => setValueHandler(3)}>3</button>
      <Star selected={value >= 4} /><button onClick={() => setValueHandler(4)}>4</button>
      <Star selected={value >= 5} /><button onClick={() => setValueHandler(5)}>5</button>

      {/* <Star selected={value >= 1} onClick={() => setValueHandler(1)} />
      <Star selected={value >= 2} onClick={() => setValueHandler(2)} />
      <Star selected={value >= 3} onClick={() => setValueHandler(3)} />
      <Star selected={value >= 4} onClick={() => setValueHandler(4)} />
      <Star selected={value >= 5} onClick={() => setValueHandler(5)} /> */}
    </div>
  );
};

type StarPropsType = {
  selected: boolean;
  // onClick: (value: RatingValueType) => void;
};

export const Star = (props: StarPropsType) => {
  return <span> {props.selected ? <b>Star</b> : "Star"} </span>;
};
