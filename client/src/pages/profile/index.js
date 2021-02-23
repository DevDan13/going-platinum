/* eslint-disable jsx-a11y/anchor-is-valid */
import Grid from "@material-ui/core/Grid";
import React, { useEffect } from "react";
import API from "../../utils/API";
import Panel from "../../components/Panel/index";
import Header from "../../components/Header/index";
import Accordion from "../../components/Accordion/index";
import tasks from "../../utils/task-json.js";
import Footer from "../../components/Footer/index";
import MusicPlayer from "../../components/MusicPlayer/index";
import PlayerPulse from "../../components/PlayerPulse/index";
import LinePulse from "../../components/LinePulse/index";
import { Link, animateScroll as scroll } from "react-scroll";
import "./profile.css";

function Profile() {
  const onSubmit = (res) => {
    console.log(res);

    API.getSpotifyRecommendations(0.5, 50, res[0]).then((data) => {
      console.log("data", data);
    });
  };

  const testBtn = () => {
    API.getAuthentication().then((res) => {
      window.location.replace(res.data);
    });
  };

  const getPlaylist = () => {
    API.getArtist("Eminem").then((res) => {
      console.log(res.data);
      //items.id
    });
  };

  useEffect(() => {
    const code = window.location.href.split("=");
    if (code[1]) {
      console.log("code=", code[1]);
      API.getTokens(code[1]);
    }
  }, []);

  return (
    <div className="img">
      <Header />
      <Grid container>
        <Grid item xs={12} md={5}>
          <Panel>
            <Grid item xs={12}>
              <h2 id="activity-h2">Activities</h2>
            </Grid>
            <Grid
              container
              className="accordion-div"
              style={{ overflowY: "scroll", height: "100%" }}
            >
              {/* This code block is intended for the signup/login page. 
              When the user clicks "here", it will scroll to the bottom where the signup panel will be 
              -----------------------------------------------------------------------------------------*/}

              <p style={{ color: "white" }}>
                New user? Sign up{" "}
                <Link
                  to="sign-up-div"
                  smooth="easeInOutExpo"
                  duration={750}
                  delay={250}
                  ignoreCancelEvents={false}
                >
                  <a style={{ color: "rgb(207, 104, 104)" }} href="#">
                    here
                  </a>
                  !
                </Link>
              </p>

              {/* ------------------------------------------------------------------------------------ */}

              {tasks.map((task, i) => (
                <Grid item xs={10} key={i}>
                  <Accordion
                    className="accordion"
                    task={task}
                    onSubmit={onSubmit}
                  ></Accordion>
                </Grid>
              ))}
            </Grid>
          </Panel>
        </Grid>

        <Grid item xs={12} md={2}>
          <div id="motion-div" style={{marginTop: 100}}>
            <LinePulse></LinePulse>
            <div
              style={{
                paddingTop: 120,
                paddingBottom: 120,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <PlayerPulse></PlayerPulse>
            </div>
            <div>
              <LinePulse></LinePulse>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} md={5}>
          <Panel>
            <div id="sign-up-div"></div>
            <MusicPlayer></MusicPlayer>
          </Panel>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default Profile;
