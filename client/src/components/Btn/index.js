import React from "react";
import { useHistory } from "react-router-dom";
import {logOut} from "../../firebase";

import "./btn.css"


function Btn() {
    const history = useHistory();
    const routeChange = () => {
        let path = "/login";
        history.push(path)
    }
    return (
        <div>    
        <button type="button" className="btn-start" id="Generate" onClick={routeChange}>Get Started</button>

      <button
      onClick={() => {
        logOut();
      }}
    >
      Signout
    </button> 
    </div>
    )
}


export default Btn;