import React, {Component} from 'react';

import {IPost} from "../../models/post.model";
import PostComponent from "../Post/PostComponent";

import './PostsComponent.css';

type Props = {
    posts: IPost[];
}

class PostsComponent extends Component<Props> {

    render() {
        console.log(this.props.posts)
        return (
            <div className={'posts-list'}>
                {
                    this.props.posts.length > 0
                        ? this.props.posts.map(post => <PostComponent key={post.id} post={post}/>)
                        : <h3>Цей користувач ще немає постів</h3>
                }
                {/*{*/}
                {/*    this.props.posts.map(post => <PostComponent key={post.id} post={post}/>)*/}
                {/*}*/}
            </div>
        );
    }
}

export default PostsComponent;