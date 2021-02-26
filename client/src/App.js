import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Profile from "./pages/profile";
import Settings from "./pages/Settings";
// import Header from "./components/Header/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserProvider from "./providers/UserProvider";
import Application from "./components/Firebase/Application";
import "./App.css";

function App() {
  return (
    <UserProvider>
      <Application />
      <Router>
        <Switch>
          <Route exact path={["/", "/callback"]} component={Home} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/settings" component={Settings} />
        </Switch>
      </Router>
    </UserProvider>
  );
}

export default App;
