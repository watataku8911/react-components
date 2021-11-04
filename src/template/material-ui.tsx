import React, { useCallback, useEffect, useState } from "react";
import TextInput from "../components/material-ui/TextInput";
import SubmitButton from "../components/material-ui/SubmitButton";
import RadioButton from "../components/material-ui/RadioButton";
// import SelectBox from "../components/material-ui/SelectBox";
import MaterialCheckbox from "../components/material-ui/MaterialCheckBox";

const MaterialUi = () => {
  const [text, setText] = useState<string>("");

  const [detail, setDetail] = useState<string>("");

  // const [optionsSelect, setOptionsSelect] = useState<string[]>([]);
  // const [valSelect, setValSelect] = useState<string>("");

  const [checked, setChecked] = useState<boolean>(false);

  const [optionsRadio, setOptionsRadio] = useState<string[]>([]);
  const [valRadio, setValRadio] = useState<string>("");

  useEffect(() => {
    const valueRadio: string[] = ["Vue.js", "React", "Angular", "Svelte"];
    setOptionsRadio(valueRadio);
    // const valueSelect: string[] = ["PHP", "Golang", "JavaScript"];
    // setOptionsSelect(valueSelect);
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

  // const handleChangeSelect = useCallback(
  //   (e) => {
  //     setValSelect(e.target.value);
  //   },
  //   [setValSelect]
  // );

  const changeDisabled = useCallback(() => {
    setChecked(!checked);
  }, [checked]);

  const submit = () => {
    console.log("submit");
  };

  const handleChangeRadio = useCallback(
    (e) => {
      setValRadio((e.target as HTMLInputElement).value);
    },
    [setValRadio]
  );

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

      {/* <SelectBox
        variant={"standard"}
        label={"プログラミング言語"}
        options={optionsSelect}
        onChange={handleChangeSelect}
      />
      <p>選択されたもの：{valSelect}</p>
      <hr></hr> */}

      <MaterialCheckbox
        checked={checked}
        onChange={changeDisabled}
        name={"checkbox"}
        color={"primary"}
        label={"I checked all input information."}
      />
      <div className="module--spacing--verySmall"></div>

      <SubmitButton
        disabled={!checked}
        color={"secondary"}
        variant={"outlined"}
        onClick={submit}
        label={"ボタン"}
      />
      <div className="module--spacing--verySmall"></div>
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
      <p>
        <a href="https://v4.mui.com/">あとはこれをみろ</a>
      </p>
    </>
  );
};
export default MaterialUi;
