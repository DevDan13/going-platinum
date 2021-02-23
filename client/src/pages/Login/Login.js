import React from "react";
import FormControl from "@material-ui/core/FormControl";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LoginForm from "../../components/Firebase/LoginForm/Form";
import "./style.css";

function Login() {
  return (
    <div className="img">
      <LoginForm></LoginForm>
    </div>
  );
}

export default Login;
