import React from "react";
import "../css/UIKit.css";

type Props = {
  name: string;
  placeholder: string;
  value: string;
  cols: number;
  rows: number;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const TextInput = (props: Props) => {
  return (
    <textarea
      className="textArea"
      name={props.name}
      placeholder={props.placeholder}
      cols={props.cols}
      rows={props.rows}
      onChange={props.onChange}
    >
      {props.value}
    </textarea>
  );
};

export default TextInput;
