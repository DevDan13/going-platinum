/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { signInWithGoogle, logOut, auth } from "../../firebase";
import Grid from "@material-ui/core/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GoogleBtn from "../GoogleBtn/index";
import "./SignIn.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  let history = useHistory();

  const signInWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(history.push("/profile"))
      .catch((error) => {
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
          className="submit-button"
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

      {/* <button
        onClick={() => {
          logOut();
        }}
      >
        Signout
      </button> */}

      {/* <br></br> */}

      <Grid style={{position: "absolute", right: 40, top: 220}} item xs={12}>
        <Link to="passwordReset" variant="body2" style={{color: "pink"}}>
          Forgot password?{" "}
        </Link>
      </Grid>

      <Grid style={{display: "flex", justifyContent: "center", paddingTop: 60}}item xs={12}>
        
        {/* <button
          onClick={() => {
            signInWithGoogle();
          }}
        >
          
          Sign in with Google
        </button> */}
      <GoogleBtn></GoogleBtn>
      </Grid>


    </div>

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
