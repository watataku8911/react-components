import React from "react";
import "../../css/UIKit.css";

type Props = {
  label: string;
  name: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
const CheckBox = (props: Props) => {
  return (
    <div className="checkBox">
      <input
        type="checkbox"
        name={props.name}
        checked={props.checked}
        onChange={props.onChange}
      />
      <label>{props.label}</label>
    </div>
  );
};

export default CheckBox;
