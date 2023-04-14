import React, { useState } from "react";
import "./signUp.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../redux/actions/authAndUserAction";

function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: "",
    gender: "",
    major: "",
    yearOfStudy: "",
    email: "",
    emergencyContact: "",
    password: ""
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(formData);
      dispatch(register(formData));
      window.history.back();
    } catch (error) {
      console.log(error);
    }
  };
  const handleClick = (event) => {
    event.preventDefault();
    navigate(-1);
  };
  return (
    <div className="signUp">
      <div id="resize">
        <form id="form_sign" onSubmit={handleSubmit}>
          <div id="main">
            <h1 id="dark">Sign Up</h1>

            <button onClick={handleClick} className="custom-fbtn fbtn2">
              <span id="btn-txt">Back</span>
            </button>
          </div>
          <fieldset>
            <h4>Name:</h4>
            <input
              placeholder="Input name here"
              type="text"
              tabIndex="1"
              name="username"
              id="username"
              maxLength={10}
              minLength={10}
              onChange={handleInputChange}
              required
            ></input>
          </fieldset>
          <fieldset>
            <h4>Gender:</h4>
            <input
              placeholder="Input gender here"
              type="text"
              tabIndex="4"
              name="gender"
              id="gender"
              pattern="^[FM]$"
              onChange={handleInputChange}
              required
            ></input>
          </fieldset>
          <fieldset>
            <h4>Major:</h4>
            <input
              placeholder="Input study major here"
              type="text"
              tabIndex="5"
              name="major"
              id="major"
              maxLength={50}
              onChange={handleInputChange}
              required
            ></input>
          </fieldset>
          <fieldset>
            <h4>Year:</h4>
            <input
              placeholder="Input year of study here"
              type="number"
              tabIndex="7"
              name="yearOfStudy"
              id="yearOfStudy"
              max={6}
              onChange={handleInputChange}
              required
            ></input>
          </fieldset>
          <fieldset>
            <h4>Email:</h4>
            <input
              placeholder="Input email address here"
              type="email"
              tabIndex="8"
              name="email"
              id="email"
              onChange={handleInputChange}
              required
            ></input>
          </fieldset>
          <fieldset>
            <h4>Contact Number:</h4>
            <input
              placeholder="Input phone number here"
              type="number"
              tabIndex="9"
              name="emergencyContact"
              id="emergencyContact"
              minLength={8}
              maxLength={8}
              onChange={handleInputChange}
              required
            ></input>
          </fieldset>
          <fieldset>
            <h4>Contact Password:</h4>
            <input
              placeholder="Input password here"
              type="password"
              tabIndex="9"
              name="password"
              id="password"
              maxLength={30}
              onChange={handleInputChange}
              required
            ></input>
          </fieldset>

          <fieldset>
            <button
              name="submit"
              type="submit"
              id="contact-submit"
              data-submit="...Sending"
              className="custom-fbtn fbtn2"
            >
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
