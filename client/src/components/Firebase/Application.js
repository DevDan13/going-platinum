import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ProfilePage from "./ProfilePage";
import PasswordReset from "./PasswordReset";

function Application() {
  const user = null;
  return user ? (
    <ProfilePage />
  ) : (
    <Router>
      <Switch>
        <Route exact path="/signUp">
          <SignUp />
        </Route>
        <Route exact path="/signIn">
          <SignIn />
        </Route>
        <Route exact path="/passwordReset">
          <PasswordReset />
        </Route>
      </Switch>
    </Router>
  );
}
export default Application;
