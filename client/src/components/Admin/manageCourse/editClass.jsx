import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../form.css";
import { useDispatch, useSelector } from "react-redux";
import { getClass, updateClass } from "../../../redux/actions/classForAdminAction";

function AdminEditClass(props) {
  const { id } = useParams();
  const navigate = useNavigate();

  const classes = useSelector((state) => state.classForAdmin);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getClass(id));
  }, []);

  let classInfo = JSON.parse(JSON.stringify(classes[0]));

  const formatTime = (value) => {
    const date = new Date(value);
    const timeStr = date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    return timeStr;
  };

  const [formData, setFormData] = useState({
    classID: classInfo['classID'],
    courseID: classInfo['courseID'],
    week: classInfo['week'],
    start_time: classInfo['start_time'],
    end_time: classInfo['end_time'],
    location: classInfo['location'],
    lectureName: classInfo['lectureName'],
    capacity: classInfo['capacity'],
    maxCapacity: classInfo['maxCapacity'],
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    formData.start_time = new Date(formData.start_time);
    formData.end_time = new Date(formData.end_time);
    dispatch(updateClass(classInfo.classID, formData));
    window.history.back();
    event.preventDefault();
  };

  const handleClick = (event) => {
    event.preventDefault();
    navigate(-1);
  }
  if (classes.length == 1) {
    return (
      <div id="resize">
        <form id="form_info" onSubmit={handleSubmit}>
          <div id="main">
            <h1 id="alignLeft">Edit Class</h1>
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
              id="courseID"
              onChange={handleInputChange}
              defaultValue={classInfo.courseID}
              required
            ></input>
          </fieldset>
          <fieldset>
            <h4>School Day:</h4>
            <input
              placeholder="Input week here"
              type="text"
              tabIndex="2"
              name="week"
              id="week"
              onChange={handleInputChange}
              defaultValue={classInfo.week}
              required
            ></input>
          </fieldset>
          <fieldset>
            <h4>Class Start Time:</h4>
            <input
              placeholder="Input in the format: hh:mm"
              type="datetime-local"
              tabIndex="3"
              name="start_time"
              id="start_time"
              pattern="\d{2}:\d{2}"
              onChange={handleInputChange}
              defaultValue={Date(classInfo.start_time)}
              required
            ></input>
          </fieldset>
          <fieldset>
            <h4>Class End Time:</h4>
            <input
              placeholder="Input in the format: hh:mm"
              type="datetime-local"
              tabIndex="4"
              name="end_time"
              id="end_time"
              pattern="\d{2}:\d{2}"
              onChange={handleInputChange}
              defaultValue={Date(classInfo.end_time)}
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
              defaultValue={classInfo.lectureName}
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
              defaultValue={classInfo.maxCapacity}
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
              defaultValue={classInfo.location}
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
}

export default AdminEditClass;
