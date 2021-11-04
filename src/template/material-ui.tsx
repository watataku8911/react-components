import React, { useCallback, useEffect, useState } from "react";
import TextInput from "../components/material-ui/TextInput";
import SubmitButton from "../components/material-ui/SubmitButton";
import RadioButton from "../components/material-ui/RadioButton";
import SelectBox from "../components/material-ui/SelectBox";

const MaterialUi = () => {
  const [text, setText] = useState<string>("");

  const [detail, setDetail] = useState<string>("");

  const [optionsRadio, setOptionsRadio] = useState<string[]>([]);
  const [valRadio, setValRadio] = useState<string>("");

  const [optionsSelect, setOptionsSelect] = useState<string[]>([]);
  const [valSelect, setValSelect] = useState<string>("");

  useEffect(() => {
    const valueRadio: string[] = ["Vue.js", "React", "Angular", "Svelte"];
    setOptionsRadio(valueRadio);
    const valueSelect: string[] = ["PHP", "Golang", "JavaScript"];
    setOptionsSelect(valueSelect);
  }, [setOptionsRadio]);

  const inputText = useCallback(
    (e) => {
      setText(e.target.value);
    },
    [setText]
  );
  const inputDetail = useCallback(
    (e) => {
      setDetail(e.target.value);
    },
    [setDetail]
  );

  const handleChangeRadio = useCallback(
    (e) => {
      setValRadio((e.target as HTMLInputElement).value);
    },
    [setValRadio]
  );

  const handleChangeSelect = useCallback(
    (e) => {
      setValSelect(e.target.value as string);
    },
    [setValSelect]
  );

  const submit = () => {
    console.log(text + "\n" + detail);
  };
  return (
    <>
      <TextInput
        fullWidth={true}
        label={"テキストボックス"}
        multiline={false}
        required={true}
        onChange={inputText}
        rows={1}
        value={text}
        type={"text"}
        variant={"outlined"}
      />

      <TextInput
        fullWidth={true}
        label={"テキストエリア"}
        multiline={true}
        required={true}
        onChange={inputDetail}
        rows={8}
        value={detail}
        type={"text"}
        variant={"filled"}
      />
      <hr></hr>

      <RadioButton
        label={"ラジオボタン"}
        options={optionsRadio}
        name="radio-button"
        size={"small"}
        color={"primary"}
        onChange={handleChangeRadio}
      />
      <p>選択されたもの：{valRadio}</p>
      <hr></hr>

      <SelectBox
        variant={"standard"}
        label={"プログラミング言語"}
        options={optionsSelect}
        onChange={handleChangeSelect}
      />
      <p>選択されたもの：{valSelect}</p>
      <hr></hr>

      <div className="module--spacing--small"></div>
      <SubmitButton
        color={"secondary"}
        variant={"outlined"}
        onClick={submit}
        label={"ボタン"}
      />
    </>
  );
};
export default MaterialUi;
