import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

type Props = {
  variant: "filled" | "standard" | "outlined" | undefined;
  fullWidth: boolean;
  label: string;
  options: Options[];
  value: string;
  onChange: (event: SelectChangeEvent<string>, child: React.ReactNode) => void;
};

type Options = {
  id: string;
  name: string;
};
const SelectBox = (props: Props) => {
  return (
    <>
      <FormControl variant={props.variant} fullWidth={props.fullWidth}>
        <InputLabel>{props.label}</InputLabel>
        <Select onChange={props.onChange} value={props.value}>
          <MenuItem value="選択してください" disabled>
            選択してください
          </MenuItem>
          {props.options.map((value: Options, index: number) => (
            <MenuItem key={index} value={value.id}>
              {value.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};
export default SelectBox;
