import React, { useState } from "react";
import Calendar from "react-calendar";
import { WEEK_DAYS } from "@/helpers/calendar";

function ReactCalendar() {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <h1 className="text-2xl font-bold">React Calendar</h1>
      <div>
        <Calendar
          onChange={setDate}
          value={date}
          minDate={new Date()}
          showDoubleView={true}
          showNeighboringMonth={false}
          calendarType={"ISO 8601"}
          showNavigation={true}
          locale={'de-DE'}
        />
      </div>
      <p>Selected Date: {date.toDateString()}</p>
    </div>
  );
}

export default ReactCalendar;
