import React from "react";
import styles from "./Calendar.module.css";
import { zeroPad, getDaysInMonth } from "@/helpers/calendar";
import { MONTHS, WEEK_DAYS } from "@/helpers/calendar";

function Calendar() {
  const logDayHander = (day) => {
    const date = new Date(day);
    console.log(date);
    // console.log(day);
  };

  return (
    <>
      <div className={`${styles.gridContainer} mx-5`}>
        <h2>
          {MONTHS[new Date().getMonth()].toString().toUpperCase()}{" "}
          {new Date().getFullYear()}
        </h2>

        <div className={styles.gridHead}>
          {WEEK_DAYS.map((day) => (
            <div key={day}>{day[0].toUpperCase() + day.slice(1)}</div>
          ))}
        </div>

        <div className={`${styles.grid}`}>
          {getDaysInMonth(new Date().getMonth(), new Date().getFullYear()).map(
            (day) => (
              <button
                onClick={() => logDayHander(day)}
                disabled={day.getDate() < new Date().getDate()}
                className={`mx-1 w-10 h-10 ${
                  day.getDate() < new Date().getDate() && "text-slate-300"
                }`}
                key={day.toString()}
              >
                {zeroPad(day.getDate().toString(), 2)}
              </button>
            )
          )}
        </div>
      </div>

      {/* <div className={`${styles.gridContainer} mx-5`}>
        <h2>
          {MONTHS[new Date().getMonth() + 1].toString().toUpperCase()}{" "}
          {new Date().getFullYear()}
        </h2>

        <div className={styles.gridHead}>
          <div>{WEEK_DAYS[0][0].toUpperCase() + WEEK_DAYS[0].slice(1)}</div>
          <div>{WEEK_DAYS[1][0].toUpperCase() + WEEK_DAYS[1].slice(1)}</div>
          <div>{WEEK_DAYS[2][0].toUpperCase() + WEEK_DAYS[2].slice(1)}</div>
          <div>{WEEK_DAYS[3][0].toUpperCase() + WEEK_DAYS[3].slice(1)}</div>
          <div>{WEEK_DAYS[4][0].toUpperCase() + WEEK_DAYS[4].slice(1)}</div>
          <div>{WEEK_DAYS[5][0].toUpperCase() + WEEK_DAYS[5].slice(1)}</div>
          <div>{WEEK_DAYS[6][0].toUpperCase() + WEEK_DAYS[6].slice(1)}</div>
        </div>

        <div className={`${styles.grid}`}>
          {getDaysInMonth(
            new Date().getMonth() + 1,
            new Date().getFullYear()
          ).map((day) => (
            <button
              onClick={() =>
                console.log(
                  `${zeroPad(day.getDate(), 2)}.${zeroPad(
                    day.getMonth() + 1,
                    2
                  )}.${day.getFullYear()}`
                )
              }
              className="mx-1 w-10 h-10"
              key={day.toString()}
            >
              {zeroPad(day.getDate().toString(), 2)}
            </button>
          ))}
        </div>
      </div> */}

      {/* <div className="w-1/3 flex flex-wrap gap-3">
        {getDaysInMonth(new Date().getMonth(), new Date().getFullYear()).map(
          (day) => (
            <button
              onClick={() => logDayHander(day)}
              disabled={day.getDate() < new Date().getDate()}
              className={`mx-1 w-10 h-10 ${
                day.getDate() < new Date().getDate() && "text-slate-300"
              }`}
              key={day.toString()}
            >
              {zeroPad(day.getDate().toString(), 2)}
            </button>
          )
        )}
      </div>
      <div className="w-1/3 flex flex-wrap gap-3">
        {getDaysInMonth(
          new Date().getMonth() + 1,
          new Date().getFullYear()
        ).map((day) => (
          <button
            onClick={() =>
              console.log(
                `${zeroPad(day.getDate(), 2)}.${zeroPad(
                  day.getMonth() + 1,
                  2
                )}.${day.getFullYear()}`
              )
            }
            className="mx-1 w-10 h-10"
            key={day.toString()}
          >
            {zeroPad(day.getDate().toString(), 2)}
          </button>
        ))}
      </div> */}
    </>
  );
}

export default Calendar;
