/* eslint-disable jsx-a11y/anchor-is-valid */
import Grid from "@material-ui/core/Grid";
import React, { useEffect, useState, useContext } from "react";
import API from "../../utils/API";
import Panel from "../../components/Panel/index";
import Header from "../../components/Header/index";
import Accordion from "../../components/Accordion/index";
import tasks from "../../utils/task-json.js";
import Footer from "../../components/Footer/index";
import MusicPlayer from "../../components/MusicPlayer/index";
import PlayerPulse from "../../components/PlayerPulse/index";
import LinePulse from "../../components/LinePulse/index";
import Zoom from "@material-ui/core/Zoom";
import { Link, animateScroll as scroll } from "react-scroll";
import "./profile.css";
import { UserContext } from "../../providers/UserProvider";
import NewTaskAccordion from "../../components/NewTaskAccordion";
import Playlist from "../../components/Playlist";

function Profile() {
  const [tasksState, setTasksState] = React.useState({ tasks: [] });
  const [isDesktop, setDesktop] = useState(window.innerWidth > 962);
  const [playerPulse, setPlayerPulse] = useState(window.innerWidth > 1500);
  const [playing, setPlaying] = useState(false);

  const user = useContext(UserContext);
  console.log(user);

  function setTasks() {
    API.getUserTasks().then((res) => {
      console.log(res);
      if (res) {
        setTasksState({
          ...tasksState,
          tasks: res.data,
        });
      }
    });
  }

  useEffect(() => {
    setTasks();
  }, []);

  const addTask = (formData) => {
    console.log("formdata", formData);
    try {
      API.getSpotifyRecommendations(0.5, 50, formData[0]).then((data) => {
        console.log("data", data.data.tracks);
        let newTracks = [];
        for (let i = 0; i < 20; i++) {
          newTracks.push(data.data.tracks[i].name);
        }
        console.log(newTracks);
        try {
          API.postUserTasks({
            name: formData[1].taskName,
            mood: formData[1].mood,
            duration: formData[1].duration,
            playlistName: formData[1].playlistName,
            tracks: newTracks,
          }).then(() => {
            setTasks();
          });
        } catch (err) {
          console.log(err);
        }
      });
    } catch (error) {
      console.log("API ERROR", error);
    }
  };
  const deleteTask = (id) => {
    try {
      API.deleteUserTasks(id).then((res) => {
        console.log(res);
        setTasks();
      });
    } catch (error) {
      console.log(error);
    }
    console.log("End");
  };

  const handleUser = () => {
    API.createUser({
      name: user.displayName,
      email: user.email,
      _id: user.uid,
    });
  };

  const setToPlay = () => {
    setChecked((prev) => !prev);
    return setPlaying(true);
  };

  const setToPause = () => {
    setChecked((prev) => !prev);
    return setPlaying(false);
  };

  // This code adjusts the motion media depending on the viewport size =======
  const updateMedia = () => {
    setDesktop(window.innerWidth > 962);
    setPlayerPulse(window.innerWidth > 1500);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  // =========================================================================

  // Spotify test code =======================================================

  useEffect(() => {
    const code = window.location.href.split("=");
    if (code[1]) {
      console.log("code=", code[1]);
      API.getTokens(code[1]);
    }
  }, []);
  //=========================================================================

  const [checked, setChecked] = useState(false);

  return (
    <div className="img">
      <Header />
      <button onClick={handleUser}>test</button>
      <Grid
        style={{ display: "flex", justifyContent: "center", marginTop: 45 }}
        container
      >
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
              {/* 
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
              </p> */}

              {/* ------------------------------------------------------------------------------------ */}

              {/* Dynamically generated accordions */}
              <Grid item xs={9}>
                <NewTaskAccordion className="accordion" onSubmit={addTask} />
              </Grid>
              {tasksState.tasks.length
                ? tasksState.tasks.map((task, i) => (
                    <Grid item xs={10} key={i}>
                      <Accordion
                        className="accordion"
                        task={task}
                        delBtn={deleteTask}
                      ></Accordion>
                    </Grid>
                  ))
                : null}
            </Grid>
          </Panel>
        </Grid>

        {/* The moving stuff in the middle of the page */}
        <Grid item xs={12} md={1}>
          <div id="motion-div">
            {/* <Zoom in={checked}> */}
            {isDesktop ? (
              <LinePulse playing={playing}></LinePulse>
            ) : (
              <div></div>
            )}

            <div id="player-pulse-div">
              {playerPulse ? (
                <PlayerPulse playing={playing} size={"la-3x"}></PlayerPulse>
              ) : (
                <PlayerPulse playing={playing} size={"la-2x"}></PlayerPulse>
              )}
            </div>

            {isDesktop ? (
              <LinePulse playing={playing}></LinePulse>
            ) : (
              <div></div>
            )}
            {/* </Zoom> */}
          </div>
        </Grid>

        {/* The music player panel */}
        <Grid item xs={12} md={5}>
          <Panel>
            <div id="sign-up-div"></div>
            <MusicPlayer
              setToPlay={setToPlay}
              setToPause={setToPause}
            ></MusicPlayer>
          </Panel>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default Profile;
