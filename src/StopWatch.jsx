import { useEffect, useRef, useState } from "react";

function StopWatch() {

  const [isRunning,setIsRunning] = useState(false);
  const [timeElapsed,setTimeElapsed] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);


  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setTimeElapsed(Date.now() - startTimeRef.current);
      }, 10);
    }
    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
    };
  }, [isRunning]);

  function formatTime() {
    const totalMilliseconds = timeElapsed;
    const minutes = Math.floor(totalMilliseconds / (60 * 1000));
    const seconds = Math.floor((totalMilliseconds % (60 * 1000)) / 1000);
    const milliseconds = totalMilliseconds % 1000;
    return `${minutes}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0').slice(0,2)}`;    
  }

  function start() {
    setIsRunning(true);
    startTimeRef.current = Date.now() - timeElapsed;
  }

  function stop() {
    setIsRunning(false);
    
  }

  function reset() {
    setIsRunning(false);
    setTimeElapsed(0);
  }

  return (
    <div className="stopwatch">
      <div className="display">
        {formatTime()}
      </div>
      <div className="buttons"> 
      <button className="start-button" onClick={start} >Start</button>
      <button className="stop-button" onClick={stop} >Stop</button>
      <button className="reset-button" onClick={reset} >Reset</button>
      </div>

    </div>
  );
  
}

export default StopWatch;