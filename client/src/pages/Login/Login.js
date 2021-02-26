import React from "react";
import FormControl from "@material-ui/core/FormControl";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LoginForm from "../../components/LoginForm/Form";
import "./style.css";

function Login() {
  return (
    <div className="img">
      <h1
        style={{
          fontFamily: "Concert One",
          marginTop: 0,
          paddingTop: 75,
          paddingBottom: 25,
          color: "white",
          fontSize: 50,
        }}
      >
        Going Platinum
      </h1>

      <LoginForm></LoginForm>
    </div>
  );
}

export default Login;
