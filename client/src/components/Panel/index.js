import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import "./style.css"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    overflow: "hidden",
    flexWrap: "noWrap",
    "& > *": {
      // margin: theme.spacing(3),
      width: "100%",
      height: theme.spacing(65),
      paddingBottom: 80,
      marginBottom: 50
    },
  },
}));

export default function Panel(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className="panel" style={{ background: "rgba(0, 0, 0, 0.8"}} elevation={3}>
        {props.children}
      </Paper>
    </div>
  );
}
