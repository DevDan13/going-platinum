import "./style.css";
import SignUp from "../Firebase/SignUp";
import SignIn from "../Firebase/SignIn";
import Grid from "@material-ui/core/Grid";
import Header from "../Header/index";

function LoginForm() {
  return (
    <div className="img">
      <Header></Header>
      <Grid container id="grid-container">
        <Grid id="signup-div" item xs={12} md={6}>
          <SignUp />
        </Grid>

        <Grid id="signin-div" item xs={12} md={6}>
          <SignIn />
        </Grid>
      </Grid>
    </div>
  );
}

export default LoginForm;
