import React from 'react'
import { useState } from 'react'

function UseStateExample() {
    const [count, setCount] = useState(0);

    const handleCount = () => {
        setInterval(() => {
            setCount(count => count + 1);
        }, 1000);
    };
    return (
        <>
            <h3>{count}</h3>
            <button onClick={handleCount}>Start</button>
        </>
    )
}

export default UseStateExample