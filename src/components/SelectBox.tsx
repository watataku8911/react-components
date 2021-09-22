import React from "react";

type Props = {
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const SelectBox = (props: Props) => {
  return (
    <label>
      <select name="select-box" onChange={props.onChange}>
        <option value="選択してください。">選択してください。</option>
        {props.options.map((item: string, index: number) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
  );
};
export default SelectBox;
