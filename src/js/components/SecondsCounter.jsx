import React from "react";

import { useState, useEffect } from "react";

function SecondsCounter() {

    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);

    useEffect(() => {
        setSeconds(seconds + 1)
    }, [1000]);


     useEffect(() => {
        setMinutes(minutes + 1)
    }, []);

return (
    <div>
        <p>{minutes} : {seconds} </p>

    </div>
)

}



export default SecondsCounter;
