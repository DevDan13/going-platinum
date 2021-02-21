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
// import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import Divider from "@material-ui/core/Divider";
import clsx from "clsx";
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
  internalColumn: { flexBasis: "50%" },
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
    inputFields: {
      float: "left",
      marginTop: "5px",
    },
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

export default function ControlledAccordions({ task }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

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
              View Settings
            </Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <div className={classes.internalColumn}>
            <form>
              <label for="playlist-name">Playlist Name</label>
              <input
                className={classes.inputFields}
                name="playlist-name"
              ></input>
              <label for="artists">Artists</label>
              <input className={classes.inputFields} name="artists"></input>
              <button>Search</button>
              <label for="mood">Mood</label>
              <button type="radio">Angry</button>
              <label for="duration">Duration</label>
              <input className={classes.inputFields} name="duration"></input>
            </form>
          </div>
          <div className={classes.internalColumn}></div>

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
