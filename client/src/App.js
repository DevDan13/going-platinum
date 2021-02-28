import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Profile from "./pages/profile";
import Settings from "./pages/Settings";
// import Header from "./components/Header/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserProvider from "./providers/UserProvider";
<<<<<<< HEAD
// import Application from "./components/Firebase/Application";

=======
>>>>>>> 84acf0c0f9f290fa39dfe5507e6ea69baa82aa95
import Application from "./components/Firebase/Application";
import "./App.css";

function App() {
  return (
<<<<<<< HEAD
    <div className="App">
      <UserProvider>
        {/* <Application /> */}

        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path={["/profile", "/callback"]} component={Profile} />
            <Route exact path="/login" component={Login} />
          </div>
        </Router>
      </UserProvider>
    </div>
=======
    <UserProvider>
      <Application />
    </UserProvider>
>>>>>>> 84acf0c0f9f290fa39dfe5507e6ea69baa82aa95
  );
}

export default App;
