import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
import { createStyles } from "@material-ui/core";

type Props = {
  color: "primary" | "secondary" | undefined;
  variant: "text" | "outlined" | "contained" | undefined;
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  label: string;
};

const useStyles = makeStyles((theme) =>
  createStyles({
    button: {
      fontSize: 16,
      height: 48,
      marginBottom: 16,
      width: 256,
    },
  })
);

const SubmitButton = (props: Props) => {
  const classes = useStyles();

  return (
    <Button
      className={classes.button}
      color={props.color}
      variant={props.variant}
      onClick={props.onClick}
    >
      {props.label}
    </Button>
  );
};

export default SubmitButton;
