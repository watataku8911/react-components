import React from "react";
import "../../css/UIKit.css";

type Props = {
  label: string;
  disabled: boolean;
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

const Button = (props: Props) => {
  return (
    <button
      className="button"
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
};
export default Button;
