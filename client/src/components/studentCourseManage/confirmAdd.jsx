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
  function handleCheckboxChange() {
    setIsChecked(!isChecked);
  }
  return (
    <div>
      <h1>
        {courseID} - {courseName}
      </h1>
      <div className="description">
        <h2 className="description-title">Course Outline:</h2>
        <p className="description-content">This is the course outline</p>
      </div>
      <div className="description">
        <h2 className="description-title">Course Date:</h2>
        <p className="description-content">1/1 ,1/1 ,1/1 ,1/1 ,1/1 ,1/1</p>
      </div>
      <div className="description">
        <h2 className="description-title">Course Availability:</h2>
        <p className="description-content">
          The course is full of capacity: 150/150
        </p>
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
