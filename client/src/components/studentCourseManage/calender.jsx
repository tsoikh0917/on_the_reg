import React, { Component } from "react";
import {
  DayPilot,
  DayPilotCalendar,
  DayPilotNavigator,
} from "@daypilot/daypilot-lite-react";
import "./CalendarStyles.css";

const styles = {
  wrap: {
    display: "flex",
  },
  left: {
    marginRight: "10px",
  },
  main: {
    flexGrow: "1",
  },
};

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.calendarRef = React.createRef();
    this.state = {
      viewType: "Week",
      durationBarVisible: false,
      timeRangeSelectedHandling: "Enabled",
      businessBeginsHour: 7,
      businessEndsHour: 19,

      eventMoveHandling: "Disabled",
      eventResizeHandling: "Disabled",
      timeRangeSelectedHandling: "Disabled",
    };
  }

  get calendar() {
    return this.calendarRef.current.control;
  }

  componentDidMount() {
    const events = [
      {
        id: 1,
        text: "Event 1",
        start: "2023-04-09T10:30:00",
        end: "2023-04-09T13:00:00",
      },
      {
        id: 2,
        text: "Event 2",
        start: "2023-04-10T09:30:00",
        end: "2023-04-10T11:30:00",
        backColor: "#6aa84f",
      },
      {
        id: 3,
        text: "Event 3",
        start: "2023-04-11T12:00:00",
        end: "2023-04-11T15:00:00",
        backColor: "#f1c232",
      },
      {
        id: 4,
        text: "Event 4",
        start: "2023-04-12T11:30:00",
        end: "2023-04-12T14:30:00",
        backColor: "#cc4125",
      },
    ];
    const dp = this.calendar;
    dp.dayBeginsHour = 6;
    dp.dayEndsHour = 20;
    dp.update();
    const startDate = "2023-04-09";
    const headerDateFormat = "dddd";

    this.calendar.update({
      startDate,
      headerDateFormat,
      events,
    });
  }

  render() {
    return (
      <div style={styles.wrap} id="cdr">
        <div style={styles.left}>
          <DayPilotNavigator
            selectMode={"week"}
            showMonths={3}
            skipMonths={3}
            startDate={"2023-04-09"}
            selectionDay={"2023-04-11"}
            onTimeRangeSelected={(args) => {
              this.calendar.update({
                startDate: args.day,
              });
            }}
          />
        </div>
        <div style={styles.main}>
          <DayPilotCalendar {...this.state} ref={this.calendarRef} />
        </div>
      </div>
    );
  }
}

export default Calendar;
