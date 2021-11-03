import React from "react";
import {
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
} from "@material-ui/core";
import Radio from "@material-ui/core/Radio";

type Props = {
  label: string;
  options: string[];
  name: string;
  size: "small" | "medium" | undefined;
  color: "default" | "primary" | "secondary" | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const RadioButton = (props: Props) => {
  return (
    <>
      <FormControl>
        <FormLabel>{props.label}</FormLabel>
        <RadioGroup
          aria-label={props.name}
          name={props.name}
          onChange={props.onChange}
        >
          {props.options.map((item: string, index: number) => (
            <FormControlLabel
              key={index}
              value={item}
              label={item}
              control={<Radio size={props.size} color={props.color} />}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </>
  );
};
export default RadioButton;
