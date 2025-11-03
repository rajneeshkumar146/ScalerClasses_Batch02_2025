import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

/**
 * The useRef hook in React is a powerful tool for directly accessing and interacting 
 * with DOM elements and for persisting values across renders without causing re-renders.
 *  
 * 
 * How useRef Works
 * 
 * Creating a Reference: You can create a reference using useRef(initialValue). 
 * This returns a mutable object with a current property, which is initialized to the 
 * passed initialValue.
 * 
 * Persisting Values: Unlike state, changes to the current property of the ref do not 
 * trigger a re-render. This makes refs perfect for storing values that should persist 
 * across renders without affecting the UI.
 * 
 * Accessing DOM Elements: You can assign a ref to a DOM element using the ref attribute 
 * in JSX. This allows you to directly interact with the DOM element, similar to 
 * document.querySelector in vanilla JavaScript.
 */

function FocusInput() {
    const inputRef = useRef(null) // create a reference using useRef( initialValue)

    const focusInput = () => {
        console.log(inputRef.current)
        inputRef.current.focus();
    }

    useEffect(() => {
        // focus the input element
        focusInput()
    }, [])

    return (
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={focusInput}>Focus Input</button>
        </div>
    )
}

export default FocusInput