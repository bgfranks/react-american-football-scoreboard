import React, { useState, useEffect } from "react";

function CountDown({ minutes = 1, seconds = 0 }) {
  const [over, setOver] = useState(false);
  const [time, setTime] = useState({
    minutes: minutes,
    seconds: seconds,
  });

  const tick = () => {
    // Times Up
    if (time.minutes === 0 && time.seconds === 0) {
      setOver(true);
    } else if (time.seconds === 0) {
      // decrement minutes
      setTime({
        minutes: time.minutes - 1,
        seconds: 59,
      });
    } else {
      // decrement seconds
      setTime({
        minutes: time.minutes,
        seconds: time.seconds - 1,
      });
    }
  };

  useEffect(() => {
    let timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  return (
    <div className="timer">{`${time.minutes
      .toString()
      .padStart(2, "0")}:${time.seconds.toString().padStart(2, "0")}`}</div>
  );
}

export default CountDown;
