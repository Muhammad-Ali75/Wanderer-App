import axios from "axios";
import * as SecureStore from "expo-secure-store";

const UserAPI = axios.create({
  baseURL: "http://localhost:5000",
});

UserAPI.interceptors.request.use(async function(config) {
  const token = await SecureStore.getItemAsync("access_token");
  if (!token) return config;

  config.headers["Authorization"] = token;

  return config;
});

export default UserAPI;
