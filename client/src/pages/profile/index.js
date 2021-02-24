import Grid from "@material-ui/core/Grid";
import React, { useEffect } from "react";
import API from "../../utils/API";
import Panel from "../../components/Panel/index";
import Header from "../../components/Header/index";
import Accordion from "../../components/Accordion/index";
import tasks from "../../utils/task-json.js";
import Footer from "../../components/Footer/index";
import NewTaskAccordion from "../../components/NewTaskAccordion";
import Playlist from "../../components/Playlist";
import MusicPlayer from "../../components/MusicPlayer/index";
import "./profile.css";

function Profile() {
  const [tasksState, setTasksState] = React.useState({ tasks: [] });
  // const onSubmit = (res) => {
  //   console.log(res);

  //   API.getSpotifyRecommendations(0.5, 50, res[0]).then((data) => {
  //     console.log("data", data);
  //   });
  // };
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

  return (
    <div className="img">
      <Header />
      <Grid container>
        <Grid item xs={12} md={6}>
          <Panel>
            <Grid item xs={12}>
              <h2 id="activity-h2">Activities</h2>
            </Grid>

            <Grid
              container
              className="accordion-div"
              style={{ overflowY: "scroll", height: "100%" }}
            >
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
        <Grid item xs={12} md={6}>
          <Panel>
            <MusicPlayer></MusicPlayer>
          </Panel>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default Profile;
