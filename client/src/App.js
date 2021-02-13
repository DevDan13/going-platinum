import Home from "./pages/Home /Home";
import Login from "./pages/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Profile from "./pages/profile";

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
