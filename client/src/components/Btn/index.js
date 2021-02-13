import React from "react";
import { useHistory } from "react-router-dom";
import "./style.css"


function Btn() {

    const history = useHistory();
    const routeChange = () => {
        let path = "/login";
        history.push(path)
    }
    return (
        <button type="button" class="btn" id="Generate" onClick={routeChange}>Get Started</button>
    )
}


export default Btn;