import React from "react";
import Button from "./Button";

import "../../App.css";
import "../../css/Modal.css";

type Props = {
  open: boolean;
  title: string;
  detail: string;
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  handleClose: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

const Modal = (props: Props) => {
  return (
    <>
      {props.open && (
        <div className="overlay" onClick={props.handleClose}>
          <div className="panel">
            <h2>{props.title}</h2>

            <div className="module--spacing--verySmall"></div>

            <div className="modal-contents">
              <p>{props.detail}</p>
            </div>

            <div className="module--spacing--small"></div>

            <Button disabled={false} label={"ボタン"} onClick={props.onClick} />
          </div>
        </div>
      )}
    </>
  );
};
export default Modal;
