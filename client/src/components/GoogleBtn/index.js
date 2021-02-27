import { FcGoogle } from "react-icons/fc";
import "./style.css";

function GoogleBtn() {
  return (
    <div align="center">
      <a
        class="google-button"
        href="add-website-here"
        target="_blank"
        rel="nofollow noopener"
      >
        <FcGoogle style={{ paddingRight: 5, paddingTop: 0 }} />
        Sign in with Google
        <br></br>
      </a>
    </div>
  );
}

export default GoogleBtn;
