import React, { useCallback, useEffect, useState } from "react";
import TextInput from "../components/TextInput";
import TextDetail from "../components/TextDetail";
import RadioButton from "../components/RadioButton";
import CheckBox from "../components/CheckBox";
import Button from "../components/Button";

const UIKit = () => {
  const [text, setText] = useState<string>("");
  const [detail, setDetail] = useState<string>("");
  const [checked, setChecked] = useState<boolean>(false);
  const [options, setOptions] = useState<string[]>([]);
  const [val, setVal] = useState<string>("");

  useEffect(() => {
    const value = ["cat", "dog"];
    setOptions(value);
  }, [setOptions]);

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

  const submit = useCallback(() => {
    alert("submitしました");
  }, []);

  const handleChange = useCallback((e) => {
    setVal(e.target.value);
  }, []);

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
      <RadioButton options={options} onChange={handleChange} />
      <p>選択されたもの：{val}</p>
      <CheckBox
        label={"I checked all input information."}
        name={"agree"}
        checked={checked}
        onChange={changeDisabled}
      />
      <div className="module--spacing--small"></div>
      <Button label={"ボタン"} disabled={!checked} onClick={submit} />
    </div>
  );
};
export default UIKit;
