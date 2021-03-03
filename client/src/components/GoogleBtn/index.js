import { FcGoogle } from "react-icons/fc";
import {
  signInWithGoogle,
  auth,
  generateUserDocument,
} from "../../firebase";
import "./style.css";

function GoogleBtn(props) {
  return (
    <div align="center">
      <a
        class="google-button"
        href="add-website-here"
        target="_blank"
        rel="nofollow noopener"
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
