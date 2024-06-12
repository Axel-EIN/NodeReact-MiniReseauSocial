import axios from "axios";
import config from "../config";
import { baseUrl } from '../utils/constants/urls.js';

console.log(config.apiBaseUrl)
const apiClient = axios.create({
  baseURL: baseUrl,
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



