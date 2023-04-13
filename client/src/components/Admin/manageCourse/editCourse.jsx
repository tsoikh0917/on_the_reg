import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../form.css";
import { useDispatch, useSelector } from "react-redux";
import { getCourse, updateCourse } from "../../../redux/actions/courseAction";

function AdminEditCourse() {
  const { id } = useParams();
  const navigate = useNavigate();

  const course = useSelector((state) => state.course);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCourse(id));
  }, []);

  let courseInfo = JSON.parse(JSON.stringify(course[0]));

  const [formData, setFormData] = useState({
    courseID: courseInfo.courseID,
    courseName: courseInfo.courseName,
    description: courseInfo.description,
    faculty: courseInfo.faculty
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };
  const handleSubmit = async (event) => {
    console.log(formData);
    dispatch(updateCourse(courseInfo.courseID, formData));
    window.history.back();
    event.preventDefault();
  };

  const handleClick = (event) => {
    event.preventDefault();
    navigate(-1);
  }

  if (course.length == 1) {
    return (
      <div id="resize">
        <form id="form_info" onSubmit={handleSubmit}>
          <div id="main">
            <h1 id="alignLeft">Edit Course</h1>
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
              maxLength={50}
              onChange={handleInputChange}
              defaultValue={courseInfo.courseID}
              disabled
              required
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
              defaultValue={courseInfo.courseName}
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
              maxLength={30}
              onChange={handleInputChange}
              defaultValue={courseInfo.faculty}
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
              maxLength={400}
              onChange={handleInputChange}
              defaultValue={courseInfo.description}
              required
            />
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

export default AdminEditCourse;
