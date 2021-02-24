import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import {
  FormGroup,
  FormHelperText,
  Button,
  TextField,
  Typography,
  Box,
  Grid,
} from "@material-ui/core";
import "../LoginForm/style.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const signInWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password).catch((error) => {
      setError("Error signing in with password and email!");
      console.error("Error signing in with password and email", error);
    });
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    }
  };

  return (
    <Grid className="img">
      <Box>
        <Typography id="login-title" component="h1" variant="h5">
          Going platinum
        </Typography>
      </Box>
      <Box className="login-box">
        <FormGroup>
          <FormHelperText>Email</FormHelperText>
          <TextField
            className="login-box"
            type="email"
            name="userEmail"
            value={email}
            placeholder="Email Address"
            id="userEmail"
            onChange={(event) => onChangeHandler(event)}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            autoComplete="email"
            autoFocus
          />
          <TextField
            className="login-box"
            type="password"
            name="userPassword"
            value={password}
            placeholder="Your Password"
            id="userPassword"
            onChange={(event) => onChangeHandler(event)}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            autoComplete="current-password"
          />
          <Button
            className="bg-green-400 hover:bg-green-500 w-full py-2 text-white"
            onClick={(event) => {
              signInWithEmailAndPasswordHandler(event, email, password);
            }}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Login
          </Button>
          <Button>Sign in with Google</Button>
          <Grid container>
            <Grid item xs>
              <Link to="passwordReset" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <p className="text-center my-3">
                Don't have an account?{" "}
                <Link to="signUp" className="text-blue-500 hover:text-blue-600">
                  Sign up here
                </Link>{" "}
                <br />{" "}
              </p>
            </Grid>
          </Grid>
        </FormGroup>
      </Box>
    </Grid>
  );
};
export default SignIn;
