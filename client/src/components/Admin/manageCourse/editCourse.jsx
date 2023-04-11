import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../form.css";

function AdminEditCourse(props) {
  const navigate = useNavigate();
  const location = useLocation().state;
  let courseInfo = JSON.parse(JSON.stringify(location.courseInfo));

  const [inputValue, setInputValue] = useState("default value");

  return (
    <div id="resize">
      <form id="form_info" action="" method="post">
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

export default AdminEditCourse;
