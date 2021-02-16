import Grid from "@material-ui/core/Grid";
import Panel from "../../components/Panel/index";
import Header from "../../components/Header/index";
import Accordion from "../../components/Accordion/index";
import tasks from "../../utils/task-json.js";
import "./style.css";

function Profile() {
  return (
    <div className="img">
      <Header />
      <Grid container>
        <Grid item xs={12} md={6}>
          <Panel>
            <Grid container className="accordion-div">
            <h2 id="activity-h2">Activities</h2>
              {tasks.map((task) => (
                <Grid item xs={10}>
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
    </div>
  );
}

export default Profile;
