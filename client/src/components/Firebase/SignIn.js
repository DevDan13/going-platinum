import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

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
    <Grid container component="main">
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div>
          <Avatar>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form>
            <TextField
              type="email"
              className="my-1 p-1 w-full"
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
              type="password"
              className="mt-1 mb-3 p-1 w-full"
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
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
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
              Sign In
            </Button>
            <Button>
              Sign in with Google
              </Button>
            <Grid container>
              <Grid item xs>
                <Link to="passwordReset" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <p className="text-center my-3">
                  Don't have an account?{" "}
                  <Link
                    to="signUp"
                    className="text-blue-500 hover:text-blue-600"
                  >
                    Sign up here
                  </Link>{" "}
                  <br />{" "}
                </p>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};
export default SignIn;
