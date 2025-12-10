const { axiosInstance } = require(".");


export const LoginUser = async (value) => {
    try {
        const response = await axiosInstance.post("api/users/login", value);
        // TODO(rajneesh): Remove this line once development is done.
        console.log("In client, user is about get login.");
        return response.data;
    } catch (err) {
        console.log("Error occuered at client side in login endpoint:", err);
    }
}


export const RegisterUser = async (value) => {
    try {
        const response = await axiosInstance.post("api/users/register", value);
        // TODO(rajneesh): Remove this line once development is done.
        console.log("In client, user is about get registered.");
        return response.data;
    } catch (err) {
        console.log("Error occuered at client side in register endpoint:", err);
    }
}

export const GetCurrentUser = async () => {
    try {
        const response = await axiosInstance.get("api/users/get-current-user");
        return response.data;

    } catch (err) {
        console.log("Error occuered at client side endpoint, while getting the user:", err);
    }
}

export const ForgetPassword = async (value) => {
    try {
        const response = await axiosInstance.patch(
            "api/users/forgetpassword",
            value
        );
        return response.data;
    } catch (err) {
        console.log(err);
    }
};

export const ResetPassword = async (value, email) => {
    try {
        const response = await axiosInstance.patch(
            `/api/users/resetpassword/${email}`,
            value
        );
        return response.data;
    } catch (err) {
        console.log(err);
    }
};