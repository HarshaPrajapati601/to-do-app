import "./styles.css";
import { useEffect, useState } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(0);
  const [isPaused, setPause] = useState(true);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTimer((timer) => timer + 10);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setPause(false);
  };

  const stopTime = () => {
    setIsActive(false);
    setPause(!isPaused);
  };

  const resetTime = () => {
    setIsActive(false);
    setPause(!isPaused);
    setTimer(0);
  };
  // start, stopper, reset

  // toggle
  return (
    <div className="Timer">
      <h1>Hello CodeSandbox</h1>
      <h2>{timer}</h2>
      <div className="timer">
        <span className="digits">
          {("0" + Math.floor((timer / 60000) % 60)).slice(-2)}:
        </span>
        <span className="digits">
          {("0" + Math.floor((timer / 1000) % 60)).slice(-2)}.
        </span>
        <span className="digits mili-sec">
          {("0" + ((timer / 10) % 100)).slice(-2)}
        </span>
      </div>

      {!isPaused ? (
        <button onClick={() => stopTime()}> Stop </button>
      ) : (
        <button onClick={() => handleStart()}> Start </button>
      )}
      <button onClick={() => resetTime()}> Reset </button>
    </div>
  );
}

export default Timer;