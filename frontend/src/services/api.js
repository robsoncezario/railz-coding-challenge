import axios from "axios";

const baseAPI = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

baseAPI.interceptors.request.use(
  function handleRequest(config) {
    config.headers["Content-Type"] = "application/json";

    return config;
  },

  function handleError(error) {
    return Promise.reject(error);
  }
);

baseAPI.interceptors.response.use(
  function handleResponse(response) {
    return response;
  },

  function handleError(error) {
    return Promise.reject(error);
  }
);

export default baseAPI;
