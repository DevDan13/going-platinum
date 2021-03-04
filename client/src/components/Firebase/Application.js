// import SignIn from "./SignIn";
// import SignUp from "./SignUp";
// import ProfilePage from "./ProfilePage";
// import Login from "../../pages/Login/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Settings from "../../pages/Settings";
import PasswordReset from "./PasswordReset";
import Home from "../../pages/Home/Home";
import Profile from "../../pages/profile/index";
import LoginForm from "../../pages/Login/Login";
import Profile404 from "../../pages/Profile404/index";
import React, { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
import Setting404 from "../../pages/Setting404/index";

function Application() {
  const user = useContext(UserContext);

  return (
    <Router>
      <Switch>
        {/* // these are routes for both */}
        <Route exact path={["/"]} component={Home} />
        <Route exact path="/login">
          <LoginForm />
        </Route>
        <Route exact path="/passwordReset">
          <PasswordReset />
        </Route>
        {user ? (
          // only user routes
          <>
            <Route exact path={["/profile", "/callback"]}component={Profile} />
            <Route exact path="/settings" component={Settings} />
          </>
        ) : (
          // <Route exact path="/profile" component={Profile404} />
          null
        )}
        {/* //404 here */}
        {/* <Route path="*" component={Setting404} /> */}
      </Switch>
    </Router>
  );
}
export default Application;
