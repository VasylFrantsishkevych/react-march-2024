import React, {FC} from 'react';
import {IPost} from "../../models/post.model";
import './Post.css';

interface IProps {
    post: IPost,
}

const Post: FC<IProps> = ({post}) => {
    console.log(post);
    return (
        <div className={'post-card'}>
            <div>
                <h2>{post.title}</h2>
                <p><span>UserID:</span>{post.userId}</p>
                <p>{post.body}</p>
            </div>
            <div className={'reactions'}>
                <p><span>Like: </span>{post.reactions.likes}</p>
                <p><span>Dislikes:</span>{post.reactions.dislikes}</p>
            </div>
        </div>
    );
};

export default Post;