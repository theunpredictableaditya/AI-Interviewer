import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState(null);

    return(
        <AuthContext.Provider value={{user, setUser, loading, setLoading, questions, setQuestions}} >
            {children}
        </AuthContext.Provider>
    )
}