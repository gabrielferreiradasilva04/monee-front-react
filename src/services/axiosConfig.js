import axios from "axios";

export const api = axios.create({
    baseURL: 'https://localhost:8443/api-monee',
    timeout: 10000,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    },
});