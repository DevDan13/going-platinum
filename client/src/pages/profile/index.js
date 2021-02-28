/* eslint-disable jsx-a11y/anchor-is-valid */
import Grid from "@material-ui/core/Grid";
import React, { useEffect, useState, useContext } from "react";
import API from "../../utils/API";
import Panel from "../../components/Panel/index";
import Header from "../../components/Header/index";
import Accordion from "../../components/Accordion/index";
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
import { auth } from "../../firebase";

function Profile() {
  const [tasksState, setTasksState] = React.useState({});
  const [isDesktop, setDesktop] = useState(window.innerWidth > 962);
  const [playerPulse, setPlayerPulse] = useState(window.innerWidth > 1500);
  const [playing, setPlaying] = useState(false);
  const [currentlyPlaying, setCurrentlyPlaying] = useState({});

  const user = auth.currentUser();
  console.log(user);

  function setTasks() {
    const id = user.uid;
    API.populate(id).then((res) => {
      console.log(res);
      if (res.data.tasks) {
        let taskIDs = [];
        res.data.tasks.forEach((task) => {
          taskIDs.push(task._id);
        });

        setTasksState({
          ...tasksState,
          tasks: taskIDs,
        });
      }
    });
  }
  //Init tasks and Auth token
  useEffect(() => {
    const code = window.location.href.split("=");
    if (code[1]) {
      console.log("code=", code[1]);
      API.getTokens(code[1]);
    }
    setTasks();
    getUserCurrentSong();
  }, []);

  const getUserCurrentSong = () => {
    API.getUserCurrentSong().then((res) => {
      console.log(res.data);
      setCurrentlyPlaying({ ...currentlyPlaying, song: res.data });
    });
  };

  //Accordion form Submit to Add Task to DB
  const addTask = (formData) => {
    console.log(formData);
    //Returns Tracks from user information
    try {
      API.getSpotifyRecommendations(0.5, 50, formData[0]).then((data) => {
        console.log("data", data.data.tracks);
        let newTracks = [];
        for (let i = 0; i < 20; i++) {
          let track = {
            name: data.data.tracks[i].name,
            songURI: data.data.tracks[i].uri,
            artists: data.data.tracks[i].artists,
            duraiton_ms: data.data.tracks[i].duration_ms,
          };

          newTracks.push(track);
        }
        //Post user to DB
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
      console.log(error);
    }
  };
  //Deletes tasks from DB on Delete Btn Click
  const deleteTask = (id) => {
    try {
      API.deleteUserTasks(id).then((res) => {
        setTasks();
      });
    } catch (error) {
      console.log(error);
    }
  };

  // const handleUser = () => {
  //   API.createUser({
  //     name: user.displayName,
  //     email: user.email,
  //     firebaseId: user.uid,
  //   });
  // };

  //Changes Checked State and Updates Play through Spotify API
  // const setToPlay = () => {
  //   setChecked((prev) => !prev);
  //   API.songPlay();
  //   return setPlaying(true);
  // };

  //Pause Song from Spotify API call
  // const setToPause = () => {
  //   API.songPause();
  //   setChecked((prev) => !prev);
  //   return setPlaying(false);
  // };

  const setNext = () => {};
  //Init Playlist that will play by Setting current Playlist Tracks
  const playPlaylists = (tracks) => {
    try {
      tracks.forEach((track) => {
        API.addTrackToQueue(track.songURI);
      });
    } catch {
      return;
    }

    // API.addTrackToQueue;
  };

  // This code adjusts the motion media depending on the viewport size
  const updateMedia = () => {
    setDesktop(window.innerWidth > 962);
    setPlayerPulse(window.innerWidth > 1500);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  const testBtn = () => {
    API.getUserCurrentSong().then((res) => {
      console.log(res.data);
      setCurrentlyPlaying({ ...currentlyPlaying, song: res.data });
    });
  };
  const [checked, setChecked] = useState(false);

  return (
    <div className="img">
      <Header />
      <button onClick={testBtn}>test</button>
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
              {tasksState.tasks
                ? tasksState.tasks.map((task, i) => (
                    <Grid item xs={10} key={i}>
                      <Accordion
                        className="accordion"
                        task={task}
                        delBtn={deleteTask}
                        playBtn={playPlaylists}
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
              image={
                currentlyPlaying.song
                  ? currentlyPlaying.song.album.images[1].url
                  : null
              }
              setPrevious={() => {
                API.playPrevious();
              }}
              setNext={() => {
                API.playNext();
              }}
              setToPlay={() => {
                setChecked((prev) => !prev);
                API.songPlay();
                return setPlaying(true);
              }}
              setToPause={() => {
                API.songPause();
                setChecked((prev) => !prev);
                return setPlaying(false);
              }}
            ></MusicPlayer>
          </Panel>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default Profile;
