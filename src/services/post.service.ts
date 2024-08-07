import { urls } from "../constants/urls";
import { IComment, IPost } from "../models";
import { axiosInstance } from "./axios.service";

const postService = {
   getAll: async (): Promise<IPost[]> => {
       let postsResponse = await axiosInstance.get<IPost[]>(urls.posts.base);
       return postsResponse.data;
   },
   getById: async (id: number): Promise<IPost> => {
      const response = await axiosInstance.get<IPost>(urls.posts.byId(id));
      return response.data;
   },
   commentsOfPost: async (id: number): Promise<IComment[]> => {
      const response = await axiosInstance.get<IComment[]>(urls.posts.commentsOfPost(id));
      return response.data;
   }
}
export {
   postService
}