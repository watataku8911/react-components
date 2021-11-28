import React, { useState, useCallback } from "react";
import TextInput from "../components/mui/TextInput";
import SubmitButton from "../components/mui/SubmitButton";
import MaterialCheckbox from "../components/mui/MaterialCheckBox";
import MaterialDialog from "../components/mui/MaterialDialog";
import SelectBox from "../components/mui/SelectBox";
import RadioButton from "../components/mui/RadioButton";

const Mui = () => {
  const [text, setText] = useState<string>("");
  const [passwd, setPasswd] = useState<string>("");
  const [detail, setDetail] = useState<string>("");

  const [checked, setChecked] = useState<boolean>(false);

  const [open, setOpen] = useState<boolean>(false);

  const genders = [
    { id: "all", name: "すべて" },
    { id: "male", name: "メンズ" },
    { id: "female", name: "レディース" },
  ];
  const [gender, setGender] = useState<string>("");

  const javascript = [
    { id: "vuejs", name: "Vue.js" },
    { id: "react", name: "React" },
    { id: "angular", name: "Angular" },
  ];
  const [valRadio, setValRadio] = useState<string>("");

  const inputText = useCallback(
    (e) => {
      setText(e.target.value);
    },
    [setText]
  );
  const inputPasswd = useCallback(
    (e) => {
      setPasswd(e.target.value);
    },
    [setPasswd]
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

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, [setOpen]);
  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);
  const submit = useCallback(() => {
    alert("submit");
    setOpen(false);
  }, []);

  const handleChangeSelect = useCallback(
    (e) => {
      setGender(e.target.value as string);
    },
    [setGender]
  );

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
        fullWidth={false}
        label={"パスワード"}
        multiline={false}
        required={true}
        onChange={inputPasswd}
        rows={1}
        value={passwd}
        type={"password"}
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
        onClick={handleOpen}
        label={"ダイアログが出ます。"}
      />
      <MaterialDialog
        open={open}
        handleClose={handleClose}
        title={"これはダイアログです"}
        detail={
          "これはダイアログです。これはダイアログです。これはダイアログです。これはダイアログです。これはダイアログです。これはダイアログです。これはダイアログです。これはダイアログです。これはダイアログです。"
        }
        color={"primary"}
        submit={submit}
      />

      <p>
        <a href="https://mui.com/" target="_blank" rel="noreferrer">
          あとはこれをみろ。（マニュアル）
        </a>
      </p>
      <SelectBox
        fullWidth={true}
        variant={"standard"}
        label={"性別"}
        options={genders}
        onChange={handleChangeSelect}
        value={gender}
      />
      <p>選択されたもの：{gender}</p>
      <RadioButton
        label={"ラジオボタン"}
        options={javascript}
        row={true}
        name="radio-button"
        size={"small"}
        color={"primary"}
        onChange={handleChangeRadio}
      />
      <p>選択されたもの：{valRadio}</p>
    </>
  );
};
export default Mui;
