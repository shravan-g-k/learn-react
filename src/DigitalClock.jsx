import { useState, useEffect } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervaId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervaId);
    };
  });

  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;

    const formattedTime = `${hours}:${fixSpaces(minutes)}:${fixSpaces(seconds)} ${ampm}`;
    return formattedTime;
    
  }

  function fixSpaces(num) {
    if (num < 10) {
      return `0${num}`;
    }
    return num;
  }

  return (
    <div className="clock-container">
      <div className="clock">
        {formatTime()}
      </div>
    </div>
  );
}

export default DigitalClock;