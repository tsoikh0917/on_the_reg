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
    /*ID: "",
    name: "",
    day: "",
    time: "",
    department: "",
    instructor: "",
    capacity: "",
    place: "",
    description: "",*/
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
  return (
    <div id="resize">
      <form id="form_info" onSubmit={handleSubmit}>
        <div id="main">
          <h1 id="alignLeft">New Course</h1>
          <button onClick={() => navigate(-1)} className="custom-fbtn fbtn">
            <span>Back</span>
          </button>
        </div>
        <fieldset>
          <h4>Course ID:</h4>
          <input
            placeholder="Input course code here"
            type="text"
            tabIndex="1"
            name="courseID"
            id="ID"
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
            id="name"
            onChange={handleInputChange}
            required
          ></input>
        </fieldset>
        {/*<fieldset>
          <h4>Course Day:</h4>
          <input
            placeholder="Input weekday here"
            type="text"
            tabIndex="3"
            name="day"
            id="day"
            onChange={handleInputChange}
            required
          ></input>
        </fieldset>
        <fieldset>
          <h4>Course Time:</h4>
          <input
            placeholder="Input time slot in the format: hh:mm-hh:mm here"
            type="text"
            tabIndex="4"
            name="time"
            id="time"
            onChange={handleInputChange}
            required
          ></input>
  </fieldset>*/}
        <fieldset>
          <h4>Department:</h4>
          <input
            placeholder="Input faculty here"
            type="text"
            tabIndex="5"
            name="faculty"
            id="department"
            onChange={handleInputChange}
            required
          ></input>
        </fieldset>
        {/*<fieldset>
          <h4>Teacher in Charge:</h4>
          <input
            placeholder="Input instructor's name here"
            type="text"
            tabIndex="6"
            name="instructor"
            id="instructor"
            onChange={handleInputChange}
            required
          ></input>
        </fieldset>
        <fieldset>
          <h4>Capacity:</h4>
          <input
            placeholder="Input maximum capacity of the course here"
            type="number"
            tabIndex="7"
            name="capacity"
            id="capacity"
            onChange={handleInputChange}
            required
          ></input>
        </fieldset>
        <fieldset>
          <h4>Course Place:</h4>
          <input
            placeholder="Input location for the course lecture here"
            type="text"
            tabIndex="8"
            name="place"
            id="place"
            onChange={handleInputChange}
            required
          ></input>
</fieldset>*/}
        <fieldset>
          <h4>Course Description:</h4>
          <textarea
            placeholder="Type course outline here...."
            type="text"
            tabIndex="9"
            name="description"
            id="description"
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
