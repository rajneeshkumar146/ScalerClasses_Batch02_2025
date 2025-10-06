import React from 'react'
import { useState } from 'react';

function AddTask_betterVersion() {
    const [taskArr, setTasks] = useState([]);

    const addtask = (inputValue) => {
        if (inputValue != "" && inputValue != null && inputValue != undefined) {
            let newTaskArr = [...taskArr, inputValue];
            setTasks(newTaskArr);
        }
    }

    return (
        <>
            <InputBox addTask={addtask} />
            <List taskArr={taskArr} />
        </>
    )
}

function InputBox(props) {
    const [inputValue, setInputValue] = useState("");
    const handleUserInput = (event) => {
        setInputValue(event.target.value);
    }

    const addTaskToChild = () => {
        props.addTask(inputValue);
        setInputValue("");
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

function List(props) {
    return <div className='list'>
        <ul>
            {
                props.taskArr.map((task, index) => <li key={index}>{task}</li>)
            }
        </ul>
    </div>
}

export default AddTask_betterVersion