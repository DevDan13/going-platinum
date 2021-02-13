import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login";
import Profile from "./pages/profile";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import './App.css';
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
