import React, { Component } from "react";
import { DayPilot, DayPilotCalendar } from "daypilot-pro-react";

class Calendar extends Component {

  // constructor
  constructor(props) {
    super(props);
    this.calendarRef = React.createRef();
    // set state
    this.state = {
      locale: "zh-cn",
      viewType: "Week",
      cellHeight: 30,
      timeRangeSelectedHandling: "Enabled",
      onTimeRangeSelected: async (args) => {
        const modal = await DayPilot.Modal.prompt(
          "Create a new event:",
          "Event 1"
        );
        const dp = args.control;
        dp.clearSelection();
        if (modal.canceled) {
          return;
        }
        dp.events.add({
          start: args.start,
          end: args.end,
          id: DayPilot.guid(),
          text: modal.result,
        });
      },
      // event handling
      eventDeleteHandling: "Update",
      onEventDeleted: (args) => {
        args.control.message("Event deleted: " + args.e.text());
      },
      eventMoveHandling: "Update",
      onEventMoved: (args) => {
        args.control.message("Event moved: " + args.e.text());
      },
      eventResizeHandling: "Update",
      onEventResized: (args) => {
        args.control.message("Event resized: " + args.e.text());
      },
      eventClickHandling: "Edit",
      eventEditHandling: "Update",
      onEventEdited: (args) => {
        args.control.message("Event edited: " + args.e.text());
      },
      eventHoverHandling: "Disabled",
    };
  }

  componentDidMount() {
    // load resource and event data
    this.setState({
      startDate: DayPilot.Date.today(),
      events: [
        {
          id: 1,
          text: "Event 1",
          start: DayPilot.Date.today().addHours(10),
          end: DayPilot.Date.today().addHours(14),
        },
      ],
    });
  }

  get calendar() {
    return this.calendarRef.current.control;
  }

  // render the calendar
  render() {
    return (
      <div>
        <DayPilotCalendar {...this.state} ref={this.calendarRef} />
      </div>
    );
  }
}

export default Calendar;
