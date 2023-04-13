import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "../form.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getCourse } from "../../../redux/actions/courseAction";

function AdminEditCourse(props) {
  const param = useParams();
  const navigate = useNavigate();
  const location = useLocation().state;
  let courseInfo = JSON.parse(JSON.stringify(location.courseInfo));
  const [classInfo, setClassInfo] = useState([]);
  const course = useSelector((state) => state.course);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCourse('CHEM1070'))
    .then((response) => setClassInfo(response))
    .catch((error) => console.log(error));
  }, []);
  const [formData, setFormData] = useState({
    ID: "",
    name: "",
    day: "",
    time: "",
    department: "",
    instructor: "",
    capacity: "",
    place: "",
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
            placeholder="Input in the format: hh:mm-hh:mm"
            type="text"
            tabIndex="4"
            name="time"
            id="time"
            pattern="\d{2}:\d{2}-\d{2}:\d{2}"
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
