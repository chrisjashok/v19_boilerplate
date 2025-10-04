import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/', // Replace with your actual API base URL
  timeout: 10000, // optional timeout in ms
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optional: Add a request interceptor
// axiosInstance.interceptors.request.use(
//   config => {
//     // For example, add a token if available
//     const token = localStorage.getItem('token');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   error => Promise.reject(error)
// );

// Optional: Add a response interceptor
// axiosInstance.interceptors.response.use(
//   response => response,
//   error => {
//     // Handle global errors (e.g., 401 unauthorized)
//     if (error.response?.status === 401) {
//       console.error("Unauthorized - redirect to login");
//       // You could redirect or logout user
//     }
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
