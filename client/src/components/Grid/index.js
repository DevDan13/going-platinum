import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Panel from "../Panel/index";
import Grid from "@material-ui/core/Grid";
import Spotify from "../Spotify/Spotify";
import MusicPlayer from "../MusicPlayer/index";
import Accordion from "../Accordion/index";
import "./style.css"
import API from "../../utils/API"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#2b2b2b",
    height: "100%",
  },
  panel: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    overflow:"auto",
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Panel className={classes.panel} style>
            {/* <MusicPlayer></MusicPlayer> */}
            <h2 id="activity-h2">Activities</h2>
            {/* <Accordion></Accordion> */}
            <button onClick={API.getClientCredentialsGrant}>
              Click
            </button>
          </Panel>
        </Grid>
        <Grid item xs={12} md={6}>
          <Panel className={classes.panel}>
            <Spotify></Spotify>
          </Panel>
        </Grid>
      </Grid>
    </div>
  );
}
