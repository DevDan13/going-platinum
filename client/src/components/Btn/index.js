import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { logOut } from "../../firebase";
import { UserContext } from "../../providers/UserProvider";

import "./btn.css";

function Btn() {
  const history = useHistory();
  const user = useContext(UserContext);

  const routeChange = () => {
    if (user) {
      let path = "/profile";
      history.push(path);
    } else {
      let path = "/login";
      history.push(path);
    }
  };

  return (
    <div>
      <button
        type="button"
        className="btn-start"
        id="Generate"
        onClick={routeChange}
      >
        Get Started
      </button>
    </div>
  );
}

export default Btn;
