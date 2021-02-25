import "./style.css";

function LoginForm() {
  return (
    // <div className="login_container">
    //   {/* <h1 id="login-title">Going Platinum</h1> */}
    //   <div className="login-box">
    //     <h2>Login</h2>
    //     <form>
    //       <div className="user-box">
    //         <input
    //           type="email"
    //           name="userEmail"
    //           value={email}
    //           onChange={(event) => onChangeHandler(event)}
    //           required
    //         />
    //         <label>Email</label>
    //       </div>
    //       <div className="user-box">
    //         <input
    //           type="password"
    //           name="userPassword"
    //           value={password}
    //           id="userPassword"
    //           onChange={(event) => onChangeHandler(event)}
    //           required
    //         />
    //         <label>Password</label>
    //       </div>
    //       <a
    //         onClick={(event) => {
    //           signInWithEmailAndPasswordHandler(event, email, password);
    //         }}
    //         type="submit"
    //       >
    //         {/* <span></span>
    //         <span></span>
    //         <span></span>
    //         <span></span> */}
    //         Login
    //       </a>
    //     </form>
    //   </div>
      <div className="login-box">
        <h2>Signup</h2>
        <form>
          <div className="user-box">
            <input type="text" name="" required />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input type="email" id="email" name="" required />
            <label htmlFor="email">Email</label>
          </div>
          <div className="user-box">
            <input type="password" name="" required />
            <label>Password</label>
          </div>
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            SignUp
          </a>
        </form>
      </div>
    // </div>
  );
}

export default LoginForm;
