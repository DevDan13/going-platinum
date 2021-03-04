import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Profile from "./pages/profile";
import Settings from "./pages/Settings";
// import Header from "./components/Header/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserProvider from "./providers/UserProvider";
import DocumentTitle from "react-document-title";
// import Application from "./components/Firebase/Application";

import Application from "./components/Firebase/Application";
import "./App.css";

function App() {
  return (
    <DocumentTitle title="Going Platinum">
      <UserProvider>
        <Application />
      </UserProvider>
    </DocumentTitle>
  );
}

export default App;
