import { FC } from "react";

import { IPost } from "../../models";
import "./PostDetails.css";
import { useNavigate } from "react-router-dom";

interface IProps {
  post: IPost;
}

const PostDetails: FC<IProps> = ({ post }) => {
  const navigate = useNavigate();

  return (
    <div className={"post-details-card"}>
      <h2>
        <span>ID:</span>{post.id} - <span>UserID:</span>{post.userId}
      </h2>
      <p>
        {post.title}
      </p>
      <p>
        {post.body}
      </p>
      <div className={'btn'}>
        <button onClick={() => navigate(`/posts/${post?.id}/comments`)}>Comments Of Post</button> 
      </div>
    </div>
  );
};

export { PostDetails };