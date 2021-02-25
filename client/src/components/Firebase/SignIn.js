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
    <div className="img">
    <div className="login_container">
      {/* <h1 id="login-title">Going Platinum</h1> */}
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="user-box">
            <input
              type="email"
              name="userEmail"
              value={email}
              onChange={(event) => onChangeHandler(event)}
              required
            />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              name="userPassword"
              value={password}
              id="userPassword"
              onChange={(event) => onChangeHandler(event)}
              required
            />
            <label>Password</label>
          </div>
          <a
            onClick={(event) => {
              signInWithEmailAndPasswordHandler(event, email, password);
            }}
            type="submit"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Login
          </a>
        </form>
      </div>
    </div>
    </div>

    // <Button>Sign in with Google</Button>
    // <Grid container>
    //   <Grid item xs>
    //     <Link to="passwordReset" variant="body2">
    //       Forgot password?
    //     </Link>
    //   </Grid>
    //   <Grid item>
    //     <p className="text-center my-3">
    //       Don't have an account?{" "}
    //       <Link to="signUp" className="text-blue-500 hover:text-blue-600">
    //         Sign up here
    //       </Link>{" "}
    //       <br />{" "}
    //     </p>
    //   </Grid>
    // </Grid>
  );
};
export default SignIn;
