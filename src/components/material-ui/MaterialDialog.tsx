import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

type Props = {
  open: boolean;
  handleClose: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  title: string;
  detail: string;
  color: "primary" | "secondary" | undefined;
  submit: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

const MaterialDialog = (props: Props) => {
  return (
    <Dialog open={props.open} onClose={props.handleClose}>
      <DialogTitle>{props.title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {props.detail}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} color={props.color}>
          Disagree
        </Button>
        <Button onClick={props.submit} color={props.color} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default MaterialDialog;
