import userSlice from "../userSlice";

const actions = userSlice.actions;
export const fetchUserMiddleware = (param) => {
    return async (dispatch) => {
        try {
            dispatch(actions.setUserLoading());
            const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${param}`);
            const userRes = await resp.json();

            console.log("User Res: ", userRes);
            dispatch(actions.setUserData(userRes));
        } catch (err) {
            dispatch(actions.setError());
        }
    };
};
