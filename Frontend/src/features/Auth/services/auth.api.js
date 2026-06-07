import axios from "axios";

const api = axios.create({
    baseURL: "http://127.0.0.1:8000",
    withCredentials: true
});

export const register = async ({username, fullName, email, profession, password}) => {
    try {
        const response = await api.post("/api/user/register-user",{
            username, 
            fullName, 
            email, 
            profession, 
            password
        })

        return response.data;

    } catch (error) {
        console.log(error);
    }
}

export const login = async ({email, password}) => {
    try {
        const response = await api.post("/api/user/login-user", {
            email,
            password
        })

        return response.data;

    } catch (error) {
        console.log(error);
    }
}

export const logout = async () => {
    try {
        const response = await api.get("/api/user/logout-user");

        console.log(response);

        return response.data;

    } catch (error) {
        console.log(error);
    }
}

export const getMe = async () => {
    // try {
        const response = await api.get("/api/user/get-me");
        console.log(response)
        return response.data;
        
    // } catch (error) {
    //     console.log(error);
    // }
}