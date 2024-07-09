import { urls } from "../constants/urls"
import { IUser } from "../models"
import { axiosInstance } from "./axios.service"

const userService = {
   getAll: async (): Promise<IUser[]> => {
       let usersResponse = await axiosInstance.get<IUser[]>(urls.usersUrls.all);
       return usersResponse.data;
   }
}

export {
   userService
}