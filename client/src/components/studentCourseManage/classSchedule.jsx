import React, { useState, useEffect } from "react";
import "./classSchedule.css";
import Calendar from "./calender";
import axios from "axios";

function ClassSchedule() {
  const [classInfo, setClassInfo] = useState([]);
  useEffect(() => {
    axios
      .get("")
      .then((response) => setClassInfo(response.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h1>Weekly Schedule</h1>
      <div id="scheduleTable">
        <Calendar />
      </div>
    </div>
  );
}

export default ClassSchedule;
