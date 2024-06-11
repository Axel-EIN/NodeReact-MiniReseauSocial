import axios from "axios";
import config from "../config";

console.log(config.apiBaseUrl)
const apiClient = axios.create({
  baseURL: 'http://localhost:8080/api',
  withCredentials: true,
});

export default apiClient;


export const logIn = async (email, password) => {
  const user = await apiClient.post("/user/sign", {
    email,
    password,
  });

  return user.data;
};

export const register = (user) => apiClient.post("/user/add", user);

export const getAllMessages = () => apiClient.get("/inbox/all");



