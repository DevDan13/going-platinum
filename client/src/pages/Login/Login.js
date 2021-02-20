import React from "react";
import FormControl from "@material-ui/core/FormControl";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LoginForm from "../../components/LoginForm/Form"

function Login() {
  return (
    <div>
      <div className="img">
        <LoginForm></LoginForm>
        {/* <Paper>
          <FormControl />
        </Paper> */}
      </div>
    </div>
  );
}

export default Login;
