import React from "react";
import { InputLabel, FormControl, Select, MenuItem } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";

type Props = {
  fullwidth: boolean;
  variant: "filled" | "standard" | "outlined" | undefined;
  value: string;
  label: string;
  options: string[];
  onChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
};

const useStyles = makeStyles(() =>
  createStyles({
    formControl: {
      minWidth: 200,
    },
  })
);
const SelectBox = (props: Props) => {
  const classes = useStyles();
  return (
    <>
      <FormControl variant={props.variant} className={classes.formControl}>
        <InputLabel>{props.label}</InputLabel>
        <Select onChange={props.onChange} value={props.value}>
          <MenuItem value="選択してください">
            <em>選択してください</em>
          </MenuItem>
          {props.options.map((item: string, index: number) => (
            <MenuItem key={index} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};
export default SelectBox;
