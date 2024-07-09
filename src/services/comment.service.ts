import { urls } from "../constants/urls";
import { IComment } from "../models";
import { axiosInstance } from "./axios.service";

const commentService = {
   getAll: async (): Promise<IComment[]> => {
       let axiosResponse = await axiosInstance.get<IComment[]>(urls.commentsUrls.all);
       return axiosResponse.data;

   }
}

export {
   commentService
}