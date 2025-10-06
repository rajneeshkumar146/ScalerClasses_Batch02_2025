import React from 'react'
import { useState } from 'react'


function InputBox(addListItemCallBackFunctionProp) {
    const [inputValue, setInputValue] = useState("");

    const handleInput = (event) => {
        setInputValue(event.target.value);
    }

    const addTaskToChild = () => {
        addListItemCallBackFunctionProp.addListItem(inputValue);
        setInputValue("");
    }

    return (
        <>
            <div className='inputBox'>
                <input type="text" value={inputValue} onChange={handleInput} placeholder='Enter your message' />
                <button onClick={addTaskToChild}>Add Task</button>
            </div>
        </>
    )
}

export default InputBox