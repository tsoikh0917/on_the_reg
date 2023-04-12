import React, { useState, useEffect } from "react";
import axios from "axios";
import "./confirmAdd.css";
import { useNavigate } from "react-router-dom";
function Confirm() {
  const navigate = useNavigate();
  const [classInfo, setClassInfo] = useState([]);
  useEffect(() => {
    axios
      .get("")
      .then((response) => setClassInfo(response.data))
      .catch((error) => console.log(error));
  }, []);
  const handleAddCourse = () => {
    axios
      .post("", classInfo)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    navigate("/enrollment");
  };

  const [isChecked, setIsChecked] = useState(false);
  var courseID = "CSCI3100";
  var courseName = "Software Engineering";
  var time = "Monday: 00:00-23:59";
  var place = "Lee Shau Kee Building LT";
  var department = "ERG";
  var Instructor = "Michael Lyu";
  var capacity = "150/150";
  function handleCheckboxChange() {
    setIsChecked(!isChecked);
  }
  return (
    <div>
      <h1>
        {courseID} - {courseName}
      </h1>
      <button onClick={() => navigate(-1)} className="custom-btn b-search">
        <span>Back</span>
      </button>

      <div className="description">
        <h2 className="description-title">Course Outline:</h2>
        <p className="description-content">This is the course outline</p>
      </div>
      <div className="description">
        <h2 className="description-title">Course Detail:</h2>
        <p className="description-content">Time: {time}</p>
        <p className="description-content">Department: {department}</p>
        <p className="description-content">Instructor: {Instructor}</p>
        <p className="description-content">Capacity: {capacity}</p>
      </div>
      <label className="checkbox-label">
        <input type="checkbox" />
        Add to waitlist if the course is full?
      </label>
      <button
        className="custom-btn b-confirm"
        onClick={() => handleAddCourse()}
      >
        Add
      </button>
    </div>
  );
}

export default Confirm;
