import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createStudent, getAllStudents } from "../../../redux/actions/studentAction";

function AdminAddUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    //dob: "",
    gender: "",
    major: "",
    //department: "",
    yearOfStudy: "",
    email: "",
    emergencyContact: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (event) => {
    console.log(formData)
    dispatch(createStudent(formData));
    dispatch(getAllStudents());
    window.history.back();
    event.preventDefault();
  };
  return (
    <div id="resize">
      <form id="form_info" onSubmit={handleSubmit}>
        <div id="main">
          <h1 id="alignLeft">Add User</h1>
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
            name="name"
            id="name"
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
            tabIndex="7"
            name="yearOfStudy"
            id="yearOfStudy"
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
