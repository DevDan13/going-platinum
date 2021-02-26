import { Link } from "react-scroll";

function ScrollLink() {
  return (
    <p style={{ color: "white" }}>
      New user? Sign up{" "}
      <Link
        to="signup-div"
        smooth="easeInOutExpo"
        duration={750}
        delay={250}
        ignoreCancelEvents={false}
      >
        <a style={{ color: "rgb(207, 104, 104)" }} href="#">
          here
        </a>
        !
      </Link>
    </p>
  );
}

export default ScrollLink;
