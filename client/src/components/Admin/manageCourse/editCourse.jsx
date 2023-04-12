import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../form.css";
import axios from "axios";

function AdminEditCourse(props) {
  const navigate = useNavigate();
  const location = useLocation().state;
  let courseInfo = JSON.parse(JSON.stringify(location.courseInfo));
  const [classInfo, setClassInfo] = useState([]);
  useEffect(() => {
    axios
      .get("")
      .then((response) => setClassInfo(response.data))
      .catch((error) => console.log(error));
  }, []);
  const [formData, setFormData] = useState({
    ID: courseInfo.course_ID,
    name: courseInfo.Name,
    day: courseInfo.day,
    time: courseInfo.time,
    department: courseInfo.department,
    instructor: courseInfo.instructor,
    capacity: courseInfo.capacity,
    place: courseInfo.place,
    description: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/contact", formData);
      console.log(response.data);
      navigate(-1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="resize">
      <form id="form_info" onSubmit={handleSubmit}>
        <div id="main">
          <h1 id="alignLeft">Edit Course</h1>
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
            defaultValue={courseInfo.course_ID}
            name="ID"
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
            name="name"
            id="name"
            onChange={handleInputChange}
            defaultValue={courseInfo.course_name}
            required
          ></input>
        </fieldset>
        <fieldset>
          <h4>Course Day:</h4>
          <input
            placeholder="Input weekday here"
            type="text"
            tabIndex="3"
            name="day"
            id="day"
            onChange={handleInputChange}
            defaultValue={courseInfo.day}
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
            defaultValue={courseInfo.time}
            required
          ></input>
        </fieldset>
        <fieldset>
          <h4>Department:</h4>
          <input
            placeholder="Input faculty here"
            type="text"
            tabIndex="5"
            name="department"
            id="department"
            onChange={handleInputChange}
            defaultValue={courseInfo.department}
            required
          ></input>
        </fieldset>
        <fieldset>
          <h4>Teacher in Charge:</h4>
          <input
            placeholder="Input instructor's name here"
            type="text"
            tabIndex="6"
            name="instructor"
            id="instructor"
            onChange={handleInputChange}
            defaultValue={courseInfo.instructor}
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
            defaultValue={courseInfo.capacity}
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
            defaultValue={courseInfo.place}
            required
          ></input>
        </fieldset>
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
            className="custom-btn btn"
          >
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default AdminEditCourse;
