import React, { useState, useEffect } from "react";
import "./classSchedule.css";
import Calendar from "./calender";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getCourse } from "../../redux/actions/courseAction";

// this function is used to show the class schedule
function ClassSchedule() {
  const courseInfo = useSelector((state) => state.course);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCourse("CSCI3100"));
  }, []);

  //html part
  return (
    <div>
      <h1>Class Planner</h1>
      <div id="scheduleTable">
        <Calendar courseInfo={courseInfo} />
      </div>
    </div>
  );
}

export default ClassSchedule;
