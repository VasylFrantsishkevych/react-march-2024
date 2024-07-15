import { urls } from "../constants";
import { ICreatePost } from "../models";
import { IPost } from "../models/post.model";
import { axiosInstance } from "./axios.service";

const postService = {
   getAll: async (): Promise<IPost[]> => {
       let postsResponse = await axiosInstance.get<IPost[]>(urls.postsUrls.all);
       return postsResponse.data;

   },
   createPost: async (data: ICreatePost): Promise<IPost> => {
      let response = await axiosInstance.post<IPost>(urls.postsUrls.all, data);
      return response.data
   }
}

export {
   postService
}