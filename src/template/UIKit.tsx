import React, { useCallback, useEffect, useState } from "react";
import TextInput from "../components/TextInput";
import TextDetail from "../components/TextDetail";
import RadioButton from "../components/RadioButton";
import CheckBox from "../components/CheckBox";
import SelectBox from "../components/SelectBox";
import Button from "../components/Button";

const UIKit = () => {
  const [text, setText] = useState<string>("");
  const [detail, setDetail] = useState<string>("");
  const [checked, setChecked] = useState<boolean>(false);
  const [optionsRadio, setOptionsRadio] = useState<string[]>([]);
  const [valRadio, setValRadio] = useState<string>("");
  const [optionsSelect, setOptionsSelect] = useState<string[]>([]);
  const [valSelect, setValSelect] = useState<string>("");

  useEffect(() => {
    const valueRadio: string[] = ["cat", "dog"];
    setOptionsRadio(valueRadio);
    const valueSelect: string[] = ["Vue.js", "React", "Svelte", "Angular"];
    setOptionsSelect(valueSelect);
  }, [setOptionsRadio, setOptionsSelect]);

  const inputText = useCallback(
    (event) => {
      setText(event.target.value);
    },
    [setText]
  );

  const inputDetail = useCallback(
    (e) => {
      setDetail(e.target.value);
    },
    [setDetail]
  );

  const changeDisabled = useCallback(() => {
    setChecked(!checked);
  }, [checked]);

  const handleChangeRadio = useCallback(
    (e) => {
      setValRadio(e.target.value);
    },
    [setValRadio]
  );

  const handleChangeSelect = useCallback(
    (e) => {
      setValSelect(e.target.value);
    },
    [setValSelect]
  );

  const submit = useCallback(() => {
    alert("submitしました");
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

      <RadioButton options={optionsRadio} onChange={handleChangeRadio} />
      <p>選択されたもの：{valRadio}</p>
      <hr></hr>

      <SelectBox options={optionsSelect} onChange={handleChangeSelect} />
      <p>選択されたもの：{valSelect}</p>
      <hr></hr>

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
