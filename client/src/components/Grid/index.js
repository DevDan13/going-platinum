import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Panel from "../Panel/index";
import Grid from "@material-ui/core/Grid";
import Spotify from "../Spotify/Spotify";
import API from "../../utils/API";
import MusicPlayer from "../MusicPlayer/index";

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
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();
  const onTest = () => {
    API.getGenreSeeds();
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Panel className={classes.panel} style>
            <MusicPlayer></MusicPlayer>
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
