import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
// import axios from "axios";

function Login({ handleLogin }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [valid, setValid] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      //const response = await axios.post("/api/contact", formData);
      //console.log(response.data);
      console.log(formData);
      handleLogin(true);
    } catch (error) {
      setValid(false);
      console.log(error);
    }
  };

  return (
    <div className="login-box">
      <h2 id="dark">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="user-box">
          <input
            type="text"
            name="username"
            id="username"
            onChange={handleInputChange}
            required=""
          ></input>
          <label>Username</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleInputChange}
            required=""
          ></input>
          <label>Password</label>
        </div>
        <div>
          <span id="signup">Don't have an account yet? </span>
            <Link to="/signUp" id="rm2">
              <font id="signUpHere">Sign Up here!</font>
            </Link>
        </div>
        {valid && (
          <div>
            <span style={{ color: "red" }}>Wrong account or password</span>
          </div>
        )}
        <button className="custom-btn b-login" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
