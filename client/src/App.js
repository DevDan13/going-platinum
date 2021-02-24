import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Profile from "./pages/profile";
// import Header from "./components/Header/index";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserProvider from "./providers/UserProvider";
// import Application from "./components/Firebase/Application";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import './App.css';

function App() {
  return (
    <div className="App">
      <UserProvider>
        {/* <Application /> */}

        <Router>
          <div>
            <Route exact path={["/", "/callback"]} component={Home} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signin" component={SignIn}/>
            <Route exact path="/signup" component={SignUp}/>
          </div>
        </Router>
      </UserProvider>
    </div>

  );
}

export default App;
