import { createContext, useState, useEffect } from 'react';
import { logIn, register } from '../api/api-client.js'; 
import axios from 'axios';
import { baseUrl } from '../utils/constants/urls.js';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
 
    const getUser = async () => {
      try {

        const localUser = localStorage.getItem('user');
        if ( localUser != null)
            setUser(JSON.parse(localUser));

      } catch (error) {
        console.error('error', error);
      }
    };

    getUser();
  }, []);

  const login = async (email, password) => {
    const userData = await logIn(email, password);
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));

    return userData;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user'); 
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

