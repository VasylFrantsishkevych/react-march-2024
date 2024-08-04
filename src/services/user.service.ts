import { urls } from "../constants";
import { IUser } from "../models";
import { axiosInstance } from "./axios.service";

export const userService = {
   getAll: async () => {
       const response = await axiosInstance.get<IUser[]>(urls.users.base);
       return response.data;
   }
}