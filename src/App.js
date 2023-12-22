import { useState } from "react";
import "./App.css";
import { ReactComponent as ArrowDown } from "./assets/down-arrow.svg";
import { ReactComponent as ArrowUp } from "./assets/up-arrow.svg";
import { ReactComponent as Start } from "./assets/start.svg";
import { ReactComponent as Restart } from "./assets/restart.svg";
import { ReactComponent as Pause } from "./assets/pause.svg";
function App() {
  const [breakValue, setBreakValue] = useState(5);
  const [sessionValue, setSessionValue] = useState(25);
  const [label, setLabel] = useState("Session");

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">25 + 5 Clock</h1>
        <div className="container">
          <h2 className="break" id="break-label">
            Break Length
            <br />
            <div className="container-values">
              <button id="session-decrement " className="decrement">
                <ArrowDown
                  style={{ width: "50px", height: "50px" }}
                  onClick={() => {
                    if (breakValue > 1)
                      setBreakValue((prevState) => prevState - 1);
                  }}
                />
              </button>
              <span
                style={{ fontSize: "32px" }}
                className="value"
                id="break-length"
              >
                {breakValue}
              </span>
              <button
                onClick={() => {
                  setBreakValue((prevState) => prevState + 1);
                }}
                id="session-increment"
                className="increment"
              >
                <ArrowUp style={{ width: "50px", height: "50px" }} />
              </button>
            </div>
          </h2>

          <h2 className="session" id="session-label">
            Session Length
            <br />
            <div className="container-values">
              <button
                id="session-decrement "
                className="decrement"
                onClick={() => {
                  sessionValue > 1 &&
                    setSessionValue((prevState) => prevState - 1);
                }}
              >
                <ArrowDown style={{ width: "50px", height: "50px" }} />
              </button>
              <span
                style={{ fontSize: "32px" }}
                className="value"
                id="session-length"
              >
                {sessionValue}
              </span>
              <button
                id="session-increment"
                className="increment"
                onClick={() => {
                  setSessionValue((prevState) => prevState + 1);
                }}
              >
                <ArrowUp style={{ width: "50px", height: "50px" }} />
              </button>
            </div>
          </h2>
        </div>
        <div className="clock-container">
          <h2 id="timer-label" className="label">
            {label}
          </h2>
          <h1 className="timer-value" id="time-left">
            {sessionValue}:00
          </h1>
          <Start className="icon-start" />
          <Pause className="icon-pause" />
          <Restart className="icon-restart" />
        </div>
      </header>
    </div>
  );
}

export default App;
