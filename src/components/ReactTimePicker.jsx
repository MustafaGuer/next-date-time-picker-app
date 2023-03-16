import React, { useState, useEffect, useRef, useCallback } from "react";

const ReactTimePicker = () => {
  const [pickupTime, setPickupTime] = useState("");
  const [times, setTimes] = useState([]);

  const scrollableContainerRef = useRef();
  
  const scrollToCurrentTime = useCallback(
    (currentTime) => {
      const timeIndex = times.indexOf(currentTime);
      const elementHeight =
        scrollableContainerRef.current.scrollHeight / times.length;
      const containerHeight = scrollableContainerRef.current.offsetHeight;
      const elementOffset = timeIndex * elementHeight;
      const scrollPosition =
        elementOffset - containerHeight / 2 + elementHeight / 2;
      scrollableContainerRef.current.scrollTo(0, scrollPosition);
      console.log();
    },
    [times]
  );

  useEffect(() => {
    const currentHour = new Date().getHours() + 1;
    const currentMinute = Math.floor(new Date().getMinutes() / 5) * 5;
    const currentTime = `${
      currentHour < 10 ? "0" + currentHour : currentHour
    }:${currentMinute < 10 ? "0" + currentMinute : currentMinute}`;

    setPickupTime(currentTime);
    scrollToCurrentTime(currentTime);
  }, [scrollToCurrentTime]);

  useEffect(() => {
    const timesArray = [];
    for (let i = 0; i < 24; i++) {
      for (let j = 0; j < 12; j++) {
        if (j === 0) timesArray.push(`${i < 10 ? "0" + i : i}:${"00"}`);
        else if (j === 1) timesArray.push(`${i < 10 ? "0" + i : i}:${"05"}`);
        else timesArray.push(`${i < 10 ? "0" + i : i}:${5 * j}`);
      }
    }
    setTimes(timesArray);
  }, []);

  const handleTimeClick = (time) => {
    setPickupTime(time);
    scrollToCurrentTime(time);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">React Time Picker</h1>

      <div
        className="h-[300px] overflow-auto scrollable-container"
        ref={scrollableContainerRef}
      >
        {times.map((time) => (
          <div
            className={`cursor-pointer  ${
              time === pickupTime ? "text-blue-500 font-bold" : ""
            }`}
            onClick={() => handleTimeClick(time)}
            key={time}
          >
            {time}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReactTimePicker;
