import axios from "axios";

const api = axios.create({
    baseURL: "/",
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
    try {
        const response = await api.get("/api/user/get-me");
        // console.log(response)
        return response.data;
        
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const getQuestions = async () => {
    try{
        const response = await api.get("/api/parse/get-questions");
        // console.log(response);
        return response.data;
    } catch(error) {
        console.log(error);
        throw error;
    }
}