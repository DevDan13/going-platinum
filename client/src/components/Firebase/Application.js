import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ProfilePage from "./ProfilePage";
import PasswordReset from "./PasswordReset";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Profile from "../../pages/profile/index";
import LoginForm from "../LoginForm/Form"

function Application() {
  const user = null;
  return user ? (
    <Profile />
  ) : (
    <Router>
      <Switch>
        <Route exact path="/login">
          <LoginForm/>
        </Route>
        <Route exact path="/passwordReset">
          <PasswordReset />
        </Route>
      </Switch>
    </Router>
  );
}
export default Application;
