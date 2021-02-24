import Grid from "@material-ui/core/Grid";
import React, { useEffect, useContext} from "react";
import API from "../../utils/API";
import Panel from "../../components/Panel/index";
import Header from "../../components/Header/index";
import Accordion from "../../components/Accordion/index";
import tasks from "../../utils/task-json.js";
import Footer from "../../components/Footer/index";
import MusicPlayer from "../../components/MusicPlayer/index"
import {UserContext} from "../../providers/UserProvider";
import "./profile.css";

function Profile() {
  const user = useContext(UserContext);
  console.log(user);
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
