import React, {useState ,useEffect ,useContext} from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import AlbumIcon from "@material-ui/icons/Album";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { Link } from "react-router-dom";
import { UserContext } from "../../providers/UserProvider";
import API from "../../utils/API";
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
  const [anchorEl, setAnchorEl] = useState(null);
  const [name, setName] = useState("");
  const open = Boolean(anchorEl);

  const user = useContext(UserContext);

  // const handleChange = (event) => {
  //   setAuth(event.target.checked);
  // };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    handleUser()
  },[])

  const handleUser = () => {
    API.getUser(user.uid).then((res) => {
      console.log(res);
      setName(res.data.name);
    })
  }

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
                  <AlbumIcon fontSize="large" style={{marginRight: 10}}></AlbumIcon>Going Platinum
                </h1>
              </Link>
              <div className="userWelcome" style={{display:"flex", justifyContent:"center"}}>
                <h1 className="logo" fontSize="large">Welcome {name} </h1>
              </div>
              
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
                    to="/profile"
                    className={
                      window.location.pathname === "/" ||
                      window.location.pathname === "/profile"
                        ? "nav-link active"
                        : "nav-link"
                    }
                  >
                    Settings
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  {" "}
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
                </MenuItem>
              </Menu>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
