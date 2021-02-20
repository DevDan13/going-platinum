import "./style.css";

function LoginForm() {
  return (
    <div className="img">
      <h1 id="login-title">Going Platinum</h1>
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="user-box">
            <input type="text" name="" required=""></input>
            <label>Username</label>
          </div>
          <div className="user-box">
            <input type="password" name="" required=""></input>
            <label>Password</label>
          </div>
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
