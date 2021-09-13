import React, { useCallback, useState } from "react";
import TextInput from "../components/TextInput";
import TextDetail from "../components/TextDetail";
import CheckBox from "../components/CheckBox";

const UIKit = () => {
  const [text, setText] = useState<string>("");
  const [detail, setDetail] = useState<string>("");
  const [checked, setChecked] = useState(false);

  const inputText = useCallback(
    (event) => {
      setText(event.target.value);
    },
    [setText]
  );
  const inputDetail = useCallback(
    (event) => {
      setDetail(event.target.value);
    },
    [setDetail]
  );
  const changeDisabled = useCallback(() => {
    setChecked(!checked);
  }, [checked]);

  return (
    <div className="uikit">
      <TextInput
        type={"text"}
        name={"text"}
        placeholder={"テキストボックス"}
        value={text}
        onChange={inputText}
      />
      <div className="module--spacing--small"></div>
      <TextDetail
        name={"textarea"}
        placeholder={"テキストエリアです。"}
        cols={76}
        rows={5}
        value={detail}
        onChange={inputDetail}
      />
      <CheckBox
        label={"I checked all input information."}
        name={"agree"}
        checked={checked}
        onChange={changeDisabled}
      />
      <div className="module--spacing--small"></div>
    </div>
  );
};
export default UIKit;
