import React from "react";
import { DayPilot, DayPilotCalendar } from "@daypilot/daypilot-lite-react";
import "./classSchedule.css";

function ClassSchedule() {
  return <DayPilotCalendar viewType="Week" />;
}

export default ClassSchedule;
