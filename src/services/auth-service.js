import axios from "axios"

const instance = axios.create({
    baseURL: 'https://connections-api.herokuapp.com'
});

const setToken = (token) => {
    instance.defaults.headers.common['Authorization'] = token;
};

export const delToken = () => {
    delete instance.defaults.headers.common['Authorization'];
};

export const createUser = async (body) => {
    return await instance.post('/users/signup', body)
};

export const logInUser = async (body) => {
    const { data } = await instance.post('/users/login', body);
    setToken(`Bearer ${data.token}`)
    return data
};

export const getProfile = async () => {
    const { data } = await instance('/users/current')
    return data
};