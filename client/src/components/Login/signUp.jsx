import React, { useState } from "react";
import "./signUp.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    ID: "",
    dob: "",
    gender: "",
    major: "",
    department: "",
    year: "",
    email: "",
    contact: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      //const response = await axios.post("/api/contact", formData);
      //console.log(response.data);
      //navigate(-1);
      console.log(formData);
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
            <h4>ID:</h4>
            <input
              placeholder="Input ID here"
              type="number"
              tabIndex="2"
              name="ID"
              id="ID"
              onChange={handleInputChange}
              required
            ></input>
          </fieldset>
          <fieldset>
            <h4>Date of Birth:</h4>
            <input
              placeholder="Input date of birth here"
              type="date"
              tabIndex="3"
              name="dob"
              id="dob"
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
              onChange={handleInputChange}
              required
            ></input>
          </fieldset>
          <fieldset>
            <h4>Department:</h4>
            <input
              placeholder="Input department here"
              type="text"
              tabIndex="6"
              name="department"
              id="departmentr"
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
              name="year"
              id="year"
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
              name="contact"
              id="contact"
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
