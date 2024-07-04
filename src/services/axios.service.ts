import axios from "axios";

const baseURL = 'https://dummyjson.com';

const urls = {
    users: '/users',
    posts: '/posts',
}

const axiosInstance = axios.create({
    baseURL
})

export {
    urls,
    axiosInstance,
}