import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";

function ReactCalendar() {
  const [date, setDate] = useState(new Date());
  const [innerWidth, setInnerWidth] = useState(0);

  const windowHandler = () => {
    setInnerWidth(window.innerWidth);
  };

  useEffect(() => {
    windowHandler();

    window.addEventListener("resize", windowHandler);

    return () => window.removeEventListener("resize", windowHandler);
  });

  return (
    <div>
      <h1 className="text-2xl font-bold">React Calendar</h1>
      <div>
        <Calendar
          onChange={setDate}
          value={date}
          minDate={new Date()}
          showDoubleView={innerWidth > 1024}
          showNeighboringMonth={false}
          calendarType={"ISO 8601"}
          showNavigation={true}
          locale={"de-DE"}
        />
      </div>
      <p>Selected Date: {date.toDateString()}</p>
    </div>
  );
}

export default ReactCalendar;
