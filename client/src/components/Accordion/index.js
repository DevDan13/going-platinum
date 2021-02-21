import React from "react";
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
import RadioButtons from "../../components/RadioButtons";
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

export default function ControlledAccordions({ task, onSubmit }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [artistState, setArtists] = React.useState([]);

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
          <FormControlLabel
            aria-label="Select"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={<Checkbox style={{ color: "rgba(204, 162, 162)" }} />}
          />
          <div className={classes.column}>
            <Typography id="heading">{task.name}</Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>
              Playlist Settings
            </Typography>
          </div>
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
                <Grid item lg={12} className={classes.formLabels}>
                  <label for="playlist-name">Playlist Name</label>
                </Grid>
                <Grid item lg={12}>
                  <input
                    className={classes.formItems}
                    name="playlist-name"
                  ></input>
                </Grid>

                <Grid item className={classes.formLabels}>
                  <label for="artists">Artists</label>
                </Grid>
                <Grid item xs={9}>
                  <input className={classes.formItems} name="artists"></input>
                </Grid>
                <Grid item xs={3}>
                  <button
                    onClick={(event) => {
                      event.preventDefault();
                      let search =
                        event.target.parentElement.previousSibling.firstChild
                          .value;
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
                    Find
                  </button>
                </Grid>
                <Grid item>
                  {artistState.artists == null
                    ? null
                    : artistState.artists.map((artist, i) => {
                        return (
                          <div>
                            <button
                              key={i}
                              onClick={(event) => {
                                event.preventDefault();
                                const btn = event.target;
                              }}
                            >
                              {artist.name}
                            </button>
                          </div>
                        );
                      })}
                </Grid>
                <Grid item className={classes.formLabels}>
                  <label for="mood">Mood</label>
                </Grid>
                <Grid item>
                  <RadioButtons></RadioButtons>
                </Grid>
                <Grid item className={classes.formLabels}>
                  <label for="duration">Duration</label>
                </Grid>
                <Grid item>
                  <input className={classes.formItems} name="duration"></input>
                </Grid>
                <Grid item className={classes.formLabels}>
                  <button
                    onClick={(event) => {
                      event.preventDefault();

                      let radioBtns =
                        event.target.parentElement.previousSibling
                          .previousSibling.previousSibling.firstChild;
                      let formData =
                        event.target.parentElement.parentElement.parentElement
                          .elements;
                      let data = [formData, radioBtns];
                      console.log(data);

                      onSubmit(data);
                    }}
                    type="submit"
                  >
                    Generate Playlist
                  </button>
                </Grid>
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
        <Divider />
        <AccordionActions>
          <button>Delete</button>
        </AccordionActions>
      </Accordion>
    </div>
  );
}
