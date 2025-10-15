import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import userSlice from '../../redux/userSlice';
import { fetchUserMiddleware } from '../../redux/middleWare/userMiddleWare';

function UserRedux() {
    const actions = userSlice.actions;
    const dispatch = useDispatch();

    const { user, isError, isLoading, param, value } = useSelector((store) => store.userState);

    useEffect(() => {
        if (param != null) {
            console.log("Param:  ", param);
            dispatch(fetchUserMiddleware(param));
        }
    }, [param]);

    const handleParams = () => {
        dispatch(actions.setParam(value));
    }


    const heading = <>
        <h2> User Example</h2>
        <input
            type="text"
            value={value}
            onChange={(event) => { dispatch(actions.setValue(event.target.value))}}>
        </input>
        <button onClick={handleParams}> Send Params</button>
    </>

    if (isLoading) {
        return <>
            {heading}
            <h3>...Loading</h3>
        </>
    }

    if (isError) {
        return <>
            {heading}
            <h3>Error occcured</h3>
        </>
    }

    return (
        <>
            {heading}
            <h4> Name : {user.name} </h4>
            <h4> Phone : {user.phone} </h4>
        </>
    )
}

export default UserRedux
