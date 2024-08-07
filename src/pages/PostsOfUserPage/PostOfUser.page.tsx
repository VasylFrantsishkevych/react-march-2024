import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { useParams } from "react-router-dom";
import { userActions } from "../../redux/slices";
import { PostDetails } from "../../components";


const PostsOfUserPage = () => {
   const {id} = useParams();
   const {postsOfUser, isLoaded} = useAppSelector((state) => state.userSlice);
  
    const dispatch = useAppDispatch();
  
    useEffect(() => {
      if (id) dispatch(userActions.getPostsOfUser(+id));
    }, []);

   return (
      <div>
         {!isLoaded && <div>Loading in process....</div>}
         {
            postsOfUser.map(post => <PostDetails key={post.id} post={post}/>)
         }
      </div>
   )
};

export {PostsOfUserPage};