import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionActions from "@material-ui/core/AccordionActions";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
// import Chip from "@material-ui/core/Chip";
import Divider from "@material-ui/core/Divider";
// import clsx from "clsx";
import RadioButtons from "../RadioButtons";
import "./style.css";
import API from "../../utils/API";

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
  bigColumn: {
    flexBasis: "100%",
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
    position: "relative",
    fontSize: "20px",
  },
  formItems: {
    marginBottom: 15,
    maxWidth: "75%",
    borderStyle: "solid",
    borderWidth: 3,
    borderColor: "rgba(204, 162, 162)",
    borderRadius: 7,
    backgroundColor: "rgba(0,0,0,0.5)",
    color: "white",
  },
}));

//STYLES FOR THE ACCORDIONS
const Accordion = withStyles({
  root: {
    // background: "rgba(204, 162, 162)",

    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "rgba(204, 162, 162)",
    background: "rgba(250,250,250,0.1)",
    color: "white",
  },
})(MuiAccordion);

export default function ControlledAccordions({ task, onSubmit }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [artistState, setArtists] = React.useState([]);
  const [artistArrayState, setArtistArray] = React.useState([]);
  const [playlistState, setPlaylistState] = React.useState({
    taskName: "",
    playlistName: "",
    duration: "",
  });
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
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
          <div className={classes.bigColumn}>
            <Typography id="heading" style={{ textAlign: "center" }}>
              <AddIcon fontSize="large" style={{ paddingBottom: 5 }}></AddIcon>
              Create New Task
            </Typography>
          </div>
          {/* <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>
              Task Settings
            </Typography>
          </div> */}
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <div className={classes.internalColumn}>
            <form className="formData">
              <Grid
                container
                direction="column"
                justify="space-between"
                alignItems="flex-start"
              >
                {/* <div
                  style={{
                    width: "100%",
                    paddingLeft: 10,
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  }}
                > */}
                {/* <div
                  style={{
                    fontSize: 16,
                    backgroundColor: "rgba(250,250,250,.1)",
                    width: "100%",
                    padding: 10,
                    borderRadius: 5,
                  }}
                > */}
                <Grid item lg={12} className={classes.formLabels}>
                  <label htmlFor="playlist-name">Task Name:</label>
                </Grid>
                <Grid item lg={12}>
                  <input
                    className={classes.formItems}
                    name="task-name"
                    onChange={(event) => {
                      setPlaylistState({
                        ...playlistState,
                        taskName: event.target.value,
                      });
                    }}
                  ></input>
                </Grid>
                <Grid item lg={12} className={classes.formLabels}>
                  <label htmlFor="playlist-name">Playlist Name:</label>
                </Grid>
                <Grid item lg={12}>
                  <input
                    className={classes.formItems}
                    name="playlist-name"
                    onChange={(event) => {
                      setPlaylistState({
                        ...playlistState,
                        playlistName: event.target.value,
                      });
                    }}
                  ></input>
                </Grid>
                <Grid item className={classes.formLabels}>
                  <label htmlFor="artists">Artists:</label>
                </Grid>
                <Grid item xs={9}>
                  <input className={classes.formItems} name="artists"></input>
                </Grid>
                <Grid item xs={3}>
                  <button
                    className="styled-button"
                    style={{ marginBottom: 25, fontSize: "18px" }}
                    onClick={(event) => {
                      event.preventDefault();

                      let search =
                        event.target.parentElement.previousSibling.firstChild
                          .value;

                      console.log("search ", search);
                      API.getArtist(search)
                        .then((res) => {
                          let items = res.data.artists.items;
                          let searchedArtists = [];
                          if (items[0]) {
                            console.log(items[0]);
                            searchedArtists.push(items[0]);
                          } else {
                            console.log("No Artists Available");
                          }
                          if (items[1]) {
                            console.log(items[1]);
                            searchedArtists.push(items[1]);
                          }
                          if (items[2]) {
                            console.log(items[2]);
                            searchedArtists.push(items[2]);
                          }
                          setArtists({
                            ...artistState,
                            artists: searchedArtists,
                          });

                          //items.id
                        })
                        .then(() => {
                          console.log("State", artistState);
                        });
                    }}
                  >
                    Find Artists
                  </button>
                </Grid>
                {/* </div> */}

                <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                >
                  {artistState.artists ? <p>Select:</p> : null}
                  {artistState.artists == null
                    ? null
                    : artistState.artists.map((artist, i) => {
                        return (
                          <Grid
                            item
                            key={i}
                            style={{
                              backgroundColor: "rgba(0,0,0,.2)",
                              width: "100%",
                              display: "flex",
                              justifyContent: "center",
                              marginRight: 10,
                              marginBottom: 10,
                              borderRadius: 10,
                            }}
                          >
                            <button
                              style={{ marginRight: 5, marginBottom: 5 }}
                              className="styled-button"
                              id={artist.id}
                              data-name={artist.name}
                              onClick={(event) => {
                                event.preventDefault();
                                const btnID = event.target.id;

                                const btnName = event.target.dataset.name;

                                setArtistArray((artistArrayState) => [
                                  ...artistArrayState,
                                  { name: btnName, id: btnID },
                                ]);
                                console.log(artistArrayState);
                              }}
                            >
                              {artist.name}
                            </button>
                          </Grid>
                        );
                      })}
                </Grid>
                <Grid
                  container
                  direction="column"
                  justify="flex-start"
                  alignItems="left"
                >
                  {artistArrayState.map((artist, i) => {
                    return (
                      <Grid item key={i}>
                        <a
                          onClick={() => {
                            setArtistArray(
                              artistArrayState.filter((e) => e !== artist)
                            );
                          }}
                        >
                          <div>
                            <p>
                              {artist.name} -{" "}
                              <button className="red-styled-button">
                                {" "}
                                Remove{" "}
                              </button>{" "}
                            </p>
                          </div>
                        </a>
                      </Grid>
                    );
                  })}
                </Grid>

                {/* <div
                  style={{
                    marginTop: 15,
                    backgroundColor: "rgba(250,250,250,.1)",
                    width: "100%",
                    padding: 10,
                    borderRadius: 5,
                  }}
                > */}
                <Grid item className={classes.formLabels}>
                  <label htmlFor="energy">Energy Level:</label>
                </Grid>

                <Grid>
                  <RadioButtons></RadioButtons>
                </Grid>
                {/* </div> */}

                {/* <div
                  style={{
                    marginTop: 15,
                    backgroundColor: "rgba(250,250,250,.1)",
                    width: "100%",
                    padding: 10,
                    borderRadius: 5,
                  }}
                > */}
                <Grid item className={classes.formLabels}>
                  <label htmlFor="duration">
                    Duration in minutes (Max. 300):
                  </label>
                </Grid>

                <Grid item>
                  <input
                    className={classes.formItems}
                    name="duration"
                    onChange={(event) => {
                      setPlaylistState({
                        ...playlistState,
                        duration: event.target.value,
                      });
                    }}
                  ></input>
                </Grid>

                <Grid item className={classes.formLabels}>
                  <button
                    className="styled-button"
                    onClick={async (event) => {
                      event.preventDefault();

                      console.log("playlistState", playlistState);

                      const radioBtns =
                        event.target.parentElement.previousSibling
                          .previousSibling.previousSibling.firstChild;

                      console.log("Radio buttons div: ", radioBtns);
                      let btnSelected;

                      for (
                        var i = 0, length = radioBtns.elements.length;
                        i < length;
                        i++
                      ) {
                        if (radioBtns.elements[i].checked) {
                          // Check what mood was clicked
                          // setPlaylistState({
                          //   ...playlistState,
                          //   mood: radioBtns.elements[i].value,
                          // });
                          btnSelected = radioBtns.elements[i].value;
                          break;
                        }
                      }
                      let data = [artistArrayState, playlistState, btnSelected];
                      onSubmit(data);
                    }}
                    type="submit"
                  >
                    Generate Task
                  </button>
                </Grid>
                {/* </div> */}
              </Grid>
            </form>
          </div>

          {/* <div className={clsx(classes.column, classes.helper)}>
            <Typography variant="caption">
              Change your preferences in the{" "}
              <a href="#secondary-heading-and-columns" className={classes.link}>
                SettingsHey
              </a>{" "}
              menu.
            </Typography>
          </div> */}
        </AccordionDetails>
        {/* <Divider /> */}
        {/* <AccordionActions>
          <button className="red-styled-button">Delete</button>
        </AccordionActions> */}
      </Accordion>
    </div>
  );
}
