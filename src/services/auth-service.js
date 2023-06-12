import axios from "axios"

const instance = axios.create({
    baseURL: 'https://connections-api.herokuapp.com'
});

export const createUser = async (body) => {
    return await instance.post('/users/signup', body)
};

export const logInUser = async (body) => {
    const { data } = await instance.post('/users/login', body)
    return data
};
