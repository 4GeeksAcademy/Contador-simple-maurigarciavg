import React from "react";

function SecondsCounter(props) {
  return (
    <div className="main-container">

      <div className="counters">
        <div className="seconds-counter">
          ⏱️ {props.hours.toString().padStart(2, '0')}:
          {props.minutes.toString().padStart(2, '0')}:
          {props.seconds.toString().padStart(2, '0')} ↑
        </div>

        <div className="countdown">
          ⏳ {props.hoursDown.toString().padStart(2, '0')}:
          {props.minutesDown.toString().padStart(2, '0')}:
          {props.secondsDown.toString().padStart(2, '0')} ↓
        </div>
      </div>

      <div className="buttons">
        <button className="start" onClick={props.onStart}>▶️</button>
        <button className="stop" onClick={props.onStop}>⏸️</button>
        <button className="restart" onClick={props.onReset}>🔄</button>
      </div>

    </div>



  );
}
export default SecondsCounter;

