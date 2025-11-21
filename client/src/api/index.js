import axios from 'axios';

const api = axios.create({
  baseURL: '/', // Proxied by Vite
});

export default api;
