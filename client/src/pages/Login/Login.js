import React from "react";
import LoginForm from "../../components/LoginForm/Form";
import AlbumIcon from "@material-ui/icons/Album";

import "./style.css";

function Login() {
  return (
    <div className="img">
      <h1 id="login-title">
        <AlbumIcon
          fontSize="large"
          style={{ marginRight: 10, marginBottom: 10 }}
        ></AlbumIcon>
        Going Platinum
      </h1>
      <LoginForm></LoginForm>
    </div>
  );
}

export default Login;
