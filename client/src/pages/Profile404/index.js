import "./style.css";

function Profile404() {
  return (
    <div id="profile404-background">
      <div id="profile404-text">
        <h1 style={{ fontFamily: "DotGothic16", fontSize: 35 }}>404</h1>
        <h2 style={{ fontFamily: "DotGothic16", fontSize: 35 }}>
          PAGE NOT FOUND.
        </h2>
        <p style={{ fontFamily: "DotGothic16", fontSize: 20 }}>
          Your page is in another castle!
        </p>
        <img
          id="goomba-div"
          src="https://github.com/Gavin56/images/blob/main/oomba-8-bit-goomba.png?raw=true"
          alt="Mario Goomba"
        ></img>
        <p>Make sure you're logged in before attempting to view this page!</p>
      </div>
    </div>
  );
}

export default Profile404;
