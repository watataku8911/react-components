import React from "react";
import "../css/TextInput.css";

type Props = {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextInput = (props: Props) => {
  return (
    <input
      className="input"
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default TextInput;
