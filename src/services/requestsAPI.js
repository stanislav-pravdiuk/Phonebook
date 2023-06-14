import { setToken, privateInstance, publicIstance } from "./instance";

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

export const deleteContact = async (body) => {
    return await privateInstance.delete(`${body}`);
};