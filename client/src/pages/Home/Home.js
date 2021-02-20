import React, { useEffect } from "react";
// import Hero from "../../components/Hero";
// import Container from "../../components/Container";
// import Row from "../../components/Row";
// import Col from "../../components//Col";
import Btn from "../../components/Btn/index";
import Spotify from "../../components/video/spotify.mp4"
import "./style.css";
import API from "../../utils/API";

function Home() {
  //testing feature
  const testBtn = () => {
    API.getAuthentication().then((res) => {
      window.location.replace(res.data);
    });
  };

  const getPlaylist = () => {
    API.getSpotifyRecommendations().then((res) => {
      console.log(res.data);
      //items.id

    });
  };
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
      <div className="img">
        <video className="video" autoPlay="autoplay" loop="loop" muted  >
          <source src={Spotify} type="video/mp4" />
        </video>
        <h1 className="listening">Music is<br />everything</h1>
        <button onClick={testBtn}>Test</button>
        <button onClick={getPlaylist}>playlist</button>
        <Btn />
      </div>
    </div>
  );
}

export default Home;
