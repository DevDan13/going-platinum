import React from "react";
import Form from "../../components/loginForm/Form";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

function Login() {
  return (
    <div>
      <Paper>
        <div className="img">
          <Form />
        </div>
      </Paper>
    </div>
  );
}

export default Login;
