import React, { useCallback, useState } from "react";
import TextInput from "../components/TextInput";

const UIKit = () => {
  const [text, setText] = useState<string>("");

  const inputText = useCallback(
    (event) => {
      setText(event.target.value);
    },
    [setText]
  );

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
    </div>
  );
};
export default UIKit;
