import React, { useEffect } from "react";
// import Hero from "../../components/Hero";
// import Container from "../../components/Container";
// import Row from "../../components/Row";
// import Col from "../../components//Col";
import Btn from "../../components/Btn/index";
import Spotify from "../../components/video/spotify.mp4";
import Grid from "@material-ui/core/Grid";
import "./home.css";
import AlbumIcon from "@material-ui/icons/Album";
import Header from "../../components/Header/index";
import API from "../../utils/API";
import { UserContext } from "../../providers/UserProvider";
import { useContext } from "react";


function Home() {
const user = useContext(UserContext);
console.log(user);

  //testing feature
  // const testBtn = () => {
  //   API.getAuthentication().then((res) => {
  //     window.location.replace(res.data);
  //   });
  // };

  // const handleUser = () => {
  //   API.createUser({
  //     name: user.displayName,
  //     email: user.email,
  //     firebaseId: user.uid,
  //   });
  // };
  

  // const getPlaylist = () => {
  //   API.getArtist("Eminem").then((res) => {
  //     console.log(res.data);
  //     //items.id
  //   });
  // };
  // const testToken = () => {
  //   const code = window.location.href.split("=");
  //   if (code[1]) {
  //     console.log("code=", code[1]);
  //     API.getTokens(code[1]);
  //   }
  // };
  useEffect(() => {
    const code = window.location.href.split("=");
    if (code[1]) {
      console.log("code=", code[1]);
      API.getTokens(code[1]);
    }
  }, []);
  // testing feature ends here

  return (
    <div>
      <div className="layout">
        <video className="video" autoPlay="autoplay" loop="loop" muted>
          <source src={Spotify} type="video/mp4" />
        </video>
        
          <Grid container>
            <Grid id="logo-div" item xs={12} sm={8} md={9} lg={10}>
              <h1 className="logo"><AlbumIcon fontSize="large" style={{marginRight: 10, marginBottom: 10}}></AlbumIcon>Going Platinum</h1>
            </Grid>

            <Grid className="start-button-div" item xs={12} sm={4} md={3} lg={2}>
              <Btn  />
            </Grid>
          </Grid>
      

        <Grid container style={{ display: "flex", justifyContent: "center" }}>
          <Grid item xs={12}>
            <h1 className="listening">
              Music is
              <br />
              everything.
            </h1>
          </Grid>
          {/* <Grid item xs={12}>
            <button onClick={testBtn}>Test</button>
            <button onClick={handleUser}>Test</button>
            <button onClick={getPlaylist}>playlist</button>
          </Grid> */}
        </Grid>
      </div>
    </div>
  );
}

export default Home;
