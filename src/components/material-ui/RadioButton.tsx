import React from "react";
import {
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
} from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";

type Props = {
  label: string;
  options: string[];
  name: string;
  size: "small" | "medium" | undefined;
  color: "default" | "primary" | "secondary" | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const useStyles = makeStyles(() =>
  createStyles({
    label: {
      fontSize: 20,
    },
  })
);

const RadioButton = (props: Props) => {
  const classes = useStyles();
  return (
    <>
      <FormControl>
        <FormLabel className={classes.label}>{props.label}</FormLabel>
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
