import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createClass } from "../../../redux/actions/classForAdminAction";

function AdminAddClass() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    classID: "",
    courseID: id,
    week: "",
    start_time: "",
    end_time: "",
    location: "",
    lectureName: "",
    capacity: "",
    maxCapacity: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (event) => {
    console.log(formData)
    dispatch(createClass(formData));
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
          <h4>Course Code:</h4>
          <input
            placeholder="Input course code here"
            type="text"
            tabIndex="1"
            name="courseID"
            id="courseID"
            onChange={handleInputChange}
            defaultValue={id}
            required
            autoFocus
          ></input>
        </fieldset>
        <fieldset>
          <h4>School Day:</h4>
          <input
            placeholder="Input course name here"
            type="text"
            tabIndex="2"
            name="week"
            id="week"
            onChange={handleInputChange}
            required
          ></input>
        </fieldset>
        <fieldset>
            <h4>Class Start Time:</h4>
            <input
              placeholder="Input start time in the format: hh:mm"
              type="datetime-local"
              tabIndex="3"
              name="start_time"
              id="start_time"
              pattern="\d{2}:\d{2}"
              onChange={handleInputChange}
              required
            ></input>
          </fieldset>
          <fieldset>
            <h4>Class End Time:</h4>
            <input
              placeholder="Input end time in the format: hh:mm"
              type="datetime-local"
              tabIndex="4"
              name="end_time"
              id="end_time"
              pattern="\d{2}:\d{2}"
              onChange={handleInputChange}
              required
            ></input>
          </fieldset>
          <fieldset>
            <h4>Teacher in Charge:</h4>
            <input
              placeholder="Input instructor's name here"
              type="text"
              tabIndex="5"
              name="lectureName"
              id="lectureName"
              onChange={handleInputChange}
              required
            ></input>
          </fieldset>
        <fieldset>
          <h4>Maximum Capacity:</h4>
          <input
            placeholder="Input maximum capacity of the course here"
            type="number"
            tabIndex="6"
            name="capacity"
            id="capacity"
            onChange={handleInputChange}
            required
          ></input>
        </fieldset>
        <fieldset>
          <h4>Class Place:</h4>
          <input
            placeholder="Input location for the course lecture here"
            type="text"
            tabIndex="7"
            name="location"
            id="location"
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
            className="custom-btn btn"
          >
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default AdminAddClass;
