
import { createContext, useState, useEffect } from 'react';
import { logIn, register } from '../api/api-client.js'; 
import axios from 'axios';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
 
    const getUser = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/user/current/get', {
          withCredentials: true,
        });
        const userData = response.data;
        console.log(userData);
        setUser(userData);
      } catch (error) {
        console.error('error', error);
      }
    };

    getUser();
  }, []);

  const login = async (email, password) => {
    const userData = await logIn(email, password);
    setUser(userData);

    return userData;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token'); 
  };

  const registerUser = async (userData) => {
    const newUser = await register(userData);
    setUser(newUser);
  };

  return (
    <UserContext.Provider value={{ user, login, logout, registerUser }}>
      {children}
    </UserContext.Provider>
  );
};

