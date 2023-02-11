import axios, { AxiosHeaders } from 'axios';

const flitterApi = axios.create({
    baseURL: 'http://localhost:3000/api'
});

flitterApi.interceptors.request.use((config) => {
    const token = localStorage.getItem('accessToken');
   if(token) {
        (config.headers as AxiosHeaders).set("Authorization", `Bearer ${token}`, true);
    }
    return config;
})



export default flitterApi;