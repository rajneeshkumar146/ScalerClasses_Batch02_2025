import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import counterSlice from '../../redux/counterSlice';



function CounterRedux() {
    // Step: 1
    const actions = counterSlice.actions;
    const dispatch = useDispatch();
   
    // Step: 2
    const count = useSelector((store) => store.counterState.count);


    return (
        <>
            <button onClick={() => dispatch(actions.increment())}>+</button>
            <h3>{count}</h3>
            <button onClick={() => dispatch(actions.decrement())}>-</button>
        </>
    )
}

export default CounterRedux