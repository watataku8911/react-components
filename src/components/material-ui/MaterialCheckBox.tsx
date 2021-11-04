import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

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
