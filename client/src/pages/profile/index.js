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
import "./profile.css";
import { UserContext } from "../../providers/UserProvider";
import NewTaskAccordion from "../../components/NewTaskAccordion";
import Playlist from "../../components/Playlist";
import { auth } from "../../firebase";

function Profile() {
  const [tasksState, setTasksState] = React.useState({});
  const [isDesktop, setDesktop] = useState(window.innerWidth > 962);
  const [playerPulse, setPlayerPulse] = useState(window.innerWidth > 1500);
  const [playing, setPlaying] = useState(false);

  const user = auth.currentUser;
  console.log(user);

  // console.log(auth.currentUser.displayName);
  function setTasks() {
    API.getUserTasks().then((res) => {
      console.log(res);
      if (res) {
        let taskIDs = [];
        res.data.forEach((task) => {
          taskIDs.push(task._id);
        });
        console.log("RES.Data", taskIDs);

        setTasksState({
          ...tasksState,
          tasks: taskIDs,
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
          let track = {
            name: data.data.tracks[i].name,
            songID: data.data.tracks[i].id,
            artists: data.data.tracks[i].artists,
            duraiton_ms: data.data.tracks[i].duration_ms,
          };

          newTracks.push(track);
        }
        console.log("NEW TRACKS", newTracks);
        try {
          API.postUserTasks({
            name: formData[1].taskName,
            mood: formData[1].mood,
            duration: formData[1].duration,
            playlistName: formData[1].playlistName,
            tracks: newTracks,
          }).then(() => {
            console.log("DONE POST");
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
      firebaseId: user.uid,
    });
  };

  const setToPlay = () => {
    setChecked(true);
    return setPlaying(true);
  };

  const setToPause = () => {
    setChecked(false);
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
              {/* Dynamically generated accordions */}
              <Grid item xs={9}>
                <NewTaskAccordion className="accordion" onSubmit={addTask} />
              </Grid>
              {tasksState.tasks
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
          <Zoom in={checked}>

            <div id="motion-div">
              {isDesktop ? (
                <LinePulse playing={{ playing }}></LinePulse>
              ) : (
                <div></div>
              )}

              <div id="player-pulse-div">
                {playerPulse ? (
                  <PlayerPulse
                    playing={{ playing }}
                    size={"la-3x"}
                  ></PlayerPulse>
                ) : (
                  <PlayerPulse
                    playing={{ playing }}
                    size={"la-2x"}
                  ></PlayerPulse>
                )}
              </div>

              {isDesktop ? (
                <LinePulse playing={{ playing }}></LinePulse>
              ) : (
                <div></div>
              )}
            </div>
            
          </Zoom>
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
