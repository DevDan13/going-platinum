import Home from "../src/pages/Home /Home"
import Login from "../src/pages/Login/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Profile from "../src/pages/profile/index"

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar/>
          <Route exact path="/" component={Home} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/login" component={Login} />
        </div>
      </Router>
    </div>
  );
}


export default App;
