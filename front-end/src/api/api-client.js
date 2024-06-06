import axios from "axios";
import config from "../config";


const apiClient = axios.create({
  baseURL: config.apiBaseUrl,
  withCredentials: true,
});

export default apiClient;


export const logIn = async (email, password) => {
  const user = await apiClient.post("/user/log-in", {
    email,
    password,
  });

  return user.data;
};

export const register = (user) => apiClient.post("/user/add", user);



