import React from 'react'

function stopWatch() {


    const startTimer = () => {}

    const stopTimer = () => {}

    const resetTimer = () => {}

    const formatTime = (time) => {

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

export default stopWatch