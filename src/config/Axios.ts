import axios from "axios";
import LocalStorageService from "../services/LocalStorageService";
import { BASE_URL } from "./Endpoints";

const Axios = axios.create();

Axios.defaults.baseURL = BASE_URL;
Axios.defaults.headers = {
  "Content-Type": "application/json",
};

Axios.interceptors.request.use((config) => {
  const authToken = LocalStorageService.getAuthToken();
  if (authToken) {
    config.headers.Identity = authToken;
  }
  return config;
});

export default Axios;
