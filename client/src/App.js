import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Profile from "./pages/profile";
// import Header from "./components/Header/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserProvider from "./providers/UserProvider";
import Application from "./components/Firebase/Application";
import "./App.css";

function App() {
  return (
    <UserProvider>
      <Application />
    </UserProvider>
  );
}

export default App;
