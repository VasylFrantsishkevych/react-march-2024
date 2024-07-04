import {axiosInstance, urls} from "./axios.service";

export class UserService {
    getAllUsers = async () => {
        return await axiosInstance.get(`${urls.users}`).then(res => res.data)
    }

    getAllPostsCurrentUser = async (id: number) => {
        return await axiosInstance.get(`${urls.posts}/user/${id}`).then(res => res.data)
    }
}