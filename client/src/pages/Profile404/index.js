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
          src="https://p7.hiclipart.com/preview/378/391/706/super-mario-bros-goomba-8-bit-thumbnail.jpg"
          alt="Mario Goomba"
        ></img>
        <p>Make sure you're logged in before attempting to view this page!</p>
      </div>
    </div>
  );
}

export default Profile404;
