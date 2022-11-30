import axios from 'axios';
import queryString from 'query-string';

// Set up default config for http requests here
// Please have a look at here `https://github.com/axios/axios#request- config` for the full list of configs
const axiosClient = axios.create({
  baseURL: 'https://els12.herokuapp.com/',
  headers: {
    'content-type': 'application/json; charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'access-control-allow-origin'
  },
  paramsSerializer: params => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  const data = JSON.parse(localStorage.getItem("data"));
  if (data) {
    config.headers.Authorization = `Bearer ${data?.token}`;
  }
  return config;
});

axiosClient.interceptors.response.use((response) => {
  if (response && response.data) {
    return response.data;
  }

  return response;
}, (error) => {
  // Handle errors
  throw error;
});

export default axiosClient;