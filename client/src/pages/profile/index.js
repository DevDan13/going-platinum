import Grid from "@material-ui/core/Grid";
import React, { useEffect } from "react";
import API from "../../utils/API";
import Panel from "../../components/Panel/index";
import Header from "../../components/Header/index";
import Accordion from "../../components/Accordion/index";
import tasks from "../../utils/task-json.js";
<<<<<<< HEAD
import Footer from "../../components/Footer/index";
import "./style.css";
=======
import Footer from "../../components/Footer/index"
import "./profile.css";
>>>>>>> 85af00edf1072909b596a71c454e4b314ccb9946

function Profile() {
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
              {tasks.map((task, i) => (
                <Grid item xs={10} key={i}>
                  <Accordion className="accordion" task={task}></Accordion>
                </Grid>
              ))}
            </Grid>
          </Panel>
        </Grid>
        <Grid item xs={12} md={6}>
          <Panel></Panel>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default Profile;
