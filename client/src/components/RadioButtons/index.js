import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

export default function FormControlLabelPlacement() {
  return (
    <FormControl component="fieldset">
      <RadioGroup row aria-label="position" name="position" defaultValue="top">
        <FormControlLabel
          value="top"
          control={<Radio color="primary" />}
          label="Top"
          labelPlacement="top"
        />
        <FormControlLabel
          value="Medium"
          control={<Radio color="primary" />}
          label="Medium"
          labelPlacement="top"
        />
        <FormControlLabel
          value="Fast"
          control={<Radio color="primary" />}
          label="Fast"
          labelPlacement="top"
        />
        <FormControlLabel
          value="Sad"
          control={<Radio color="primary" />}
          label="Sad"
          labelPlacement="top"
        />
        <FormControlLabel
          value="Happy"
          control={<Radio color="primary" />}
          label="Happy"
          labelPlacement="top"
        />
      </RadioGroup>
    </FormControl>
  );
}
