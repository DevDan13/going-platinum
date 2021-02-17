import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import "../Navbar/style.css";


function Navbar() {
  return (
    <nav>
      <div className="header">
        <Grid item xs={12} med={6}>
          <Link
            to="/"
            className={
              window.location.pathname === "/" ||
              window.location.pathname === "/home"
                ? "nav-link active"
                : "nav-link"
            }
          >
            <h1 className="logo">Going Platinum</h1>
          </Link>
        </Grid>

        <Grid item xs={12} md={6}>
          <ul className="main-nav">
            <li className="nav-item">
              <Link
                to="/profile"
                className={
                  window.location.pathname === "/" ||
                  window.location.pathname === "/profile"
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
                  window.location.pathname === "/" ||
                  window.location.pathname === "/login"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Login
              </Link>
            </li>
          </ul>
        </Grid>
      </div>
    </nav>
  );
}

export default Navbar;
