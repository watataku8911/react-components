import React from "react";

type Props = {
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const RadioButton = (props: Props) => {
  return (
    <>
      {props.options.map((item: string, index: number) => (
        <label key={index}>
          <input
            type="radio"
            name={"radio"}
            value={item}
            onChange={props.onChange}
          />
          {item}
        </label>
      ))}
    </>
  );
};
export default RadioButton;
