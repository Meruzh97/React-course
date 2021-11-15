import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "09dc7653-b9cf-454d-bad7-3237380a337e"
    }
});

export const usersApi = {
    getUsers(currentPage=1, pageSize=10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(r => {
            return r.data;
    })
}}