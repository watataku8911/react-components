import React from "react";
import "../../css/UIKit.css";

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const InputFile = (props: Props) => {
  return (
    <label className="label">
      画像を設定する
      <input
        type="file"
        className="file_input"
        id="corporation_file"
        accept="image/*"
        onChange={props.onChange}
      />
    </label>
  );
};
export default InputFile;
