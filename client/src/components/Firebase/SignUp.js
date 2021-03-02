/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { signInWithGoogle, auth, generateUserDocument } from "../../firebase";
import GoogleBtn from "../GoogleBtn/index";
import "./SignUp.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState(null);

  const createUserWithEmailAndPasswordHandler = async (
    event,
    email,
    password
  ) => {
    event.preventDefault();
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      generateUserDocument(user, { displayName });
    } catch (error) {
      setError("Error Signing up with email and password");
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
