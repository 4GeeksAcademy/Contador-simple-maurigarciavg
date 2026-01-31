import React from 'react';
import ReactDOM from 'react-dom/client';
import SecondsCounter from './components/SecondsCounter.jsx';

let seconds = 0;
let minutes = 0;
let hours = 0;

let secondsDown = 59;
let minutesDown = 1;
let hoursDown = 0;

let cronometroInterval = null;
let countDownInterval = null;

const root = ReactDOM.createRoot(document.getElementById('root'));


const renderApp = () => {
  root.render(
    <SecondsCounter
      hours={hours}
      minutes={minutes}
      seconds={seconds}
      hoursDown={hoursDown}
      minutesDown={minutesDown}
      secondsDown={secondsDown}
      onStart={startTimers}
      onStop={stopTimers}
      onReset={resetTimers}
    />
  );
};


function startTimers() {
  if (cronometroInterval || countDownInterval) return;

  cronometroInterval = setInterval(() => {
    seconds++;
    if (seconds === 60) { seconds = 0; minutes++; }
    if (minutes === 60) { minutes = 0; hours++; }
    renderApp();
  }, 1000);

  countDownInterval = setInterval(() => {
    secondsDown--;
    if (secondsDown < 0) {
      secondsDown = 59;
      minutesDown--;
    }
    if (minutesDown < 0) {
      minutesDown = 59;
      hoursDown--;
    }


    if (hoursDown === 0 && minutesDown === 0 && secondsDown === 0) {
      clearInterval(countDownInterval);
      countDownInterval = null;

      const countdownElement = document.querySelector('.countdown');
      if (countdownElement) {
        countdownElement.classList.add('boom');
        document.body.classList.add('cracked-screen');

        setTimeout(() => {
          countdownElement.classList.remove('boom');
          document.body.classList.remove('cracked-screen');


          secondsDown = 59;
          minutesDown = 1;
          hoursDown = 0;
          renderApp();
        }, 3000);
      }
    }
    renderApp();
  }, 100); //deja que el contador llegue a 0, ponlo mas rapido si quieres :)
}


function stopTimers() {
  clearInterval(cronometroInterval);
  clearInterval(countDownInterval);
  cronometroInterval = null;
  countDownInterval = null;
}

function resetTimers() {
  stopTimers();
  seconds = 0; minutes = 0; hours = 0;
  secondsDown = 59; minutesDown = 1; hoursDown = 0;
  renderApp();
}


renderApp();
startTimers();




