import { FC } from "react";

import { IComment } from "../../models";
import "./Comment.css";

interface IProps {
  comment: IComment;
}

const Comment: FC<IProps> = ({ comment }) => {
  return (
    <div className={"comment-card"}>
      <h2>
        <span>ID:</span>{comment.id} - <span>PostID:</span>{comment.postId}
      </h2>
      <p>
        {comment.name}
      </p>
      <p>
        {comment.email}
      </p>
      <p>
         {comment.body}
      </p>
    </div>
  );
};

export { Comment };