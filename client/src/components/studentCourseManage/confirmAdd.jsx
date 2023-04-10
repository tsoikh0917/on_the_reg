import React, { useState } from "react";
import "./confirmAdd.css";
function Confirm() {
  const [isChecked, setIsChecked] = useState(false);
  function handleCheckboxChange() {
    setIsChecked(!isChecked);
  }
  return (
    <div>
      <h1>CSCI3100</h1>
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
    </div>
  );
}

export default Confirm;
