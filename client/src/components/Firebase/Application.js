import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ProfilePage from "./ProfilePage";
import PasswordReset from "./PasswordReset";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Profile from "../../pages/profile/index";
import LoginForm from "../../pages/Login/Login";
import React, { useContext, } from "react";
import { UserContext } from "../../providers/UserProvider";

function Application() {
  const user = useContext(UserContext);
  return (
    <Router>
      <Switch>
        {/* // these are routes for both */}
        <Route exact path={["/", "/callback"]} component={Home} />
        <Route exact path="/login">
          <LoginForm />
        </Route>
        <Route exact path="/passwordReset">
          <PasswordReset />
        </Route>
        {user ? (
          // only user routes
          <>
            <Route exact path="/profile" component={Profile} />
          </>
        ) :(
          null //404 here
        )
        }
        {/* //404 here */}
      </Switch>
    </Router>
  );
}
export default Application;
