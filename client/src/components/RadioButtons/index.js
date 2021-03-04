import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";

export default function FormControlLabelPlacement() {
  return (
    <FormControl component="fieldset">
      <RadioGroup id="radio-group" row aria-label="position" name="position" defaultValue="">
        <Grid item xs={12} sm={3} style={{maxWidth: "20%"}}>
          <FormControlLabel
            value="0.1"
            control={<Radio color="primary" />}
            label="1 (Low)"
            labelPlacement="top"
            style={{color:"white"}}
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <FormControlLabel
            value="0.3"
            control={<Radio color="primary" />}
            label="2"
            labelPlacement="top"
            style={{paddingRight:0}}
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <FormControlLabel
            value="0.5"
            control={<Radio color="primary" />}
            label="3"
            labelPlacement="top"
            style={{paddingRight:50}}
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <FormControlLabel
            value="0.7"
            control={<Radio color="primary" />}
            label="4"
            labelPlacement="top"
            style={{paddingRight:50}}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <FormControlLabel
            value="0.9"
            control={<Radio color="primary" />}
            label="5 (High)"
            labelPlacement="top"
            style={{padding: 0}}
          />
        </Grid>
      </RadioGroup>
    </FormControl>
  );
}
