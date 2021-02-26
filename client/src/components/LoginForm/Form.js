import "./style.css";
import SignUp from "../Firebase/SignUp";
import SignIn from "../Firebase/SignIn";
import Grid from "@material-ui/core/Grid";
import Header from "../Header/index";
import Footer from "../Footer/index";
import PlayerPulse from "../PlayerPulse/index";

function LoginForm() {
  return (
    <div className="img">
      {/* <Header></Header> */}
      <Grid container id="grid-container">
        <Grid id="signin-div" item xs={12} md={5}>
          <SignIn />
        </Grid>

        <Grid id="motion-media-div" style={{display:"flex", justifyContent: "center"}}item xs={12} md={2}>
          <PlayerPulse playing={true} size={"la-3x"}></PlayerPulse>
        </Grid>

        <Grid id="signup-div" item xs={12} md={5}>
          <SignUp />
        </Grid>
      </Grid>
      <Footer></Footer>
    </div>
  );
}

export default LoginForm;
