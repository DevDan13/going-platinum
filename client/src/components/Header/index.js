import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import AlbumIcon from "@material-ui/icons/Album";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import {logOut} from "../../firebase.js"
import { Link } from "react-router-dom";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: "transparent",
    [theme.breakpoints.down("sm")]: {
      backgroundColor: "black",
    },
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();
  // const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  // const handleChange = (event) => {
  //   setAuth(event.target.checked);
  // };

  const handleLogout = () => {
    logOut();
    window.location.replace("/login")
    return;
  }

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="header">
      {/* <FormGroup>
        <FormControlLabel
          control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup> */}
      <AppBar className={classes.appBar} position="static" elevation={0}>
        <Toolbar>
          <Grid container>
            <Grid item xs={10} md={11}>
              <Link
                to="/"
                className={
                  window.location.pathname === "/" ||
                  window.location.pathname === "/home"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                <h1 className="logo">
                  <AlbumIcon
                    fontSize="large"
                    style={{ marginRight: 10 }}
                  ></AlbumIcon>
                  Going Platinum
                </h1>
              </Link>
            </Grid>

            <Grid item xs={2} md={1}>
              <div id="account-circle-div">
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle fontSize="large" />
                </IconButton>
              </div>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  {" "}
                  <Link
                  style={{textDecoration: "none", color: "black"}}
                    to="/passwordReset"
                    // className={
                    //   window.location.pathname === "/" ||
                    //   window.location.pathname === "/passwordReset"
                    //     ? "nav-link active"
                    //     : "nav-link"
                    // }
                  >
                    Reset password
                  </Link>
                </MenuItem>
                <hr style={{ marginTop: 5, marginBottom: 5}}></hr>
                <MenuItem
                  onClick={() => {
                    handleLogout();
                  }}
                >
                   {/* onClick={handleClose} */}
                  {/* <Link
                    to="/login"
                    className={
                      window.location.pathname === "/" ||
                      window.location.pathname === "/login"
                        ? "nav-link active"
                        : "nav-link"
                    }
                  > */}
                  Logout
                  {/* </Link> */}
                </MenuItem>
              </Menu>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
