import React from "react";
import { DayPilot, DayPilotCalendar } from "@daypilot/daypilot-lite-react";
import "./classSchedule.css";
import Calendar from "./calender";

function ClassSchedule() {
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
