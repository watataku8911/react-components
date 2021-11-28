import React from "react";
import {
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
} from "@mui/material";

type Props = {
  label: string;
  options: Options[];
  row: boolean;
  name: string;
  size: "small" | "medium" | undefined;
  color: "default" | "primary" | "secondary" | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
type Options = {
  id: string;
  name: string;
};

const RadioButton = (props: Props) => {
  return (
    <>
      <FormControl>
        <FormLabel>{props.label}</FormLabel>
        <RadioGroup row={props.row} name={props.name} onChange={props.onChange}>
          {props.options.map((item: Options, index: number) => (
            <FormControlLabel
              key={index}
              value={item.id}
              control={<Radio size={props.size} color={props.color} />}
              label={item.name}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </>
  );
};
export default RadioButton;
