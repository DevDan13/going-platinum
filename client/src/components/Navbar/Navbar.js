import React from "react"
import {Link} from "react-router-dom";
import "../Navbar/style.css";


function Navbar () {
    return (
        <nav>
        <div className="header">
          <Link to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/home"
                  ? "nav-link active"
                  : "nav-link"
              }>
          <h1 className="logo">Going Platinum</h1>
          
          </Link>
            <ul className="main-nav">
            <li className="nav-item">
            <Link
              to="/profile"
              className={
                window.location.pathname === "/" || window.location.pathname === "/profile"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/login"
              className={
                window.location.pathname === "/" || window.location.pathname === "/login"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Login
            </Link>
          </li>
            </ul>
        </div>
    </nav>
    )

}

export default Navbar;
