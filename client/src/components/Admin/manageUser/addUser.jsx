import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createStudent } from "../../../redux/actions/studentAction";

// this function is used to add a user
function AdminAddUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    name: "",
    //dob: "",
    gender: "",
    major: "",
    //department: "",
    yearOfStudy: "",
    email: "",
    emergencyContact: "",
  });

  // this function is used to handle the input change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // this function is used to handle the submit button
  const handleSubmit = async (event) => {
    console.log(formData)
    dispatch(createStudent(formData));
    window.history.back();
    event.preventDefault();
  };

  // this function is used to handle the back button
  const handleClick = (event) => {
    event.preventDefault();
    navigate(-1);
  }

  // this function is used to render the page
  return (
    <div id="resize">
      <form id="form_info" onSubmit={handleSubmit}>
        <div id="main">
          <h1 id="alignLeft">Add User</h1>
          <button onClick={handleClick} className="custom-fbtn fbtn">
            <span>Back</span>
          </button>
        </div>
        <fieldset>
          <h4 id="inputT">Username:</h4>
          <input
            placeholder="Input username here"
            type="text"
            tabIndex="1"
            name="username"
            id="username"
            maxLength={50}
            onChange={handleInputChange}
            required
          ></input>
        </fieldset>
        <fieldset>
          <h4 id="inputT">Name:</h4>
          <input
            placeholder="Input name here"
            type="text"
            tabIndex="2"
            name="name"
            id="name"
            maxLength={50}
            onChange={handleInputChange}
            required
          ></input>
        </fieldset>
        {/*<fieldset>
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
  </fieldset>*/}
        <fieldset>
          <h4>Gender:</h4>
          <input
            placeholder="Input gender here"
            type="text"
            tabIndex="3"
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
            tabIndex="4"
            name="major"
            id="major"
            maxLength={50}
            onChange={handleInputChange}
            required
          ></input>
        </fieldset>
        {/*<fieldset>
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
</fieldset>*/}
        <fieldset>
          <h4>Year:</h4>
          <input
            placeholder="Input year of study here"
            type="number"
            tabIndex="5"
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
            tabIndex="6"
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
            tabIndex="7"
            name="emergencyContact"
            id="emergencyContact"
            maxLength={20}
            onChange={handleInputChange}
            required
          ></input>
        </fieldset>

        <fieldset>
          <button
            name="submit"
            type="submit"
            id="contact-submit"
            className="custom-btn btn"
          >
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default AdminAddUser;
