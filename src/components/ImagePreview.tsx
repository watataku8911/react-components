import React from "react";
import "../css/ImagePreview.css";

type Props = {
  fileUrl: string;
};
const ImagePreview = (props: Props) => {
  return (
    <div className="imagePreview">
      <img src={props.fileUrl} width="50" height="50" alt={props.fileUrl} />
    </div>
  );
};
export default ImagePreview;
