import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
function Login({ handleLogin }) {
  return (
    <div className="login-box">
      <h2 id="dark">Login</h2>
      <form>
        <div className="user-box">
          <input type="text" name="" required=""></input>
          <label>Username</label>
        </div>
        <div class="user-box">
          <input type="password" name="" required=""></input>
          <label>Password</label>
        </div>
        <div>
          <span id="signup">Don't have an account yet? </span>
          <Link to="/signUp" id="rm2">
            Sign Up here!
          </Link>
        </div>
        <a href="#" onClick={(event) => handleLogin(true)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </a>
      </form>
    </div>
  );
}

export default Login;
