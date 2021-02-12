import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import IconButton from "@material-ui/core/IconButton";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import Grid from "@material-ui/core/Grid";
import "./style.css";
import { Icon } from "@material-ui/core";

function MusicPlayer() {
  return (
    <Grid container>
      <Grid container id="image-container">
        <Grid item xs={12} id="player-image">
          <img src="https://via.placeholder.com/300" alt="placeholder"></img>
        </Grid>
        <Grid container id="player-container">
          <Grid item xs={2} className="player-button" id="skip-prev-btn">

            <IconButton
              aria-label="skip-previous"
              // onclick = spotify api call to skip previous
            >
              <SkipPreviousIcon></SkipPreviousIcon>
            </IconButton>

          </Grid>
          <Grid item xs={2} className="player-button" id="play-btn">

            <IconButton
              aria-label="play"
              // onclick = spotify api call to start/resume playback
            >
              <PlayArrowIcon></PlayArrowIcon>
            </IconButton>

          </Grid>
          <Grid item xs={2} className="player-button">

            <IconButton
              aria-label="skip-next"
              // onclick = spotify api call to skip next
            >
              <SkipNextIcon></SkipNextIcon>
            </IconButton>
            
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default MusicPlayer;
