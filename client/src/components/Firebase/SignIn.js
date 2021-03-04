/* eslint-disable jsx-a11y/anchor-is-valid */
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { signInWithGoogle, logOut, auth } from "../../firebase";
import Grid from "@material-ui/core/Grid";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Button from "react-bootstrap/Button";
import GoogleBtn from "../GoogleBtn/index";
import "./SignIn.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [showPopover1, setShowPopover1] = useState(false);
  const [popover1Text, setPopover1Text] = useState("");

  let history = useHistory();

  const signInWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => history.push("/profile"))
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;

        if (errorCode === "auth/wrong-password") {
          setPopover1Text("Invalid password.");
          setShowPopover1(true);
        } else if (errorCode === "auth/user-not-found") {
          setPopover1Text("User not found.");
          setShowPopover1(true);
        } else if (errorCode === "auth/invalid-email") {
          setPopover1Text("Invalid email.");
          setShowPopover1(true);
        } else {
          alert(errorMessage);
        }

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

  auth.onAuthStateChanged(function (currentUser) {
    if (currentUser) {
      history.push("/profile");
    }
  });

  const popover = (
    <Popover
      id="popover-basic"
      style={{
        marginTop: 50,
        borderWidth: 1,
        borderColor: "white",
        borderStyle: "solid",
      }}
    >
      <Popover.Title
        as="h3"
        style={{
          backgroundColor: "rgba(150, 32, 32, 0.85)",
          color: "white",
        }}
      >
        Alert
      </Popover.Title>
      <Popover.Content
        style={{ backgroundColor: "rgba(181, 45, 45, 0.85)", color: "white" }}
      >
        {popover1Text}
      </Popover.Content>
    </Popover>
  );

  // const Example = () => (
  //   <OverlayTrigger trigger="click" placement="right" overlay={popover}>
  //     <Button variant="success">Click me to see</Button>
  //   </OverlayTrigger>
  // );

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
          <Link
            id="forgot-password"
            to="passwordReset"
            variant="body2"
            style={{ color: "pink" }}
          >
            Forgot password?{" "}
          </Link>
        </div>

        <OverlayTrigger
          rootClose="click"
          trigger="click"
          placement="bottom"
          overlay={popover}
          show={showPopover1}
        >
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
        </OverlayTrigger>
      </form>

      <Grid
        style={{ display: "flex", justifyContent: "center", paddingTop: 75 }}
        item
        xs={12}
      >
        <GoogleBtn
          onClick={() => {
            signInWithGoogle();
          }}
        >
          Sign in with Google
        </GoogleBtn>
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
