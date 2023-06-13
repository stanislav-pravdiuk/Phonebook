import axios from "axios"

const publicIstance = axios.create({
    baseURL: 'https://connections-api.herokuapp.com'
});

const privateInstance = axios.create({
    baseURL: 'https://connections-api.herokuapp.com'
});

const setToken = (token) => {
    privateInstance.defaults.headers.common['Authorization'] = token;
};

export const delToken = () => {
    delete privateInstance.defaults.headers.common['Authorization'];
};

export const createUser = async (body) => {
    return await publicIstance.post('/users/signup', body)
};

export const logInUser = async (body) => {
    const { data } = await publicIstance.post('/users/login', body);
    setToken(`Bearer ${data.token}`)
    return data
};

export const getProfile = async () => {
    const { data } = await privateInstance('/users/current')
    return data
};

export const postContact = async (body) => {
    return await privateInstance.post('/contacts', body)
};

export const getContacts = async () => {
    const { data } = await privateInstance('/contacts')
    return data
};