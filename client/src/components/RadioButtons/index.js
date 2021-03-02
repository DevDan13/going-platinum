import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

export default function FormControlLabelPlacement() {
  return (
    <FormControl component="fieldset">
      <RadioGroup row aria-label="position" name="position" defaultValue="">
        <FormControlLabel
          value="0.1"
          control={<Radio color="primary" />}
          label="Low"
          labelPlacement="top"
        />
        <FormControlLabel
          value="0.3"
          control={<Radio color="primary" />}
          label="Medium-Low"
          labelPlacement="top"
        />
        <FormControlLabel
          value="0.5"
          control={<Radio color="primary" />}
          label="Medium"
          labelPlacement="top"
        />
        <FormControlLabel
          value="0.7"
          control={<Radio color="primary" />}
          label="Medium-High"
          labelPlacement="top"
        />
        <FormControlLabel
          value="1"
          control={<Radio color="primary" />}
          label="High"
          labelPlacement="top"
        />
      </RadioGroup>
    </FormControl>
  );
}
