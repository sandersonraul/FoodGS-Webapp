import axios from 'axios';

const api = axios.create({
    baseURL:"http://192.168.0.106:8090/"
});

export default api;