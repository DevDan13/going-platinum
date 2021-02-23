import Grid from "@material-ui/core/Grid";
import React from "react";
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
  const onSubmit = (res) => {
    console.log(res);

    API.getSpotifyRecommendations(0.5, 50, res[0]).then((data) => {
      console.log("data", data);
    });
  };

  const addTask = () => {};
  const deleteTask = () => {
    console.log("Delete Task");
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

              {tasks.map((task, i) => (
                <Grid item xs={10} key={i}>
                  <Accordion
                    className="accordion"
                    task={task}
                    delBtn={deleteTask}
                  ></Accordion>
                </Grid>
              ))}
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
