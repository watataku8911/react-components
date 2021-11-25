import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

type Props = {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  color: "primary" | "secondary" | undefined;
  label: string;
};

const MaterialCheckbox = (props: Props) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={props.checked}
          onChange={props.onChange}
          name={props.name}
          color={props.color}
        />
      }
      label={props.label}
    />
  );
};
export default MaterialCheckbox;
