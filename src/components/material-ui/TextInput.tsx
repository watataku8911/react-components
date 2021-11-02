import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/styles";

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

const useStyles = makeStyles({
  full: {
    marginBottom: 16,
  },
  half: {
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 16,
    minWidth: 130,
    width: "calc(50% - 16px)",
  },
});

const TextInput = (props: Props) => {
  const classes = useStyles();
  const textStyle = props.fullWidth ? classes.full : classes.half;

  return (
    <TextField
      className={textStyle}
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
