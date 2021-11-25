import React from "react";
import Button from "@mui/material/Button";

type Props = {
  disabled: boolean;
  color: "primary" | "secondary" | undefined;
  variant: "text" | "outlined" | "contained" | undefined;
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  label: string;
};

const SubmitButton = (props: Props) => {
  return (
    <Button
      disabled={props.disabled}
      color={props.color}
      variant={props.variant}
      onClick={props.onClick}
    >
      {props.label}
    </Button>
  );
};

export default SubmitButton;
