import axios from "axios"

const instance = axios.create({
    baseURL: 'https://connections-api.herokuapp.com'
});

export const createUser = async (data) => {
    return await instance.post('/users/signup', data)
};