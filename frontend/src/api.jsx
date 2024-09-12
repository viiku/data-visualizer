import axios from 'axios';

const API = axios.create({
  baseURL: 'http://127.0.0.1:8000/', // Base URL of the Django backend
});

// Attach the token to every request if available
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Token ${token}`;
  }
  return config;
});

export default API;
