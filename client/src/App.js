import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Profile from "./pages/profile";
// import Header from "./components/Header/index";
import { BrowserRouter as Router, Route } from "react-router-dom";
<<<<<<< HEAD
import UserProvider from "./providers/UserProvider";
import Application from "./components/Firebase/Application";

// import './App.css';
=======
// import UserProvider from "./providers/UserProvider";
// import Application from "./components/Firebase/Application";
import './App.css';
>>>>>>> 85af00edf1072909b596a71c454e4b314ccb9946

function App() {
  return (
    <div className="App">
      {/* <UserProvider>
        <Application />
      </UserProvider> */}
      <Router>
<<<<<<< HEAD
        <div>
          <Route exact path={["/","/callbacl"]} component={Home} />
=======
        {/* <div> */}
          <Route exact path={["/", "/callback"]} component={Home} />
>>>>>>> 85af00edf1072909b596a71c454e4b314ccb9946
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/login" component={Login} />
        </div>
      </Router>
    </div>
  );
}

export default App;
