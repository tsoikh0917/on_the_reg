import React from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "../form.css";

function AdminEditCourse(props) {
  const navigate = useNavigate();
  const { type } = useParams();
  const location = useLocation().state;
  let courseInfo = JSON.parse(JSON.stringify(location.courseInfo));

  React.useEffect(() => {}, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
          <h4>Course ID:</h4> engineering?
          <input
            placeholder="Input course code here"
            type="text"
            tabIndex="1"
            value={courseInfo.course_ID}
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
            value={courseInfo.course_name}
            required
          ></input>
        </fieldset>
        <fieldset>
          <h4>Course Day:</h4>
          <input
            placeholder="Input weekday here"
            type="text"
            tabIndex="3"
            value={courseInfo.day}
            required
          ></input>
        </fieldset>
        <fieldset>
          <h4>Course Time:</h4>
          <input
            placeholder="Input time slot in the format: hh:mm-hh:mm here"
            type="text"
            tabIndex="4"
            value={courseInfo.time}
            required
          ></input>
        </fieldset>
        <fieldset>
          <h4>Department:</h4>
          <input
            placeholder="Input faculty here"
            type="text"
            tabIndex="5"
            value={courseInfo.department}
            required
          ></input>
        </fieldset>
        <fieldset>
          <h4>Teacher in Charge:</h4>
          <input
            placeholder="Input instructor's name here"
            type="text"
            tabIndex="6"
            value={courseInfo.instructor}
            required
          ></input>
        </fieldset>
        <fieldset>
          <h4>Capacity:</h4>
          <input
            placeholder="Input maximum capacity of the course here"
            type="number"
            tabIndex="7"
            value={courseInfo.capacity}
            required
          ></input>
        </fieldset>
        <fieldset>
          <h4>Course Place:</h4>
          <input
            placeholder="Input location for the course lecture here"
            type="text"
            tabIndex="8"
            value={courseInfo.place}
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
