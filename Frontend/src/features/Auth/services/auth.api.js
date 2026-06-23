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

export const  parsePDF = async (formData) => {
    try {
        const response = await api.post("/api/parse/parsePDF", formData, {headers: {
            'Content-Type': 'multipart/form-data'
        }})

        return response.data;
    } catch (error) {
        console.log(error);
        throw error;   
    }
}

export const answerReport = async (questionAttempted, userAnswer) => {
    console.log(questionAttempted, userAnswer)
    try {
        const response = await api.post("/api/parse/get-answerReport", {
            userAnswer,
            questionAttempted
        })

        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const generateSpeech = async (questionText) => {
    try {
        const response = await api.post("/api/parse/generate-speech", {
            questionText
        }, {
            responseType: 'blob'
        });

        const audioBlob = response.data;
        const audioUrl = URL.createObjectURL(audioBlob);
        
        return audioUrl;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const generateMock = async (resumeText) => {
    try {
        const response = await api.post("/api/parse/generate-mock", {
            resumeText
        });

        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}


export const evaluateMock = async (mockData) => {
    try {
        const response = await api.post("/api/parse/evaluate-mock", {
            mockData
        });

        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}