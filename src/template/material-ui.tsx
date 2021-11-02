import React, { useCallback, useState } from "react";
import TextInput from "../components/material-ui/TextInput";
//import SelectBox from "../components/material-ui/SelectBox";

const MaterialUi = () => {
  const [text, setText] = useState<string>("");
  const [detail, setDetail] = useState<string>("");

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
          label={"カテゴリー"}
          options={categories}
          required={true}
          select={setCategory}
          value={category}
        /> */}
    </>
  );
};
export default MaterialUi;
