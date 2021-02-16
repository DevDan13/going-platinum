import Grid from "@material-ui/core/Grid";
import Panel from "../../components/Panel/index";
import Header from "../../components/Header/index";
import Accordion from "../../components/Accordion/index";
import tasks from "../../utils/task-json.js";

function Profile() {
  return (
    <div className="img">
      <Header />
      <Grid container>
        <Grid item xs={12} md={6}>
          <Panel>
            {tasks.map((task) => (
              <Accordion task={task}></Accordion>
            ))}
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
