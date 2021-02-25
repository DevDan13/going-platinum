import "./style.css";
import SignUp from "../Firebase/SignUp";
import SignIn from "../Firebase/SignIn";
import { Grid } from "@material-ui/core";

function LoginForm() {
  return (
    <div className="img">
        <SignIn/>
        <SignUp/>
    </div>
  );
}

export default LoginForm;
