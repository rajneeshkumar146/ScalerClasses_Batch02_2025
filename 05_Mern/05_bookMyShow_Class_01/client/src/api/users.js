const { axiosInstance } = require(".");


export const LoginUser = async (value) => {
    try {
        const response = await axiosInstance.post("api/users/login", value);
        return response.data;
    } catch (err) {
        console.log("Error occuered at client side in login endpoint:", err);
    }
}


export const RegisterUser = async (value) => {
    try {
        const response = await axiosInstance.post("api/users/register", value);
        return response.data;
    } catch (err) {
        console.log("Error occuered at client side in register endpoint:", err);
    }
}

export const GetCurrentUser = async (value) => {
    try {

    } catch (err) {
        console.log("Error occuered at client side endpoint, while getting the user:", err);
    }
}

export const ForgetPassword = async (value) => { }

export const ResetPassword = async (value, email) => { }