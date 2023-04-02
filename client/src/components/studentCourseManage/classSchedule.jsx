import React from "react";
import { DayPilot, DayPilotCalendar } from "@daypilot/daypilot-lite-react";
import "./classSchedule.css";

function ClassSchedule() {
  return (
    <div>
      <h1>Weekly Schedule</h1>
      <DayPilotCalendar viewType="Week" />
    </div>
  );
}

export default ClassSchedule;
