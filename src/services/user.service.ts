import { urls } from "../constants";
import { IPost, IUser } from "../models";
import { axiosInstance } from "./axios.service";

export const userService = {
   getAll: async (): Promise<IUser[]> => {
       const response = await axiosInstance.get<IUser[]>(urls.users.base);
       return response.data;
   },
   getById: async (id: number): Promise<IUser> => {
        const response = await axiosInstance.get<IUser>(urls.users.byId(id));
        return response.data;
   },
   postsOfUser: async (id: number): Promise<IPost[]> => {
    const response = await axiosInstance.get<IPost[]>(urls.users.postsOfUser(id));
    return response.data;
}
}