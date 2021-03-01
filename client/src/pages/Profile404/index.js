import Slide from "@material-ui/core/Slide";
import "./style.css";
import "./style.scss";

function Profile404() {
  return (
    <div id="profile404-background">
      <div id="profile404-text">
        <h1 style={{ fontFamily: "DotGothic16"}}>404</h1>
        <h2 style={{ fontFamily: "DotGothic16"}}>
          PAGE NOT FOUND.
        </h2>
        <p style={{ fontFamily: "DotGothic16", fontSize: 20 }}>
          Your page is in another castle!
        </p>
        <Slide
          direction={"up"}
          in={true}
          {...{ timeout: 1000 }}
          mountOnEnter
          unmountOnExit
        >
          <img
            id="goomba-div"
            src="https://github.com/Gavin56/images/blob/main/oomba-8-bit-goomba.png?raw=true"
            alt="Mario Goomba"
          ></img>
        </Slide>
        <p style={{ fontFamily: "DotGothic16", fontSize: 20 }}>
          Make sure you're logged in before attempting to view this page!
        </p>
      </div>
      <div id="pipe">
        <a href="/login" class="eightbit-btn eightbit-btn--reset">Go Back</a>
      </div>
    </div>
  );
}
export default Profile404;
