import React, { useState } from "react";
import "./signUp.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { userRegisterWithAuth } from "../../redux/actions/authAndUserAction";

function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // userID, major, name, email, gender, yearOfStudy, emergencyContact, username

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    // dob: "",
    gender: "",
    major: "",
    // department: "",
    yearOfStudy: "",
    email: "",
    emergencyContact: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      dispatch(userRegisterWithAuth(formData));
      alert("Sign up successfully!");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="signUp">
      <div id="resize">
        <form id="form_sign" onSubmit={handleSubmit}>
          <div id="main">
            <h1 id="dark">Sign Up</h1>

            <button onClick={() => navigate(-1)} className="custom-fbtn fbtn2">
              <span id="btn-txt">Back</span>
            </button>
          </div>
          <fieldset>
            <h4>Name:</h4>
            <input
              placeholder="Input name here"
              type="text"
              tabIndex="1"
              name="name"
              id="name"
              onChange={handleInputChange}
              required
            ></input>
          </fieldset>
          <fieldset>
            <h4>Username (student ID, 10 digit):</h4>
            <input
              placeholder="Input ID here"
              type="number"
              tabIndex="2"
              name="username"
              id="username"
              onChange={handleInputChange}
              required
              pattern="[0-9]{8}"
            ></input>
          </fieldset>
          {/* <fieldset>
            <h4>Date of Birth:</h4>
            <input
              placeholder="Input date of birth here"
              type="date"
              tabIndex="3"
              name="dob"
              id="dob"
              onChange={handleInputChange}
              style={{ color: "white" }}
              required
            ></input>
          </fieldset> */}
          <fieldset>
            <h4>Gender:</h4>
            <input
              placeholder="Input gender here"
              type="text"
              tabIndex="4"
              name="gender"
              id="gender"
              onChange={handleInputChange}
              pattern="[MmFf]{1}"
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
              onChange={handleInputChange}
              required
            ></input>
          </fieldset>
          {/* <fieldset>
            <h4>Department:</h4>
            <input
              placeholder="Input department here"
              type="text"
              tabIndex="6"
              name="department"
              id="department"
              onChange={handleInputChange}
              required
            ></input>
          </fieldset> */}
          <fieldset>
            <h4>Year of study:</h4>
            <input
              placeholder="Input year of study here"
              type="number"
              tabIndex="7"
              name="yearOfStudy"
              id="yearOfStudy"
              onChange={handleInputChange}
              pattern="[1-4]{1}"
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
              onChange={handleInputChange}
              required
            ></input>
          </fieldset>
          <fieldset>
            <h4>Password:</h4>
            <input
              type="password"
              tabIndex="9"
              name="password"
              id="password"
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
