import Grid from "@material-ui/core/Grid";
import Panel from "../../components/Panel/index";
import Header from "../../components/Header/index"

function Profile() {
  return (
    <div className="img">
      <Header />
      <Grid container>
        <Grid item xs={12} md={6}>
          <Panel></Panel>
        </Grid>
        <Grid item xs={12} md={6}>
          <Panel></Panel>
        </Grid>
      </Grid>
    </div>
  );
}

export default Profile;
