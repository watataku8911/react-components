import React from "react";
import TextField from "@mui/material/TextField";

type Props = {
  fullWidth: boolean;
  label: string;
  multiline: boolean;
  required: boolean;
  rows: number;
  value: string;
  type: string;
  variant: "filled" | "standard" | "outlined" | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextInput = (props: Props) => {
  return (
    <TextField
      fullWidth={props.fullWidth}
      label={props.label}
      margin="dense"
      multiline={props.multiline}
      required={props.required}
      rows={props.rows}
      value={props.value}
      type={props.type}
      variant={props.variant}
      onChange={props.onChange}
    />
  );
};

export default TextInput;
