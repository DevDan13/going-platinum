import React from "react";
import { Button, FormHelperText, FormControl, Grid } from "@material-ui/core";
import CssTextField from "../InputField/index";
import Paper from "@material-ui/core/Paper"
import "./style.css";

function Form() {
  return (
    <Paper>
      <FormControl className="all login ">
        <FormHelperText className="title">Log In</FormHelperText>

        <Grid item xs={10}>
          <CssTextField
            className="text-field"
            id="custom-css-standard-input"
            label="Name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={10}>
          <CssTextField
            className="text-field"
            id="custom-css-standard-input"
            label="Name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={10}>
          <CssTextField
            className="text-field"
            id="custom-css-standard-input"
            label="Name"
            variant="outlined"
          />
        </Grid>
        {/* <Row className="signup">
                    <Col>
                        <h2 className="title">Create a new account</h2>
                        <div className="sign">
                            <div className="email">
                                <label for="email-input" className="form-label"
                                >Email address</label
                                >
                                <input
                                    type="email"
                                    className="form-control"
                                    className="email-input"
                                    placeholder=" Email"
                                />
                            </div>
                            <div className="username">
                                <label for="inputUsername" className="form-label">Username</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    className="username-input"
                                    placeholder="Username"
                                />
                            </div>
                            <div className="password">
                                <label for="inputPassword" className="form-label"
                                >Password</label
                                >
                                <input
                                    type="password"
                                    className="form-control"
                                    className="password-input"
                                    placeholder="Password"
                                />
                            </div>
                            <button className="signupBtn" className="btn btn-primary">Register</button>
                        </div>
                    </Col>
                </Row> */}
      </FormControl>
    </Paper>
  );
}

export default Form;
