import React from "react";
import { useHistory } from "react-router-dom";
import "./btn.css"


function Btn() {

    const history = useHistory();
    const routeChange = () => {
        let path = "/login";
        history.push(path)
    }
    return (
        <button type="button" className="btn-start" id="Generate" onClick={routeChange}>Get Started</button>
    )
}


export default Btn;