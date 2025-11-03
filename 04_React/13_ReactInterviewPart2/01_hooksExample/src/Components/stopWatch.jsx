import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

function StopWatch() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const timerRef = useRef(null);

    const startTimer = () => {
        if (!isRunning) {
            setIsRunning(true);

            timerRef.current = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        }
    }

    useEffect(() => {
        resetTimer()
        return () =>
            clearInterval(timerRef.current);
    }, []);

    const stopTimer = () => {
        if (isRunning) {
            console.log("Ref: ", timerRef);
            clearInterval(timerRef.current);
            setIsRunning(false);
        }
    }

    const resetTimer = () => {
        clearInterval(timerRef.current);
        setIsRunning(false);
        setTime(0);
    }

    const formatTime = (time) => {
        const getSeconds = `0${time % 60}`.slice(-2);

        const minutes = Math.floor(time / 60);
        const getMinutes = `0${minutes % 60}`.slice(-2);

        const hour = Math.floor(time / 3600);
        const getHour = `0${hour}`.slice(-2);

        return `${getHour} : ${getMinutes} : ${getSeconds}`;
    }

    return (
        <div>
            <h1>{formatTime(time)}</h1>
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
            <button onClick={resetTimer}>Reset</button>
        </div>
    )
}

export default StopWatch