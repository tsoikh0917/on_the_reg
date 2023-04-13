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
    console.log("test");
    dispatch(getClass(id));
  }, []);

  let classInfo = JSON.parse(JSON.stringify(classes[0]));

  const [formData, setFormData] = useState({
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
    console.log(formData);
  };
  
  const handleSubmit = async (event) => {
    console.log(formData)
    dispatch(updateClass(classInfo.classID, formData));
    window.history.back();
    event.preventDefault();
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
          <h4>Course Code:</h4>
          <input
            placeholder="Input faculty here"
            type="text"
            tabIndex="5"
            name="courseID"
            id="courseID"
            onChange={handleInputChange}
            defaultValue={classInfo.courseID}
            required
          ></input>
        </fieldset>
        <fieldset>
          <h4>Course Day:</h4>
          <input
            placeholder="Input week here"
            type="text"
            tabIndex="3"
            name="week"
            id="start_time"
            week={handleInputChange}
            defaultValue={classInfo.week}
            required
          ></input>
        </fieldset>
        <fieldset>
          <h4>Course Start Time:</h4>
          <input
            placeholder="Input in the format: hh:mm-hh:mm"
            type="text"
            tabIndex="4"
            name="start_time"
            id="start_time"
            //pattern="\d{2}:\d{2}-\d{2}:\d{2}"
            onChange={handleInputChange}
            defaultValue={classInfo.start_time}
            required
          ></input>
        </fieldset>
        <fieldset>
          <h4>Course End Time:</h4>
          <input
            placeholder="Input in the format: hh:mm-hh:mm"
            type="text"
            tabIndex="4"
            name="end_time"
            id="end_time"
            //pattern="\d{2}:\d{2}-\d{2}:\d{2}"
            onChange={handleInputChange}
            defaultValue={classInfo.end_time}
            required
          ></input>
        </fieldset>
        <fieldset>
          <h4>Teacher in Charge:</h4>
          <input
            placeholder="Input instructor's name here"
            type="text"
            tabIndex="6"
            name="lectureName"
            id="lectureName"
            onChange={handleInputChange}
            defaultValue={classInfo.lectureName}
            required
          ></input>
        </fieldset>
        <fieldset>
          <h4>Maximum  Capacity:</h4>
          <input
            placeholder="Input maximum capacity of the course here"
            type="number"
            tabIndex="7"
            name="capacity"
            id="capacity"
            onChange={handleInputChange}
            defaultValue={classInfo.maxCapacity}
            required
          ></input>
        </fieldset>
        <fieldset>
          <h4>Course Place:</h4>
          <input
            placeholder="Input location for the course lecture here"
            type="text"
            tabIndex="8"
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

export default AdminEditClass;
