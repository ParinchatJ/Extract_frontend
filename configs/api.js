import axios from 'axios';

const api = axios.create({
  withCredentials: true,
  baseURL: 'https://extrack-backend.vercel.app'
})

export default api