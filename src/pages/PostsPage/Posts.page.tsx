import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { postActions } from "../../redux/slices/post.slice";
import { PostDetails } from "../../components";

const PostsPage = () => {
   const { posts, isLoaded } = useAppSelector((state) => state.postSlice);
  
    let dispatch = useAppDispatch();
  
    useEffect(() => {
      dispatch(postActions.getPosts());
    }, []);

   return (
      <div>
         {!isLoaded && <div>Loading in process....</div>}
         {
            posts.map(post => <PostDetails key={post.id} post={post}/>)
         }
      </div>
   )
};

export {PostsPage};