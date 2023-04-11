import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "../form.css";

function AdminEditUser() {
  const navigate = useNavigate();
  const { type } = useParams();
  const location = useLocation().state;
  let userInfo = JSON.parse(JSON.stringify(location.userInfo));
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
            tabIndex="1"
            defaultValue={userInfo.Name}
            required
          ></input>
        </fieldset>
        <fieldset>
          <h4>ID:</h4>
          <input
            placeholder="Input ID here"
            type="number"
            tabIndex="2"
            defaultValue={userInfo.ID}
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
            defaultValue={userInfo.Major}
            required
          ></input>
        </fieldset>
        <fieldset>
          <h4>Department:</h4>
          <input
            placeholder="Input study major here"
            type="text"
            tabIndex="6"
            defaultValue={userInfo.Department}
            required
          ></input>
        </fieldset>
        <fieldset>
          <fieldset>
            <h4>Year:</h4>
            <input
              placeholder="Input year of study here"
              type="number"
              tabIndex="7"
              defaultValue={userInfo.Year}
              required
            ></input>
          </fieldset>
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
