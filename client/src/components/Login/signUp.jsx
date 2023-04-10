import React from "react";
import "./signUp.css";
import { Link, useNavigate } from "react-router-dom";
function SignUp() {
  const navigate = useNavigate();
  return (
    <div className="signUp">
      <div id="resize">
        <form id="form_sign" action="" method="post">
          <div id="main">
            <h1 id="dark">Sign Up</h1>

            <button onClick={() => navigate(-1)} className="custom-fbtn fbtn2">
              <span>Back</span>
            </button>
          </div>
          <fieldset>
            <h4>Name:</h4>
            <input
              placeholder="Input name here"
              type="text"
              tabIndex="1"
              required
            ></input>
          </fieldset>
          <fieldset>
            <h4>ID:</h4>
            <input
              placeholder="Input ID here"
              type="number"
              tabIndex="2"
              required
            ></input>
          </fieldset>
          <fieldset>
            <h4>Date of Birth:</h4>
            <input
              placeholder="Input date of birth here"
              type="date"
              tabIndex="3"
              required
            ></input>
          </fieldset>
          <fieldset>
            <h4>Gender:</h4>
            <input
              placeholder="Input gender here"
              type="text"
              tabIndex="4"
              required
            ></input>
          </fieldset>
          <fieldset>
            <h4>Major:</h4>
            <input
              placeholder="Input study major here"
              type="text"
              tabIndex="5"
              required
            ></input>
          </fieldset>
          <fieldset>
            <h4>Department:</h4>
            <input
              placeholder="Input department here"
              type="number"
              tabIndex="6"
              required
            ></input>
          </fieldset>
          <fieldset>
            <h4>Year:</h4>
            <input
              placeholder="Input year of study here"
              type="number"
              tabIndex="7"
              required
            ></input>
          </fieldset>
          <fieldset>
            <h4>Email:</h4>
            <input
              placeholder="Input email address here"
              type="email"
              tabIndex="8"
              required
            ></input>
          </fieldset>
          <fieldset>
            <h4>Contact Number:</h4>
            <input
              placeholder="Input phone number here"
              type="number"
              tabIndex="9"
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
