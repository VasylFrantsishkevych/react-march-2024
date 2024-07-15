import React, {FC} from 'react';
import {IPost} from "../../models/post.model";
import './Post.css';

interface IProps {
    post: IPost,
}

const Post: FC<IProps> = ({post}) => {
    
    return (
        <div className={"post-card"}>
        <h2>
          <span>ID:</span>{post.id} - <span>UserID:</span>{post.userId}
        </h2>
        <p>
          {post.title}
        </p>
        <p>
          {post.body}
        </p> 
      </div>
    );
};

export default Post;