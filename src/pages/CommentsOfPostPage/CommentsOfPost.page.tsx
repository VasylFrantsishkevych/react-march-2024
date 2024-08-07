import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { postActions } from "../../redux/slices/post.slice";
import { useParams } from "react-router-dom";
import { Comment } from "../../components";

const CommentsOfPostPage = () => {
   const {id} = useParams();
   const { commentsOfPost, isLoaded } = useAppSelector((state) => state.postSlice);
   
   const dispatch = useAppDispatch();
  
    useEffect(() => {
      if (id) dispatch(postActions.getCommentsOfPost(+id));
    }, []);

   return (
      <div>
         {!isLoaded && <div>Loading in process....</div>}
         {
            commentsOfPost.map(comment => <Comment key={comment.id} comment={comment}/>)
         }
      </div>
   )
};

export {CommentsOfPostPage};