import axios from "axios"

export const publicIstance = axios.create({
    baseURL: 'https://connections-api.herokuapp.com'
});

export const privateInstance = axios.create({
    baseURL: 'https://connections-api.herokuapp.com'
});

export const setToken = (token) => {
    privateInstance.defaults.headers.common['Authorization'] = token;
};

export const delToken = () => {
    delete privateInstance.defaults.headers.common['Authorization'];
};