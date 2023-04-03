import React from "react";
import { useNavigate } from "react-router-dom";
import "../form.css";

function AdminEditUser() {
  const navigate = useNavigate();
  return (
    <div id="resize">
      <form id="form_info" action="" method="post">
        <div id="main">
          <h1 id="alignLeft">Edit User</h1>
          <button onClick={() => navigate(-1)} className="custom-fbtn fbtn">
            <span>Back</span>
          </button>
        </div>
        <fieldset>
          <h4 id="inputT">Name:</h4>
          <input
            placeholder="Input name here"
            type="text"
            tabindex="1"
            required
            autofocus
          ></input>
        </fieldset>
        <fieldset>
          <h4>ID:</h4>
          <input
            placeholder="Input ID here"
            type="number"
            tabindex="2"
            required
          ></input>
        </fieldset>
        <fieldset>
          <h4>Date of Birth:</h4>
          <input
            placeholder="Input date of birth here"
            type="date"
            tabindex="3"
            required
          ></input>
        </fieldset>
        <fieldset>
          <h4>Gender:</h4>
          <input
            placeholder="Input gender here"
            type="text"
            tabindex="4"
            required
          ></input>
        </fieldset>
        <fieldset>
          <h4>Major:</h4>
          <input
            placeholder="Input study major here"
            type="text"
            tabindex="4"
            required
          ></input>
        </fieldset>
        <fieldset>
          <h4>Email:</h4>
          <input
            placeholder="Input email address here"
            type="email"
            tabindex="4"
            required
          ></input>
        </fieldset>
        <fieldset>
          <h4>Contact Number:</h4>
          <input
            placeholder="Input phone number here"
            type="number"
            tabindex="4"
            required
          ></input>
        </fieldset>
        <fieldset>
          <h4>Year:</h4>
          <input
            placeholder="Input year of study here"
            type="number"
            tabindex="4"
            required
          ></input>
        </fieldset>

        <fieldset>
          <button
            name="submit"
            type="submit"
            id="contact-submit"
            data-submit="...Sending"
            className="custom-btn btn"
          >
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default AdminEditUser;
