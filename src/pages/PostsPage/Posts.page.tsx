import { useEffect, useState } from "react";
import { Post } from "../../components";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { postActions } from "../../redux/slices/post.slice";

const PostsPage = () => {
   let {
      postSlice: { posts, isLoaded },
    } = useAppSelector((state) => state);
  
    let dispatch = useAppDispatch();
  
    useEffect(() => {
      dispatch(postActions.loadPosts());
    }, []);

   return (
      <div>
         {
            posts.map(post => <Post key={post.id} post={post}/>)
         }
      </div>
   )
};

export {PostsPage};