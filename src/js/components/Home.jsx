import React, { useState, useEffect } from "react";

const Home = () => {
const [seconds, setSeconds] = useState(0);

useEffect(() => {
  setInterval(() => {
  seconds = seconds + 1;
}, 1000);

});



}

export default Home;
