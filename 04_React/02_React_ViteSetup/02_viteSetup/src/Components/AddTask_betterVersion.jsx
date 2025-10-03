import React from 'react'

function AddTask_betterVersion() {
    
    return (
        <>
            <InputBox />
            <List />
        </>
    )
}

function InputBox() {

    const handleUserInput = (event) => {
        setInputValue(event.target.value);
    }

    const addTaskToChild = () => {
        // ?????  
    }

    return (
        <>
            <div className='inputBox'>
                <input type="text" value={inputValue} onChange={handleUserInput} placeholder="Enter your task"></input>
                <button onClick={addTaskToChild}>Add Task</button>
            </div>
        </>
    )
}

function List() {
    return <div className='list'>
        <ul>
            {
                taskArr.map((task, index) => <li key={index}>{task}</li>)
            }
        </ul>
    </div>
}

export default AddTask_betterVersion