import { urls } from "../constants/urls";
import { IPost } from "../models";
import { axiosInstance } from "./axios.service";

const postService = {
   getAll: async (): Promise<IPost[]> => {
       let postsResponse = await axiosInstance.get<IPost[]>(urls.posts.base);
       return postsResponse.data;

   }
}

export {
   postService
}