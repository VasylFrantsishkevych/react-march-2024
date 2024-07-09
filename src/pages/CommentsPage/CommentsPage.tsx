import { useEffect, useState } from "react";
import { IComment } from "../../models";
import { commentService } from "../../services";
import { Comment } from "../../components";

const CommentsPage = () => {
   const [comments, setComments] = useState<IComment[]>([]);

   useEffect(() => {
      commentService.getAll().then(comment => setComments([...comment]));
   }, [])
   return (
      <div>
         {
            comments.map(comment => <Comment key={comment.id} comment={comment}/>)
         }
      </div>
   )
};

export {CommentsPage};