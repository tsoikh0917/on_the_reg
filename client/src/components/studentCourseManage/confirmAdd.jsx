import React, { useState, useEffect } from "react";
import axios from "axios";
import "./confirmAdd.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createRegisteredCourse } from "../../redux/actions/registerCourseForStudentAction";

function Confirm() {
  const navigate = useNavigate();
  const location = useLocation().state;
  const courseInfo = JSON.parse(JSON.stringify(location.courseInfo));
  const classInfo = JSON.parse(JSON.stringify(location.classOut));
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("user: " + user.userID);
  }, [user]);
  const handleAddCourse = () => {
    try {
      console.log(classInfo.classId);
      dispatch(
        createRegisteredCourse(
          user.userID,
          courseInfo.courseID,
          classInfo.classID
        )
      ); //need to add the studentId HERE
    } catch (error) {
      console.log(error.message);
    }

    navigate("/search");
  };

  const formatTime = (value) => {
    const date = new Date(value);
    const timeStr = date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    return timeStr;
  };
  const startTime = formatTime(classInfo.start_time);
  const endTime = formatTime(classInfo.end_time);

  const [isChecked, setIsChecked] = useState(false);

  const [showWarn, setWarn] = useState(false);

  const [isBlurred, setIsBlurred] = useState(false);

  const toggleWarn = () => {
    setWarn(!showWarn);
    setIsBlurred(!isBlurred);
  };

  function handleCheckboxChange() {
    setIsChecked(!isChecked);
  }
  return (
    <div>
      {showWarn && (
        <div className="warning">
          <p className="warning-text">This class is already full!</p>
          <button onClick={toggleWarn} id="rmB" className="yes">
            <p className="warning-text">Yes</p>
          </button>
          <button onClick={toggleWarn} id="rmB" className="no">
            <p className="warning-text">No</p>
          </button>
        </div>
      )}
      <h1>
        {courseInfo.courseID} - {courseInfo.courseName}
      </h1>
      <button onClick={() => navigate(-1)} className="custom-btn b-search">
        <span>Back</span>
      </button>

      <div className="description">
        <h2 className="description-title">Course Outline:</h2>
        <p className="description-content">{courseInfo.description}</p>
      </div>
      <div className="description">
        <h2 className="description-title">Course Detail:</h2>
        <p className="description-content">
          Time: {startTime} - {endTime}
        </p>
        <p className="description-content">Class ID: {classInfo.classID}</p>
        <p className="description-content">Day: {classInfo.week}</p>
        <p className="description-content">Place: {classInfo.location}</p>
        <p className="description-content">Department: {courseInfo.faculty}</p>

        <p className="description-content">
          Instructor: {classInfo.lectureName}
        </p>
        <p className="description-content">Capacity: {classInfo.capacity}</p>
      </div>

      {classInfo.capacity == 0 ? (
        <button onClick={toggleWarn} className="custom-btn b-confirm">
          Add
        </button>
      ) : (
        <button
          className="custom-btn b-confirm"
          onClick={() => handleAddCourse()}
        >
          Add
        </button>
      )}
    </div>
  );
}

export default Confirm;
