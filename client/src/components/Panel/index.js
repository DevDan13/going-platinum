import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    overflow: "hidden",
    flexWrap: "noWrap",
    "& > *": {
      margin: theme.spacing(7),
      width: "100%",
      height: theme.spacing(50),
      paddingBottom: theme.spacing(14.5),
    },
  },
}));

export default function Panel(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper style={{ backgroundColor: "#4a4a4a" }} elevation={3}>
        {props.children}
      </Paper>
    </div>
  );
}
