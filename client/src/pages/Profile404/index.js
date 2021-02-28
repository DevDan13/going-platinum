import Slide from "@material-ui/core/Slide";
import "./style.css";

function Profile404() {
  const directionArray = ["left", "right", "up", "down"];
  let randomIndex = Math.floor(Math.random() * directionArray.length);
  let direction = directionArray[randomIndex];
  return (
    <div id="profile404-background">
      <div id="profile404-text">
        <h1 style={{ fontFamily: "DotGothic16", fontSize: 55 }}>404</h1>
        <h2 style={{ fontFamily: "DotGothic16", fontSize: 35 }}>
          PAGE NOT FOUND.
        </h2>
        <p style={{ fontFamily: "DotGothic16", fontSize: 20 }}>
          Your page is in another castle!
        </p>
        <Slide
          direction={direction}
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
    </div>
  );
}
export default Profile404;
