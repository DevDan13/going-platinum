import React, { useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionActions from "@material-ui/core/AccordionActions";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
// import Chip from "@material-ui/core/Chip";
import Divider from "@material-ui/core/Divider";
// import clsx from "clsx";
// import RadioButtons from "../../components/RadioButtons";
import API from "../../utils/API";
// import Playlist from "../Playlist";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: "gray",
    marginTop: 10,
  },
  // icon: {
  //   verticalAlign: "bottom",
  //   height: 20,
  //   width: 20,
  // },
  details: {
    alignItems: "center",
  },
  column: {
    flexBasis: "33.33%",
  },
  internalColumn: { flexBasis: "100%", flexGrow: 1 },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  formFields: {
    padding: "10px",
    position: "relative",
    float: "left",
    width: "100%",
  },
  formLabels: {
    paddingTop: "10px",
    paddingBottom: "10px",
    position: "relative",
    fontSize: "20px",
  },
  formItems: {
    width: "200px",
  },
}));

//STYLES FOR THE ACCORDIONS
const Accordion = withStyles({
  root: {
    // background: "rgba(204, 162, 162)",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "rgba(204, 162, 162)",
    background: "#2b2b2b;",
    color: "white",
  },
})(MuiAccordion);

export default function ControlledAccordions({ task, delBtn, playBtn }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [taskState, setTaskState] = React.useState({});
  // const [artistState, setArtists] = React.useState([]);
  // const [artistArrayState, setArtistArray] = React.useState([]);
  // const [playlistState, setPlaylistState] = React.useState({
  //   playlistName: "",
  //   mood: "",
  //   duration: "",
  // });
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    getTask(task);
  }, []);
  const getTask = (taskID) => {
    API.getTaskById(taskID).then((res) => {
      //Get Task Set State
      setTaskState({
        ...taskState,
        task: res.data,
      });
    });
  };

  return (
    <div className="container">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon style={{ color: "rgba(204, 162, 162)" }} />
          }
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <FormControlLabel
            aria-label="Select"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={<Checkbox style={{ color: "rgba(204, 162, 162)" }} />}
          />
          <div className={classes.column}>
            <Typography id="heading">
              {taskState.task ? taskState.task.name : null}
            </Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>
              Playlist Settings
            </Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <Grid
            container
            direction="column"
            justify="space-between"
            alignItems="flex-start"
          >
            <h1>{taskState.task ? taskState.task.playlistName : null}</h1>
            {taskState.task
              ? taskState.task.tracks.map((track, i) => {
                  return (
                    <Grid item key={i}>
                      <p>
                        {track.name} - by {track.artists[0].name}
                      </p>
                    </Grid>
                  );
                })
              : null}
          </Grid>
        </AccordionDetails>
        <Divider />
        <AccordionActions>
          <button>Add to Spotify to Play</button>
          <button
            onClick={(event) => {
              event.preventDefault();
              playBtn(taskState.task.tracks);
            }}
          >
            Play Playlist
          </button>
          <button
            onClick={(event) => {
              event.preventDefault();
              delBtn(taskState.task._id);
            }}
          >
            Delete
          </button>
        </AccordionActions>
      </Accordion>
    </div>
  );
}