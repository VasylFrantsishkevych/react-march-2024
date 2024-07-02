import axios from "axios";

const baseURL = 'https://dummyjson.com';

const urls = {
    users: '/users',
    posts: '/posts',
}

let axiosInstance = axios.create({
    baseURL
})

const getAllUsers = async () => {
    return await axiosInstance.get(`${urls.users}`).then(res => res.data)
}

const getAllPostsCurrentUser = async (id: number) => {
    return await axiosInstance.get(`${urls.posts}/user/${id}`).then(res => res.data)
}

export {
    getAllUsers,
    getAllPostsCurrentUser
}
