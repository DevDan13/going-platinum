import { FcGoogle } from "react-icons/fc";
import {signInWithGoogle} from "../../firebase.js"
import "./style.css";

function GoogleBtn(props) {
  return (
    <div align="center">
      <a
        class="google-button"
        href="add-website-here"
        target="_blank"
        rel="nofollow noopener"
        onClick={() => {
          signInWithGoogle();
        }}
      >
        <FcGoogle
          onClick={() => {
            signInWithGoogle();
          }}
          style={{ paddingRight: 5, paddingTop: 0 }}
        />
        {props.children}
        <br></br>
      </a>
    </div>
  );
}

export default GoogleBtn;
