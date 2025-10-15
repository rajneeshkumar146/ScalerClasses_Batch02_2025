import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import counterSlice from '../../redux/counterSlice';

function CounterRedux() {
    const count = useSelector((store) =>
        store.counterState.count
    );

    const actions = counterSlice.actions;
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(actions.increment());
    }

    const handleDecrement = () => {
        dispatch(actions.decrement());
    }
    return (
        <>
            <button onClick={handleIncrement}>+</button>
            <h2>{count}</h2>
            <button onClick={handleDecrement}>-</button>

        </>
    )
}

export default CounterRedux
