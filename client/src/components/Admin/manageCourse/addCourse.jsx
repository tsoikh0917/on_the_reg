import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createCourse } from "../../../redux/actions/courseAction";
import { useDispatch } from "react-redux";

function AdminAddCourse() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    courseID: "", 
    courseName: "", 
    description: "", 
    faculty: ""
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (event) => {
    console.log(formData)
    dispatch(createCourse(formData));
    window.history.back();
    event.preventDefault();
  };

  const handleClick = (event) => {
    event.preventDefault();
    navigate(-1);
  }
  return (
    <div id="resize">
      <form id="form_info" onSubmit={handleSubmit}>
        <div id="main">
          <h1 id="alignLeft">New Course</h1>
          <button onClick={handleClick} className="custom-fbtn fbtn">
            <span>Back</span>
          </button>
        </div>
        <fieldset>
          <h4>Course Code:</h4>
          <input
            placeholder="Input course code here"
            type="text"
            tabIndex="1"
            name="courseID"
            id="ID"
            maxLength={8}
            onChange={handleInputChange}
            required
            autoFocus
          ></input>
        </fieldset>
        <fieldset>
          <h4>Course Name:</h4>
          <input
            placeholder="Input course name here"
            type="text"
            tabIndex="2"
            name="courseName"
            id="courseName"
            maxLength={50}
            onChange={handleInputChange}
            required
          ></input>
        </fieldset>
        <fieldset>
          <h4>Department:</h4>
          <input
            placeholder="Input department here"
            type="text"
            tabIndex="3"
            name="faculty"
            id="faculty"
            maxLength={10}
            onChange={handleInputChange}
            required
          ></input>
        </fieldset>
        <fieldset>
          <h4>Course Description:</h4>
          <textarea
            placeholder="Type course outline here...."
            type="text"
            tabIndex="4"
            name="description"
            id="description"
            maxLength={255}
            onChange={handleInputChange}
            required
          ></textarea>
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

export default AdminAddCourse;
