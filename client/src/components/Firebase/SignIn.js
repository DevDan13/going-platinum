/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { signInWithGoogle, logOut, auth } from "../../firebase";
import {
  FormGroup,
  FormHelperText,
  Button,
  TextField,
  Typography,
  Box,
  Grid,
} from "@material-ui/core";
<<<<<<< HEAD
import "../loginForm/style.css";
=======
import "./SignIn.css";
>>>>>>> 84acf0c0f9f290fa39dfe5507e6ea69baa82aa95

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  let history = useHistory();
  
  const signInWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password).then(history.push("/profile")).catch((error) => {
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
<<<<<<< HEAD
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
=======
  
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
          <button
            onClick={() => {
              signInWithGoogle();
            }}
          >
            Sign in with Google
          </button>
          <button
            onClick={() => {
             logOut();
>>>>>>> 84acf0c0f9f290fa39dfe5507e6ea69baa82aa95
            }}
            type="submit"
          >
<<<<<<< HEAD
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Login
          </a>
        </form>
        <button
          onClick={() => {
            signInWithGoogle();
          }}
        >
          Sign in with Google
        </button>
        <button
          onClick={() => {
            logOut();
          }}
        >
          Signout
        </button>
        <br></br>
        <Link to="passwordReset" variant="body2">
          Forgot password?{" "}
        </Link>
      </div>
    </div>
=======
            Signout 
          </button>
<br></br>
          <Link to="passwordReset" variant="body2">
            Forgot password?
            {" "}
          </Link>
        </div>
    
>>>>>>> 84acf0c0f9f290fa39dfe5507e6ea69baa82aa95

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
