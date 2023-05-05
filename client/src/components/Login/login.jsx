import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLoginWithAuth } from "../../redux/actions/authAndUserAction";
// import axios from "axios";

// this function is used to login
function Login({ handleLogin }) {

  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [valid, setValid] = useState(false);

  // this function is used to handle the input change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  // this function is used to handle the submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      //const response = await axios.post("/api/contact", formData);
      //console.log(response.data);
      console.log(formData);
      handleLogin(true);
      // login
      dispatch(userLoginWithAuth(formData))
    } catch (error) {
      setValid(false);
      console.log(error);
    }
  };

  //html part
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
