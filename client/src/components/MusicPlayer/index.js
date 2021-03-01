import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import IconButton from "@material-ui/core/IconButton";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import Grid from "@material-ui/core/Grid";
import "./style.css";
import { makeStyles } from "@material-ui/core/styles";
import { Icon } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  iconBtn: {
    color: "pink",
  },
  icon: {
    backgroundColor: "black",
    borderRadius: 25,
    borderColor: "pink",
    borderStyle: "solid",
  },
}));

function MusicPlayer({ setToPlay, setToPause, image, setNext, setPrevious }) {
  const classes = useStyles();

  return (
    <Grid container id="music-player-div">
      <Grid container id="image-container">
        <Grid item xs={12} id="player-image">
          <img src={image} alt="placeholder"></img>
        </Grid>

        {/* PREVIOUS BUTTON */}
        <Grid container id="player-container">
          <Grid item xs={2} className="player-button-div" id="skip-prev-btn">
            <IconButton
              className={classes.iconBtn}
              aria-label="skip-previous"
              // onclick = spotify api call to skip previous
              onClick={setPrevious}
            >
              <SkipPreviousIcon
                className={classes.icon}
                fontSize="large"
              ></SkipPreviousIcon>
            </IconButton>
          </Grid>

          {/* PLAY BUTTON */}
          <Grid item xs={2} className="player-button-div" id="play-btn">
            <IconButton
              className={classes.iconBtn}
              aria-label="play"
              component="span"
              onClick={setToPlay}
              // onclick = spotify api call to start/resume playback
            >
              <PlayArrowIcon
                className={classes.icon}
                fontSize="large"
              ></PlayArrowIcon>
            </IconButton>
          </Grid>

          {/* PAUSE BUTTON */}
          <Grid item xs={2} className="player-button-div" id="play-btn">
            <IconButton
              className={classes.iconBtn}
              aria-label="play"
              component="span"
              onClick={setToPause}
              // onclick = spotify api call to start/resume playback
            >
              <PauseIcon
                className={classes.icon}
                fontSize="large"
                color="inherit"
              ></PauseIcon>
            </IconButton>
          </Grid>

          {/* SKIP BUTTON */}
          <Grid item xs={2} className="player-button-div">
            <IconButton
              className={classes.iconBtn}
              aria-label="skip-next"
              component="span"
              // onclick = spotify api call to skip next
              onClick={setNext}
            >
              <SkipNextIcon
                className={classes.icon}
                fontSize="large"
              ></SkipNextIcon>
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default MusicPlayer;
