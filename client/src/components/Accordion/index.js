import React from "react";
import { makeStyles, withStyles} from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import "./style.css"

const Accordion = withStyles({
  root: {
    background: "rgba(204, 162, 162, 0.7);",
    color:"white"
  }
})(MuiAccordion);

export default function ControlledAccordions({task}) {
  // const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="accordion">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          // className={classes.header}
        >
          <FormControlLabel
            aria-label="Select"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={<Checkbox />}
            label={task.name}
          />
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Mood:{task.mood}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
