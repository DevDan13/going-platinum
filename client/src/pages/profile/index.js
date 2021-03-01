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

  const user = useContext(UserContext);
  console.log(user);

  const setTasks = () => {
    // //User Version
    const id = user.uid;

    //DemoVersion
    API.getTasksByUserId(id)
      .then((res) => {
        console.log(res);
        if (res.data) {
          let taskIDs = [];
          res.data.forEach((task) => {
            taskIDs.push(task._id);
          });
          console.log("taskids", taskIDs);
          return taskIDs;
        }
      })
      .then((taskIDs) => {
        setTasksState({
          ...tasksState,
          tasks: taskIDs,
        });
      });
  };
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
    console.log("FormData: ", formData);
    let artistIds = formData[0].map((artist) => {
      return artist.id;
    });
    console.log("Artist Ids", artistIds);

    //Returns Tracks from user information
    try {
      API.getSpotifyRecommendations(formData[2], 50, artistIds).then((data) => {
        //Get duration Request from User
        //Add total duration until the req is reached
        let length = data.data.tracks.length;
        let durationMAX = formData[1].duration * 60000;
        let totalDuration = 0;
        let newTracks = [];
        for (let i = 0; i < length; i++) {
          totalDuration = totalDuration + data.data.tracks[i].duration_ms;
          let track = {
            name: data.data.tracks[i].name,
            songURI: data.data.tracks[i].uri,
            artists: data.data.tracks[i].artists,
          };
          if (durationMAX > totalDuration) {
            console.log("ADDED position " + i);
            newTracks.push(track);
          } else {
            break;
          }
        }
        console.log("END OF FOR LOOP");
        console.log(newTracks);
        //Post user to DB
        try {
          API.postUserTasks({
            name: formData[1].taskName,
            energy: formData[2],
            duration: formData[1].duration,
            playlistName: formData[1].playlistName,
            tracks: newTracks,
            user: user.uid,
          }).then((model) => {
            setTasks();
            console.log("POSTED TASK");
            console.log(model);
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
        console.log(res);
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
                getUserCurrentSong();
              }}
              setNext={() => {
                API.playNext();
                getUserCurrentSong();
              }}
              setToPlay={() => {
                setChecked((prev) => !prev);
                API.songPlay();
                getUserCurrentSong();
                return setPlaying(true);
              }}
              setToPause={() => {
                API.songPause();
                getUserCurrentSong();
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
