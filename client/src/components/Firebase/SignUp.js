import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import API from "../../utils/API";
import { auth, generateUserDocument } from "../../firebase";
import Grid from "@material-ui/core/Grid";
import GoogleBtn from "../GoogleBtn/index";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import "./SignUp.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState(null);
  const [showPopover2, setShowPopover2] = useState(false);
  const [popover2Text, setPopover2Text] = useState("");

  let history = useHistory();

  const createUserWithEmailAndPasswordHandler = async (
    event,
    email,
    password
  ) => {
    event.preventDefault();
    try {
      const { user } = await auth
        .createUserWithEmailAndPassword(email, password)
        .then((result) => {
          console.log(result);
          API.createUser({
            email: result.user.email,
            name: displayName,
            firebaseId: result.user.uid,
          }).then(history.push("/profile"));
        });
      generateUserDocument(user, { displayName });
    } catch (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      
      if (errorCode === "auth/email-already-in-use") {
        setPopover2Text("Email already in use.");
        setShowPopover2(true);
      } else if (errorCode === "auth/invalid-email") {
        setPopover2Text("Invalid email.");
        setShowPopover2(true);
      } else if (errorCode === "auth/weak-password") {
        setPopover2Text("The password is too weak.");
        setShowPopover2(true);
      } else {
        alert(errorMessage);
      }
    }
    setEmail("");
    setPassword("");
    setDisplayName("");
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;
    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    } else if (name === "displayName") {
      setDisplayName(value);
    }
  };

  // const handleUser =  () => {
  //   API.createUser({
  //     email: email,
  //     name: displayName || null,
  //     // firebaseId: user.uid,
  //   }).then(history.push("/profile"));
  // };

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
        {popover2Text}
      </Popover.Content>
    </Popover>
  );

  return (
    <div className="login-box">
      <h2>Signup</h2>
      <form>
        <div className="user-box">
          <input
            type="text"
            name="displayName"
            value={displayName}
            id="displayName"
            required
            onChange={(event) => onChangeHandler(event)}
          />
          <label>Username</label>
        </div>
        <div className="user-box">
          <input
            type="email"
            id="userEmail"
            name="userEmail"
            value={email}
            required
            onChange={(event) => onChangeHandler(event)}
          />
          <label htmlFor="email">Email</label>
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

        <Grid
          style={{ display: "flex", justifyContent: "center" }}
          item
          xs={12}
        >
          <GoogleBtn>Sign up with Google</GoogleBtn>
        </Grid>
        
        <OverlayTrigger
          rootClose="click"
          trigger="click"
          placement="bottom"
          overlay={popover}
          show={showPopover2}
        >

        <a
          className="submit-button"
          onClick={(event) => {
            createUserWithEmailAndPasswordHandler(event, email, password);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Sign Up
        </a>
        </OverlayTrigger>
      </form>
    </div>
    /* <p className="text-center my-3">or</p>
        <button className="bg-red-500 hover:bg-red-600 w-full py-2 text-white">
          Sign In with Google
        </button>
        <p className="text-center my-3">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:text-blue-600">
            Sign in here
          </Link>
        </p>
      </div>
    </div> */
  );
};
export default SignUp;
