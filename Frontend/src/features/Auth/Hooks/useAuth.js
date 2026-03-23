import { useContext } from "react";
import { AuthContext } from "../auth.context";
import {register, login , logout, getMe} from "../services/auth.api.js"

export const useAuth = () => {

    const context = useContext(AuthContext);
    const {user, setUser, loading, setLoading} = context;

    const handleLogin = async ({email, password}) => {
        setLoading(true);
try {
            const data = await login({email, password});
            console.log(data)
            setUser(data.data);
} catch (error) {
    console.log(error)
    setLoading(false);
}

    }

    const handleRegister = async({username, fullName, email, profession, password}) => {
        setLoading(true);
        const data = await register({username, fullName, email, profession, password});

        setUser(data.data);
        setLoading(false);
    }

    const handleLogout = async () => {
        setLoading(true);
        const data = await logout();

        setUser(null);
        setLoading(false);
    }

    const handleGetMe = async () => {
        setLoading(true);
        const data = await getMe();

        setUser(data.data);
        setLoading(false);
    }

    return {user, loading, handleRegister, handleLogin, handleLogout, handleGetMe};
}