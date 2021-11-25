import React from "react";
import SubmitButton from "../../components/mui/SubmitButton";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

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
        <SubmitButton
          disabled={false}
          color={"secondary"}
          variant={undefined}
          onClick={props.handleClose}
          label={"Disagree"}
        />
        <SubmitButton
          disabled={false}
          color={"secondary"}
          variant={undefined}
          onClick={props.submit}
          label={"Agree"}
        />
      </DialogActions>
    </Dialog>
  );
};
export default MaterialDialog;
