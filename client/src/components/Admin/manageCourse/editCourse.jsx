import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../form.css";
import { useDispatch, useSelector } from "react-redux";
import { getCourse, updateCourse } from "../../../redux/actions/courseAction";

// this function is used to edit a course
function AdminEditCourse(props) {
  // get the course id from the url
  const { id } = useParams();
  const navigate = useNavigate();

  // get the course info from the redux store
  const course = useSelector((state) => state.course);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCourse(id))
  }, []);

  // set the course info to the form
  const [courseInfo, setCourseInfo] = useState({});
  useEffect(() => {
    if (course.length == 1) {
      setCourseInfo(JSON.parse(JSON.stringify(course[0])));
    }
  }, [course]);

  // set the default value of the form
  const [formData, setFormData] = useState({
    courseID: "",
    courseName: "",
    description: "",
    faculty: ""
  });

  // set the default value of the form
  useEffect(() => {
    setFormData({
      courseID: courseInfo.courseID,
      courseName: courseInfo.courseName,
      description: courseInfo.description,
      faculty: courseInfo.faculty
    });
  }, [courseInfo]);

  // this function is used to handle the input change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // this function is used to handle the submit button
  const handleSubmit = async (event) => {
    dispatch(updateCourse(courseInfo.courseID, formData));
    window.history.back();
    event.preventDefault();
  };

  // this function is used to handle the back button
  const handleClick = (event) => {
    event.preventDefault();
    navigate(-1);
  }

  // this function is used to render the page
  if (courseInfo != undefined) {
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
              maxLength={8}
              onChange={handleInputChange}
              defaultValue={courseInfo.courseID}
              disabled
              required
            ></input>
          </fieldset>
          <fieldset>
            <h4>Ccourse Name:</h4>
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
              maxLength={10}
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
              maxLength={255}
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
