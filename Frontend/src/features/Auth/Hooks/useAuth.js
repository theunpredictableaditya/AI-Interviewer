import { useContext } from "react";
import { AuthContext } from "../auth.context";
import { register, login, logout, getMe } from "../services/auth.api.js";

export const useAuth = () => {
  const context = useContext(AuthContext);
  const { user, setUser, loading, setLoading } = context;

  const handleLogin = async ({ email, password }) => {
    setLoading(true);
    try {
      const data = await login({ email, password });

      console.log(data);

      setUser(data.data);

      if(data.statusCode === 200){
        return true;
      }else{
        return false;
      }
    } catch (error) {
      console.log(error);
    } finally {
        setLoading(false);
    }
  };

  const handleRegister = async ({
    username,
    fullName,
    email,
    profession,
    password,
  }) => {
    setLoading(true);
    try{
        const data = await register({
            username,
            fullName,
            email,
            profession,
            password,
        });

        console.log(data)
        
        setUser(data.data);

        if(data.statusCode === 201){
          return true;
        }else{
          return false;
        }
    } catch (error) {
        console.log(error);
    } finally {
        setLoading(false);
    }
  };

  const handleLogout = async () => {
    setLoading(true);
    try{   
        const data = await logout();
        setUser(null);

        if(data.statusCode === 200) {
          return true;
        }else{
          return false;
        }
    }catch (error) {
        console.log(error);
    } finally {
        setLoading(false);
    }
  };

  const handleGetMe = async () => {
    setLoading(true);
    try{
        const data = await getMe();
        // console.log(data);
        setUser(data.data);
        return true;
      } catch (error) {
        setUser(null);
        return false;
    } finally {
        setLoading(false);
    }
  };

  return {
    user,
    loading,
    handleRegister,
    handleLogin,
    handleLogout,
    handleGetMe,
  };
};
