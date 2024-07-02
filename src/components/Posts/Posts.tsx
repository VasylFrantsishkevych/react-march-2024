import React, {FC} from 'react';
import Post from "../Post/Post";
import {IPost} from "../../models/post.model";
import './Posts.css';

interface IProps {
    posts: IPost[],
}

const Posts: FC<IProps> = ({posts}) => {
    return (
        <div className={'posts-list'}>
            {
                posts.map(post => <Post key={post.id} post={post}/>)
            }
        </div>
    );
};

export default Posts;